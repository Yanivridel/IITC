import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { IPost } from "@/types/postTypes";
import { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { deletePostById } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface PostCardProps {
    post: IPost;
    handleEditPost: (post: IPost) => void;
}

export default function PostCard({ post, handleEditPost} : PostCardProps ) {
    const [postToDelete, setPostToDelete] = useState<string | null>(null);
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { toast } = useToast()

    const deletePostMutation = useMutation({
        mutationFn: async (id: string) => {
            console.log("mut", id)
            await deletePostById(id);
        },
        onMutate: async (id: string) => {
    
            await queryClient.cancelQueries({ queryKey: ["posts"] });
    
            const previousPosts = queryClient.getQueryData<IPost[]>(["posts"]);
    
            queryClient.setQueryData(["posts"], (oldPosts: IPost[] | undefined) => {
                return oldPosts?.filter((post) => post._id !== id) || [];
            });
    
            return { previousPosts };
        },

        onError: (error, id, context) => {
            if (context?.previousPosts)
                queryClient.setQueryData(["posts"], context.previousPosts);
    
            toast({
                title: "Error",
                description: "Failed to delete the post. Please try again.",
                variant: "destructive",
            });
        },

        onSuccess: () => {
            toast({
                title: "Post Deleted",
                description: "The post has been successfully deleted.",
            });
        },
    
        onSettled: () => {    
            queryClient.invalidateQueries({ queryKey: ["posts"] });
        },
    });
    
    async function handleDeletePost() {
        setPostToDelete(null);
        try {
            await deletePostMutation.mutateAsync(postToDelete as string);
        } catch (error) {
            console.error("Failed to delete post:", error);
        }
    }

    return (
    <Card key={post._id} className="max-w-3xl min-w-72 mx-auto flex flex-col relative mb-6 p-4 hover:shadow-lg transition-shadow duration-300">
        <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
            <p>{post.content}</p>
        </div>
        {/* Button Actions */}
        <div className="flex justify-end gap-2 mt-4 absolute bottom-4 sm:right-3 sm:-top-1 sm:bottom-auto">
            <Button
            variant="default"
            onClick={() => handleEditPost(post)}
            >
            Edit
            </Button>
            <Button
            variant="destructive"
            onClick={() => setPostToDelete(post._id as string)}
            >
            Delete
            </Button>
        </div>

        <Dialog open={!!postToDelete} onOpenChange={(isOpen) => !isOpen && setPostToDelete(null)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Confirm Deletion</DialogTitle>
                </DialogHeader>
                    <p>Are you sure you want to delete this post? This action cannot be undone.</p>
                <DialogFooter className="mx-auto gap-2">
                    <Button variant="outline" onClick={() => setPostToDelete(null)}>
                    Cancel
                    </Button>
                <Button variant="destructive" onClick={handleDeletePost}>
                    Delete
                </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        

        <div className="flex justify-end gap-4 mt-4">
        <Button
            variant='link'
            onClick={() => navigate(`/post/${post._id}`)}
            >
            Learn More ...
            </Button>
        </div>
    </Card>
    )
}
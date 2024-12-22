import { Button } from "@/components/ui/button";
import { SkeletonCard, SkeletonDemo } from "@/components/Skeletons";
// Types
import { IPost } from "@/types/postTypes";
import { SquarePlus } from "lucide-react";
import PostCard from "@/components/PostCard";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePosts } from "@/customHooks/usePosts";
import { useState } from "react";
import Loading from "@/components/Loading";
import { useNavigate } from "react-router-dom";
import AddEditPostModal from "@/components/AddEditPostModal";
import { useToast } from "@/hooks/use-toast";
import { createPost, updatedPostById } from "@/services/api";

export default function Blog() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { toast } = useToast();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [postToEdit, setPostToEdit] = useState<IPost | null>(null);

    const { data: posts, error, isLoading, isFetching } = usePosts();

    const addPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        setIsModalOpen(false);
            toast({
                title: "Post Added",
                description: "The post has been successfully added.",
            });
        },
        onError: (error) => {
            toast({
                title: "Error",
                description: "Failed to add the post. Please try again.",
                variant: "destructive",
            });
        },
    });
    
    const editPostMutation = useMutation({
        mutationFn: (post: IPost) => updatedPostById(post),
        onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        setIsModalOpen(false);
            toast({
                title: "Post Updated",
                description: "The post has been successfully updated.",
            });
        },
        onError: (error) => {
            toast({
                title: "Error",
                description: "Failed to update the post. Please try again.",
                variant: "destructive",
            });
        },
    });

    function handleEditPost(post: IPost) {
        setIsModalOpen(true);
        setPostToEdit(post);
    }

    async function handleAddEditSubmit(post: IPost) {
        if(postToEdit) { // Edit Post
            try {
                const updatedPost = { _id: postToEdit._id, ...post};
                await editPostMutation.mutateAsync(updatedPost);
            } catch (error) {
                console.error("Failed to updating post:", error);
            }
            finally {
                setPostToEdit(null);
            }
        }
        else { // Add Post
            try {
                await addPostMutation.mutateAsync(post);
            } catch (error) {
                console.error("Failed to adding post:", error);
            }
        }
    }
    
    if (isLoading) return <Loading />
    if (error) {
        navigate('/404')
        return null;
    }
    if (!posts) return <p>Posts not found</p>;

    return (
    <div className="container mx-auto p-6 max-w-7xl">
        <Button className="fixed bottom-10 right-10 z-50 w-10 h-10" onClick={() => setIsModalOpen(true)}>
            <SquarePlus />
        </Button>
        <AddEditPostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddEditSubmit} postToEdit={postToEdit} />
        
        {/* Posts Section */}
        <div className="space-y-6">
        <h1 className="text-6xl text-center">Posts</h1>
        {posts.map((post: IPost) => (
            <PostCard key={post._id} post={post} handleEditPost={handleEditPost} />
        ))}
        </div>
    </div>
    );
}



        {/* Add / Edit Modal */}
        {/* {<AddEditRecipeModal
        isOpen={addRecipe || !!editRecipe}
        onClose={() => { setAddRecipe(false); setEditRecipe(null); }}
        initialRecipe={editRecipe || undefined}
        setAddRecipe={setAddRecipe}
        setEditRecipe={setEditRecipe}
        editRecipe={editRecipe}
        />} */}
        {/* Delete Modal */}
        {/* { deleteModal && 
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Delete Recipe</h2>
                <p>Are you sure you want to delete ?</p>
                <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setDeleteModal("")}>Cancel</Button>
                <Button onClick={handleDeleteRecipe}>Delete</Button>
                </div>
            </div>
        </div>
        } */}
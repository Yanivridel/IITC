import { Button } from "@/components/ui/button";
import { SkeletonCard } from "@/components/Skeletons";
// Types
import { IPost } from "@/types/postTypes";
import { SquarePlus } from "lucide-react";
import PostCard from "@/components/PostCard";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePosts } from "@/customHooks/usePosts";
import { useState, useEffect } from "react";
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

    const {
        data: postsData,
        error,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = usePosts();

    const posts = postsData?.pages.flatMap((page) => page) || [];
    console.log(postsData)

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
        if (postToEdit) {
        // Edit Post
            try {
                const updatedPost = { _id: postToEdit._id, ...post };
                await editPostMutation.mutateAsync(updatedPost);
            } catch (error) {
                console.error("Failed to update post:", error);
            } finally {
                setPostToEdit(null);
            }
        } else {
        // Add Post
            try {
                await addPostMutation.mutateAsync(post);
            } catch (error) {
                console.error("Failed to add post:", error);
            }
        }
    }

    // Infinite scroll handler
    useEffect(() => {
        function handleScroll() {
        if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 100
        ) {
            if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
            }
        }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);


    if (isLoading) return <Loading />;
    if (error) {
        navigate("/404");
        return null;
    }
    if (!posts.length) return <p>Posts not found</p>;

    return (
        <div className="container mx-auto p-6 max-w-7xl">
        <Button
            className="fixed bottom-10 right-10 z-50 w-10 h-10"
            onClick={() => {setIsModalOpen(true); setPostToEdit(null)}}
        >
            <SquarePlus />
        </Button>
        <AddEditPostModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleAddEditSubmit}
            postToEdit={postToEdit}
        />

        {/* Posts Section */}
        <div className="space-y-6">
            <h1 className="text-6xl text-center">Posts</h1>
            {posts.map((post: IPost) => (
            <PostCard key={post._id} post={post} handleEditPost={handleEditPost} />
            ))}
            {isFetchingNextPage && <Loading />}
            {!hasNextPage && (
            <p className="text-center text-gray-500">No more posts to load.</p>
            )}
        </div>
        </div>
    );
}

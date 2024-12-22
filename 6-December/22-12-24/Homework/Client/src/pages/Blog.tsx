import { Button } from "@/components/ui/button";
import { SkeletonCard, SkeletonDemo } from "@/components/Skeletons";
// Types
import { IPost } from "@/types/postTypes";
import { SquarePlus } from "lucide-react";
import PostCard from "@/components/PostCard";
import { useQueryClient } from "@tanstack/react-query";
import { usePosts } from "@/customHooks/usePosts";

export default function Blog() {
    const queryClient = useQueryClient();

    const { data: posts, error, isLoading, isFetching } = usePosts();
    
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <p>ERROR: {error.message}</p>;
    if (!posts) return <p>Posts not found</p>;

    return (
    <div className="container mx-auto p-6 max-w-7xl">
        {/* <Button className="fixed bottom-10 right-10 z-50 w-10 h-10" onClick={() => setAddRecipe(true)}>
            <SquarePlus />
        </Button> */}
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

        {/* Posts Section */}
        <div className="space-y-6">
        <h1 className="text-6xl text-center">Posts</h1>
        {!posts ? 
        <div className="container flex flex-col items-center mx-auto p-6">
            {[1,2,3,4].map((el)=> 
            <div  key={el} className="space-y-4 my-5">
                <SkeletonDemo/>
                <SkeletonCard/>
            </div>)}
        </div>
        :
        posts.map((post: IPost) => (
            <PostCard post={post}/>
        ))}
        </div>
    </div>
    );
}

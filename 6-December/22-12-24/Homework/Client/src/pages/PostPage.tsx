import Loading from "@/components/Loading";
import { usePost } from "@/customHooks/usePost";
import { useNavigate, useParams } from "react-router-dom";



export default function PostPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    if (!id) {
        navigate("/404");
        return null;
    }

    const { data: post, error, isLoading, isFetching } = usePost(id);
    
    if (isLoading) return <Loading/>
    if (error) {
        navigate('/404')
        return null;
    }
    if (!post) return <p>Post not found</p>;

    return (
        <div className="container mx-auto px-6 py-12">
        {/* Post Title */}
        <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
    
        {/* Metadata */}
        {post.createdAt && 
        <p className="text-gray-500 text-sm mt-2">
            Published on {new Date(post.createdAt).toLocaleDateString()}
        </p>
        }
    
        {/* Content */}
        <article className="mt-8 text-gray-700 text-lg">
            {post.content}
        </article>
    
        {/* Back Button */}
        <div className="mt-12">
            <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
            Go Back
            </button>
        </div>
        </div>
    );
}
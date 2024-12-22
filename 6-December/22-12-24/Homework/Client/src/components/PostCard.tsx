import { Card } from "./ui/card";
import { IPost } from "@/types/postTypes";
// Functions

interface PostCardProps {
    post: IPost;
}

export default function PostCard({ post } : PostCardProps ) {

    return (
        <Card key={post.id} className="flex flex-col relative mb-6 p-4 min-w-60 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                <p>{post.content}</p>
            </div>
    </Card>
    )
}
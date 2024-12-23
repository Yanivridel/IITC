import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();

    return (
    <div className="container mx-auto p-6 max-w-4xl">
        <Card className="shadow-lg">
            <CardHeader className="text-center">
            <h1 className="text-4xl font-bold mb-2">About Us</h1>
            <p className="text-gray-500">
                Welcome to our blog, your digital window into the vast tapestry of life. We believe life's a journey filled with endless possibilities, and we're here to explore them with you.
            </p>
            </CardHeader>
            <CardContent className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
                On this blog, you'll find a diverse range of articles covering everything from travel and technology to personal growth, health and wellness, and the latest news and current events. We delve into the depths of human experience, sharing insights, stories, and perspectives on the world around us.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to inspire, inform, and entertain. We strive to create a space where you can connect with like-minded individuals, broaden your horizons, and gain a deeper understanding of the world and yourself.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're seeking inspiration for your next adventure, looking for tips on improving your well-being, or simply curious about the latest trends, we invite you to explore our blog and join us on this exciting journey of discovery.
            </p>
            <div className="flex items-center space-x-6">
                <Avatar className="w-20 h-20">
                <AvatarImage src="https://tinyurl.com/2k2kphtv" alt="Team Leader" />
                <AvatarFallback>YR</AvatarFallback>
                </Avatar>
                <div>
                <h3 className="text-xl font-semibold">Yaniv Ridel</h3>
                <p className="text-gray-500">Head Blogger & Founder</p>
                </div>
            </div>
            <Button className="w-full md:w-auto" onClick={() => navigate('/blog')}>
                Explore The Blog
            </Button>
            </CardContent>
        </Card>
    </div>
);
}

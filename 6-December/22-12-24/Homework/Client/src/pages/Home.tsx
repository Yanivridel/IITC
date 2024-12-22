import { Button } from "@/components/ui/button";

export default function Home() {
    
    return (
        <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
            <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold">Welcome to My Blog</h1>
            <p className="mt-4 text-lg">
                Discover stories, tips, and insights on web development, design, and more.
            </p>
            <Button className="mt-6" size="lg">
                Explore Posts
            </Button>
            </div>
        </header>

        {/* Featured Posts */}
        <section className="py-12 container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-gray-800 text-center">Last Posts</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Example Posts */}
            {[1, 2, 3].map((post) => (
                <article
                key={post}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                <img
                    src={`https://via.placeholder.com/400x200?text=Post+${post}`}
                    alt={`Post ${post}`}
                    className="w-full h-48 object-cover"
                />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">Post Title {post}</h3>
                    <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, molestias.
                    </p>
                    <Button className="mt-4" size="sm">
                    Read More
                    </Button>
                </div>
                </article>
            ))}
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-200 py-6">
            <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
            <p className="mt-2">
                Follow us on{' '}
                <a href="#" className="text-blue-400 hover:underline">
                Twitter
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-400 hover:underline">
                LinkedIn
                </a>
                .
            </p>
            </div>
        </footer>
        </div>
    );
}

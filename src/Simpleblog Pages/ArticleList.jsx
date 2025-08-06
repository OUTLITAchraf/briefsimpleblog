import { useEffect, useState } from "react";

export default function ArticleList() {
    const api_key = "25e3a37a909044bcbb827df1829388f0";
    const URL_API_APPLE = `https://newsapi.org/v2/everything?q=apple&from=2025-08-05&to=2025-08-05&sortBy=popularity&apiKey=${api_key}`
    const [posts, setPosts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(5);

    useEffect(() => {
        fetch(URL_API_APPLE)
            .then(res => res.json())
            .then(data => {
                setPosts(data.articles || []);
            })
            .catch(err => console.error(err));
    }, []);

    const visiblePosts = posts.slice(0, visibleCount);

    return (
        <>
            <h1 className="text-4xl font-playfair font-bold mb-8">Last Posts</h1>

            {visiblePosts.length > 0 ? visiblePosts.map((post, i) => (
                <div key={i} className="flex flex-row my-5 p-5 border-2 border-black rounded-lg">
                    <img
                        src={post.urlToImage}
                        alt="imgPost"
                        className="w-[450px] h-[300px] object-cover"
                    />
                    <div className="mx-10 relative">
                        <h2 className="text-3xl font-playfair font-bold">{post.title}</h2>
                        <div className="flex justify-between my-5">
                            <p className="text-xl text-gray-800">{post.author
                                ? post.author.includes('(')
                                    ? post.author.match(/\(([^)]+)\)/)?.[1]
                                    : post.author
                                : 'Unknown'}</p>
                            <p className="text-2xl text-gray-800">
                                {post.publishedAt ? post.publishedAt.replace("T", " | ").replace("Z", "") : ""}
                            </p>
                        </div>
                        <p className="text-xl text-gray-500 mb-5">
                            {post.description}
                        </p>
                        <button
                        className="absolute bottom-3 right-4 bg-[#1E293B] text-white py-2 px-3 rounded-lg block justify-self-end">
                            Details
                        </button>
                    </div>
                </div>
            )) : (
                <p className="text-gray-500 text-xl">No Posts available.</p>
            )}

            {visibleCount < posts.length && (
                <button
                    onClick={() => setVisibleCount(prev => prev + 5)}
                    className="bg-[#1E293B] text-white px-6 py-3 rounded-lg border border-[#1E293B] transition hover:bg-white hover:text-[#1E293B] hover:border-[#1E293B] mt-5"
                >
                    Load More
                </button>
            )}

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-5 right-5 z-50 bg-[#1E293B] text-white px-4 py-2 rounded-full shadow-md hover:bg-white hover:text-[#1E293B] border border-[#1E293B] transition duration-300"
            >
                ↑ Top
            </button>
        </>
    );

}

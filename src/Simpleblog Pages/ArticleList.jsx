import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArticleCarousel from "./ArticleCarsouel";


export default function ArticleList() {
    const api_key = process.env.REACT_APP_API_KEY;
    const URL_API_APPLE = `https://newsapi.org/v2/everything?q=apple&from=2025-08-06&to=2025-08-06&sortBy=popularity&apiKey=${api_key}`
    const [article, setArticle] = useState([]);
    const [visibleCount, setVisibleCount] = useState(5);
    const location = useLocation();
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const handleDetailsClick = (index, article) => {
        navigate(`/details/${index}`, { state: { article: article } })
    }

    useEffect(() => {
        if (location.state?.success) {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000); 
        }
    }, [location.state]);

    useEffect(() => {
        const fetchAPIArticles = async () => {
            try {
                const res = await fetch(URL_API_APPLE);
                const data = await res.json();

                const apiArticles = data.articles || [];

                const userArticles = JSON.parse(localStorage.getItem("userArticles")) || [];

                const allArticles = [...userArticles, ...apiArticles];

                setArticle(allArticles);
            } catch (err) {
                console.error("Failed to fetch articles", err);
            }
        };

        fetchAPIArticles();
    }, []);

    // function clearAllArticles() {
    //     localStorage.removeItem("userArticles");
    //     alert("All articles removed!");
    // }

    const visibleArticles = article.slice(0, visibleCount);

    return (
        <>
            {showSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-5" role="alert">
                    <strong className="font-bold">Success! </strong>
                    <span className="block sm:inline">Article created successfully.</span>
                </div>
            )}

            <h1 className="text-4xl font-playfair font-bold mb-8">Featured Articles</h1>
            <ArticleCarousel articles={article} />

            <h2 className="text-4xl font-playfair font-bold mb-8">Last Articles</h2>
            {/* <button onClick={clearAllArticles} className="bg-red-600 text-white px-4 py-2 rounded">
                Clear All Articles
            </button> */}

            {visibleArticles.length > 0 ? visibleArticles.map((article, i) => (
                <div key={i} className="flex flex-row my-5 p-5 border-2 border-black rounded-lg">
                    <img
                        src={article.urlToImage}
                        alt="imgArticle"
                        className="w-[450px] h-[300px] object-cover"
                    />
                    <div className="ml-10 mr-5 relative">
                        <h2 className="text-3xl font-playfair font-bold">{article.title.slice(0, 100) + "..." }</h2>
                        <div className="flex justify-between my-5">
                            <p className="text-xl text-gray-800">{article.author
                                ? article.author.includes('(')
                                    ? article.author.match(/\(([^)]+)\)/)?.[1]
                                    : article.author
                                : 'Unknown'}</p>
                            <p className="flex flex-row items-center text-xl text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar mr-2"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>
                                {article.publishedAt ? article.publishedAt.split("T")[0] : ""}
                            </p>
                        </div>
                        <p className="text-xl text-gray-500 mb-5">
                            {article.description.slice(0, 250) + "..." }
                        </p>
                        <button onClick={() => handleDetailsClick(i, article)}
                            className="absolute bottom-3 right-4 bg-[#1E293B] text-white py-2 px-3 rounded-lg block justify-self-end">
                            Details
                        </button>
                    </div>
                </div>
            )) : (
                <p className="text-gray-500 text-xl">No Articles available.</p>
            )}

            {visibleCount < article.length && (
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

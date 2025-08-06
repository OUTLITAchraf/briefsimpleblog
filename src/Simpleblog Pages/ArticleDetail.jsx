import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function DetailsArticle() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const article = state?.article;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    if (!article) return <p className="text-red-500">No article data found.</p>;

    return (
        <div className="px-10 py-5">
            <button onClick={() => navigate("/")}
                className="bg-[#1E293B] text-white py-2 pl-1 pr-3 rounded-md mb-10 flex "
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                Back</button>
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <img src={article.urlToImage} alt="Article" className="w-full max-h-[500px] object-cover mb-5" />
            <p className="text-gray-500 text-sm mb-2">
                By {article.author || "Unknown"} | {article.publishedAt}
            </p>
            <p className="text-lg text-gray-700">{article.description}</p>
        </div>
    );
}

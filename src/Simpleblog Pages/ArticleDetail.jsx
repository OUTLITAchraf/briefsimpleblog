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

    if (!article) return <p className="text-red-500 text-3xl">No article data found.</p>;

    return (
        <div className="px-10 py-5">
            <button onClick={() => navigate("/")}
                className="bg-[#1E293B] text-white py-2 pl-1 pr-3 rounded-md mb-10 flex "
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                Back
            </button>
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <img src={article.urlToImage} alt="Article" className="w-full max-h-full object-cover mb-5" />
            <div className="flex flex-row justify-between">
                <p className="text-gray-500 text-md mb-2">
                    By {article.author || "Unknown"}
                </p>
                <p className="flex flex-row items-center text-gray-500 text-md mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar mr-2"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>
                    {article.publishedAt ? article.publishedAt.replace('T',' | ').replace('Z',''):""}
                </p>
            </div>
            <h3 className="text-2xl font-semibold my-3 ">Description</h3>
            <p className="text-lg text-gray-700">{article.description}</p>
            <h3 className="text-2xl font-semibold my-3 ">Content</h3>
            <p className="text-lg text-gray-700">{article.content}</p>
        </div>
    );
}

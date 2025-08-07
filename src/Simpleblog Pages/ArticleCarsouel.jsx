import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "./ArticleCarsouel.css";
import { useNavigate } from "react-router-dom";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: -70, zIndex: 1 }}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right-icon lucide-chevron-right"
            >
                <path d="m9 18 6-6-6-6" />
            </svg>
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: -120, zIndex: 1 }}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left-icon lucide-chevron-left"
            >
                <path d="m15 18-6-6 6-6" />
            </svg>
        </div>
    );
}

export default function ArticleCarousel({ articles }) {
    const carsouelArticles = articles.slice(0, 10);
    const navigate = useNavigate()

    const handleClick = (index, article) => {
        navigate(`/details/${index}`, { state: { article: article } })
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="max-w-4xl mx-auto mb-10">
            <Slider {...settings}>
                {carsouelArticles.map((article, index) => (
                    <div key={index} className="relative w-full h-[500px] overflow-hidden rounded-lg cursor-pointer" onClick={() => handleClick(index, article)}>
                        <img
                            src={article.urlToImage}
                            alt={article.title}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col bg-black bg-opacity-55 justify-end pb-10 px-4">
                            <h3 className="text-white text-3xl font-bold mb-2">{article.title.slice(0, 100) + '...'}</h3>
                            <p className="text-white text-md">{article.description.slice(0, 100) + '...'}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

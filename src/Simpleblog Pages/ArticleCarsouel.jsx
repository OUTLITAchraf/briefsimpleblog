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
            className={`${className} lg:mr-[-65px] z-[1] !block`}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right-icon lucide-chevron-right lg:w-[50px] lg:h-[50px]"
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
            className={`${className} lg:ml-[-100px] z-[1] !block`}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left-icon lucide-chevron-left lg:w-[50px] lg:h-[50px]"
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
        <div className="max-w-xl mx-10 lg:max-w-4xl lg:mx-auto mb-10">
            <Slider {...settings}>
                {carsouelArticles.map((article, index) => (
                    <div key={index} className="relative w-full h-[200px] lg:h-[500px] overflow-hidden rounded-lg cursor-pointer" onClick={() => handleClick(index, article)}>
                        <img
                            src={article.urlToImage}
                            alt={article.title}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col bg-black bg-opacity-55 justify-end px-2 pb-3 lg:pb-10 lg:px-4">
                            <h3 className="text-white text-[10px] font-semibold lg:text-3xl lg:font-bold mb-2">{article.title.slice(0, 100) + '...'}</h3>
                            <p className="text-white text-[6px] lg:text-lg">{article.description.slice(0, 100) + '...'}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

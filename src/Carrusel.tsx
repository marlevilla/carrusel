import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface CarouselProps {
    autoSlide?: boolean;
    autoSlideInterval?: number;
    slides: React.ReactNode[];
}

const Carrusel: React.FC<CarouselProps> = ({
    slides,
    autoSlide = false,
    autoSlideInterval = 3000,
}) => {
    const [curr, setCurr] = useState(0);

    const prev = () => {
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    };

    const next = () => {
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    };

    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, curr]);

    return (
        <div className="relative overflow-hidden  rounded-lg shadow-lg bg-gray-800">

            <div
                className="flex transition-transform ease-in-out duration-700"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="min-w-full flex-shrink-0">{slide}</div>
                ))}
            </div>


            <button
                type="button"
                title="Previous"
                onClick={prev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-white/80 text-gray-800 rounded-full shadow hover:bg-white"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                type="button"
                title="Next"
                onClick={next}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-white/80 text-gray-800 rounded-full shadow hover:bg-white"
            >
                <ChevronRight size={24} />
            </button>

            {/* Puntos */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={`transition-all w-3 h-3 bg-amber-400 rounded-full ${curr === i ? "p-2 bg-opacity-100" : "bg-opacity-50"}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carrusel;






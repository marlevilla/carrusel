import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";


interface CarouselProps {
    autoSlide?: boolean;
    autoSlideInterval?: number;

    slides: React.ReactNode[];
}

const Carrusel: React.FC<CarouselProps> = ({
    slides,
}) => {
    const [curr, setCurr] = useState(0);

    const prev = () => {
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    }

    const next = () => {
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
    }

    return (
        <div className="relative">

            {/* Cards */}
            <div className="overflow-hidden w-full rounded-lg shadow-lg bg-gray-800 px-4">
                <div
                    className="transition-transform ease-out duration-500 h-full flex justify-center items-center"
                >
                    {
                        slides[curr]
                    }
                </div>
            </div>

            <button
                type="button"
                title="Previous"
                onClick={prev}
                className="absolute top-1/2 left-0 md:left-[-60px] transform -translate-y-1/2 p-1 bg-white/80 text-gray-800 rounded-full shadow hover:bg-white" >

                <ChevronLeft size={24} />
            </button>

            <button
                type="button"
                title="next"
                onClick={next}
                className="absolute top-1/2 right-0 md:right-[-60px] transform -translate-y-1/2 p-1 bg-white/80 text-gray-800 rounded-full shadow hover:bg-white"
            >
                <ChevronRight size={24} />
            </button>

            {/* Puntos */}
            <div className="absolute bottom left-0 right-0 flex items-center justify-center gap-2">
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





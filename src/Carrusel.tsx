import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";


interface CarouselProps {
    autoSlide?: boolean;
    autoSlideInterval?: number;
    slides: string[];
}

const Carrusel: React.FC<CarouselProps> = ({
    autoSlide = false,
    autoSlideInterval = 3000,
    slides,
}) => {
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval]);

    return (
        <div className="relative w-full h-full max-w-4xl mx-auto">


            <div className="overflow-hidden rounded-lg shadow-lg">
                <div
                    className="flex transition-transform ease-out duration-500 h-full"
                    style={{ transform: `translateX(-${curr * 33.33}%)` }}
                >
                    {slides.map((img, index) => (
                        <div key={index} className="w-3xl p-5">
                            <img
                                src={img}
                                alt={`slide-${index}`}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>



            <button
                onClick={prev}
                className="absolute top-1/2 left-[-60px] transform -translate-y-1/2 p-1 bg-white/80 ml-4 text-gray-800 rounded-full shadow hover:bg-white" >

                <ChevronLeft size={24} />
            </button>
            <button
                onClick={next}
                className="absolute top-1/2 right-[-60px] transform -translate-y-1/2 p-1 bg-white/80 text-gray-800 rounded-full shadow hover:bg-white"
            >
                <ChevronRight size={24} />
            </button>


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





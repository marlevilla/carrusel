import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface CarouselProps {
    autoSlide?: boolean;
    autoSlideInterval?: number;
    slides: React.ReactNode[];
    title: string;
}

const Carrusel: React.FC<CarouselProps> = ({
    slides,
    title,
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
        <section className="relative rounded-lg shadow-lg bg-gray-800">
            <h1 className="text-3xl font-bold text-center py-4">{title}</h1>

            {/* Puntos de navegación */}
            <div className="flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={`transition-all w-3 h-3 bg-gray-500 rounded-full ${curr === i ? "bg-lime-200 bg-opacity-100" : "bg-opacity-50"}`}
                    />
                ))}
            </div>

            {/* Contenedor de imágenes */}
            <div className="relative flex justify-center items-center overflow-hidden">
                <div
                    className="flex transition-transform ease-in-out duration-700"
                    style={{ transform: `translateX(-${curr * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="min-w-full flex-shrink-0">{slide}</div>
                    ))}
                </div>

                {/* Botón Anterior */}
                <button
                    type="button"
                    title="Previous"
                    onClick={prev}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 p-1 sm:p-2 bg-white/80 text-gray-800 rounded-full shadow-lg hover:bg-white transition"
                >
                    <ChevronLeft size={30} />
                </button>

                {/* Botón Siguiente */}
                <button
                    type="button"
                    title="Next"
                    onClick={next}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 p-1 sm:p-2 bg-white/80 text-gray-800 rounded-full shadow-lg hover:bg-white transition"
                >
                    <ChevronRight size={30} />
                </button>
            </div>
        </section>
    );
};

export default Carrusel;

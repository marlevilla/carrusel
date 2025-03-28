import { useState, useEffect } from "react";

interface CarouselProps {
    autoSlide?: boolean;
    autoSlideInterval?: number;
    descriptions: string[];
    slides: string[];
}

const CarruselInfinito = ({
    slides,
    descriptions,
    autoSlide = true,
    autoSlideInterval = 4000,
}: CarouselProps) => {

    const [curr, setCurr] = useState(0);

    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, curr]);

    return (
        <div className="relative w-full">

            <div className="overflow-hidden w-full h-[500px]">
                <div className="w-full h-full flex items-center justify-center rounded-[20px] overflow-hidden">
                    <div
                        className="flex transition-transform ease-in-out duration-700 w-full h-full"
                        style={{ transform: `translateX(-${curr * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className="relative flex-shrink-0 w-full h-full">
                                <img className="w-full h-full object-cover" src={slide} alt={`Slide ${index}`} />
                                <div className="absolute left-[50%] bottom-[50%] transform -translate-x-1/2 w-full p-4 ">
                                    <p className="text-white">{descriptions[index]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Puntos de navegación */}
            <div className="absolute left-[50%] bottom-2 transform -translate-x-1/2 flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={`transition-all w-3 h-3 bg-gray-500 rounded-full ${curr === i ? "bg-lime-200 bg-opacity-100" : "bg-opacity-50"}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarruselInfinito;

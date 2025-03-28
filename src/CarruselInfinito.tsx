import { useState, useEffect } from "react";


interface CarouselProps {
    autoSlide?: boolean;
    autoSlideInterval?: number;
    slides: React.ReactNode[];
}

const CarruselInfinito: React.FC<CarouselProps> = ({
    slides,
    autoSlide = true,
    autoSlideInterval = 3000,
}) => {
    const [curr, setCurr] = useState(0);

    // const prev = () =>
    //     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, curr]);

    return (
        <div className="overflow-hidden relative w-[500px] h-[300px] mx-auto rounded-lg shadow-lg bg-gray-800">

            <div className="flex justify-center items-center overflow-hidden">
                <div
                    className="flex transition-transform ease-in-out duration-700"
                    style={{ transform: `translateX(-${curr * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="min-w-full flex-shrink-0">
                            <img className="w-full" src={`${slide}`} alt="" />
                        </div>
                    ))}
                </div>
            </div>



            {/* Indicadores */}
            <div className="absolute bottom-4 right-0 left-0 flex items-center justify-center gap-2">

                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 bg-white rounded-full transition-all ${curr === i ? "p-2" : "bg-opacity-50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarruselInfinito;








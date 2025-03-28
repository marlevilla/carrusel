import img1 from "../assets/Maskgroup.svg";
import img2 from "../assets/pexels.svg";
import img3 from "../assets/daniel.svg";
import img4 from "../assets/michael.svg";

const Cards4 = () => {

    const diapositivas: string[] = [img1, img2, img3, img4];

    return (
        <div className="flex flex-shrink-0 overflow-hidden mb-4 justify-center gap-4 py-4">
            {diapositivas.map((img, index) => (
                <div key={index} className="">
                    <img
                        src={img}
                        alt={`slide-${index}`}
                        className="rounded-lg w-60"
                    />
                </div>
            ))}
        </div>
    )
}

export default Cards4

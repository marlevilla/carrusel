import img1 from "../assets/default.svg";
import img2 from "../assets/Group34.svg";
import img3 from "../assets/Group35.svg";
import img4 from "../assets/Group36.svg";

const Cards2 = () => {

  const diapositivas: string[] = [img1, img2, img3, img4];

  return (
    <div className="flex flex-wrap  justify-center gap-4 py-4">
      {diapositivas.map((img, index) => (
        <div key={index} className="">
          <img
            src={img}
            alt={`slide-${index}`}
            className="rounded-lg w-32"
          />
        </div>
      ))}
    </div>
  )
}

export default Cards2
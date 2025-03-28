
const Cards = ({ imgs }: { imgs: string[] }) => {

  return (
    <div className="grid grid-cols-2 sm:flex sm:justify-center sm:items-center gap-4 py-4">
      {imgs.map((img, index) => (
        <div key={index} className={`flex items-center ${index % 2 !== 0 ? "justify-start" : "justify-end"}`}>
          <img
            src={img}
            alt={`slide-${index}`}
            className="rounded-lg w-32"
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;

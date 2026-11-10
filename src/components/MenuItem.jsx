import { Heart } from "lucide-react";
import Counter from "./Counter";
import Price from "./Price";
import Tags from "./tags";
import { useState } from "react";

function MenuItem({ item, currency }) {
  const [isLike, setIslike] = useState(false);

  function favorite() {
    setIslike((prev) => !prev);
  }

  return (
    <div className="flex gap-3 rounded-2xl border border-line p-3 bg-surface shadow-sm">
      <img
        className="object-cover size-11 shrink-0 rounded-full overflow-hidden bg-thumb"
        src={item.image}
        alt={item.name}
      />

      <div className="min-w-0 flex-1">
        <div className="flex  justify-between items-start ">
          <h2>{item.name}</h2>
          <Price currency={currency} amount={item.price} isSoldOut={item.isSoldOut} />
        </div>

        <p className="text-xs  text-gray-500 mt-1 line-clamp-2">{item.description}</p>
        <div className="flex  gap-1.5  ">
          {item.tags.map((tag) => (
            <Tags key={tag} label={tag} />
          ))}
        </div>
        <div>
          {item.isSoldOut && (
            <span className="border rounded-2xl px-1.5 py-0.5 text-xs bg-black text-gray-400">
              Soldout
            </span>
          )}
        </div>

        <div className="flex justify-between mt-2">
          <button className="border rounded-full px-1.5 bg-surface " onClick={favorite}>
            <Heart fill={isLike ? "#008000" : "#FFFFFF"} size={14} />
          </button>
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default MenuItem;

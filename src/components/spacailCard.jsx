import Price from "./Price";
import Tags from "./tags";

function SpacailCard({ specialItem, currency }) {
  console.log(specialItem);
  console.log(specialItem);
  return (
    <div className="pl-8 pr-8 pt-4 pb-4">
      <section className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-gray-100 bg-surface overflow-hidden  ">
        <div className="w-full sm:w-1/2 h-69 shrink-0">
          <img src={specialItem.image} alt="picture" className="h-full w-full  object-cover" />
        </div>
        <div>
          <div className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 border rounded-2xl px-2 ">
            <span>★</span>
            <span>Today's Special</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 leading-snug">{specialItem.name}</h3>
          <p className="text-x text-gray-500 mt-1 line-clamp-2">{specialItem.description}</p>
          <div className="flex flex-wrap gap-1.5 my-3 ">
            {specialItem.tags.map((tag) => (
              <Tags key={tag} label={tag} />
            ))}
          </div>
          <div className="mt-1 text-emerald-600 font-semibold text-lg">
            <Price amount={specialItem.price} curentcy={currency} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpacailCard;

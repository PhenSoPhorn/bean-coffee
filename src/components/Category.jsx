import MenuItem from "./MenuItem";

function Category({ name, items, currency }) {
  return (
    <section className="p-8">
      <div className="flex gap-1.5 items-center ">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">{name}</h2>
        <span className="text-xs">
          {items.length}
          {items.length > 1 ? "items" : "item"}
        </span>
      </div>
      <div className="border-b border-2 mt-2 mb-2"></div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} currency={currency} />
        ))}
      </div>
    </section>
  );
}

export default Category;

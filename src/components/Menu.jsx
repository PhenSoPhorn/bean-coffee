import Category from "./Category";

function Menu({ categories, currency }) {
  return (
    <div>
      {categories.map((category) => (
        <Category
          key={category.id}
          name={category.name}
          items={category.items}
          currency={currency}
        />
      ))}
    </div>
  );
}

export default Menu;

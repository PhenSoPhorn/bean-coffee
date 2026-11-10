import Chip from "./Chip";

function CategoriesChip({ categories, isActive, onSelect }) {
  return (
    <div className="flex-col gap-1.5 ">
      <p>
        <strong className="text-xs">Category</strong>
      </p>
      <div className="flex gap-0.5">
        {categories.map((category) => (
          <Chip
            key={category.id}
            label={category.name}
            isActive={category.id === isActive}
            onClick={() => onSelect(category.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoriesChip;

import CategorieChip from "./CategoriesChip";
import SearchBtn from "./SearchBtn";
import CurrencyChange from "./CurrencyChange";
import Chip from "./Chip";

function SearchBar({
  categories,
  currencies,
  onSelect,
  currencyId,
  isActive,
  setIsActive,
  inputValue,
  onChange,
  showsoldout,
  onTogglesoldout,
}) {
  const categoriesBar = [{ id: "all", name: "All" }, ...categories];

  return (
    <section className="border rounded-2xl p-4 flex justify-between items-center  border-gray-100  bg-surface shadow-sm mx-8">
      <SearchBtn inputValue={inputValue} onChange={onChange} />
      <CategorieChip categories={categoriesBar} isActive={isActive} onSelect={setIsActive} />
      <CurrencyChange currencies={currencies} isActive={currencyId} onSelect={onSelect} />

      <div>
        <Chip isActive={showsoldout} label="show Soldout" onClick={onTogglesoldout} />
      </div>
    </section>
  );
}

export default SearchBar;

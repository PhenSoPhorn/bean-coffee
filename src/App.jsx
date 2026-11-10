import { categories, currencies, specialItemId } from "../data";
import Header from "./components/header";
import Section from "./components/section";
import SpacailCard from "./components/spacailCard";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [currencyId, setCurrencyId] = useState(currencies[0].id);
  const totalItems = categories.flatMap((category) => category.items);
  const specialItem = totalItems.find((item) => item.id === specialItemId);
  const currency = currencies.find((currency) => currency.id === currencyId);
  const [isActive, setIsActive] = useState("all");
  const [input, setInput] = useState("");
  const [showsoldout, setShowsoldout] = useState(false);

  const fillterCategory =
    isActive === "all" ? categories : categories.filter((category) => category.id === isActive);

  const searchFillter = fillterCategory
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(input.toLowerCase()) && (!showsoldout || item.isSoldOut),
      ),
    }))
    .filter((category) => category.items.length > 0);

  function onTogglesoldout() {
    setShowsoldout((prev) => !prev);
  }

  return (
    <div className="bg-page font-sans min-h-screen text-ink ">
      <Header />
      <main className="mx-auto max-w-5xl px-4 pt-8 pb-16 sm:px-6">
        <SearchBar
          categories={categories}
          currencies={currencies}
          currencyId={currencyId}
          onSelect={setCurrencyId}
          isActive={isActive}
          setIsActive={setIsActive}
          inputValue={input}
          onChange={setInput}
          onTogglesoldout={onTogglesoldout}
          showsoldout={showsoldout}
        />
        <Section>
          <SpacailCard specialItem={specialItem} currency={currency} />
        </Section>
        <Menu categories={searchFillter} currency={currency} />
      </main>
      <Footer items={totalItems} />
    </div>
  );
}

export default App;

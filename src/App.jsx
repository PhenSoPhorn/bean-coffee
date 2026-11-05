import { categories, currency, specialItemId } from "../data";
import Header from "./components/header";
import Section from "./components/section";
import SpacailCard from "./components/spacailCard";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import SearchItems from "./components/SearchItems";

const totalItems = categories.flatMap((category) => category.items);
const specialItem = totalItems.find((item) => item.id === specialItemId);

console.log(currency);

function App() {
  return (
    <div className="bg-page font-sans min-h-screen text-ink ">
      <Header />
      <main className="mx-auto max-w-5xl px-4 pt-8 pb-16 sm:px-6">
        <SearchItems />
        <Section>
          <SpacailCard specialItem={specialItem} currency={currency} />
        </Section>
        <Menu categories={categories} currency={currency} />
      </main>
      <Footer items={totalItems} />
    </div>
  );
}

export default App;

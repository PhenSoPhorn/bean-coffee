import Currency from "./currency";

function CurrencyChange({ currencies, isActive, onSelect }) {
  return (
    <div>
      <p className="text-xs">
        <strong>Currency</strong>
      </p>
      <div className="flex border rounded border-gray-100 justify-around ">
        {currencies.map((currency) => (
          <Currency
            key={currency.id}
            label={currency.symbol}
            isActive={currency.id === isActive}
            onClick={() => onSelect(currency.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CurrencyChange;

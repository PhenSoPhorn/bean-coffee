function Price({ amount, currency, isSoldOut }) {
  const converted = (amount * currency.rate).toLocaleString("en-US", {
    minimumFractionDigits: currency.fractionDigits,
    maximumFractionDigits: currency.fractionDigits,
  });
  return (
    <div>
      <span
        className={`text-xl font-bold ${isSoldOut ? "text-muted line-through " : " text-brand"} `}
      >
        {currency.symbol}
        {converted}
      </span>
    </div>
  );
}

export default Price;

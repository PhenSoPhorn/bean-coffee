function Price({ amount, curentcy, isSoldOut }) {
  return (
    <div>
      <span
        className={`text-xl font-bold ${isSoldOut ? "text-muted line-through " : " text-brand"} `}
      >
        {curentcy}
        {amount}
      </span>
    </div>
  );
}

export default Price;

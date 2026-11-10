function Currency({ isActive, onClick, label }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`  border rounded-full hover:border-green-500  py-1 px-1.5 ${isActive ? "bg-green-500 text-white " : "bg-surface border-line text-ink-soft"}`}
      >
        {label}
      </button>
    </div>
  );
}

export default Currency;

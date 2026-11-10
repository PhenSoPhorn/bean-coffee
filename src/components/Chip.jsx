function Chip({ label, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={` border rounded-full py-1 px-1.5 hover:border-black ${isActive ? "bg-ink text-white " : "bg-surface border-line text-ink-soft"}`}
    >
      {label}
    </button>
  );
}

export default Chip;

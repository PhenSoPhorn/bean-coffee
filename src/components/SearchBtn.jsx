function SearchBtn({ inputValue, onChange }) {
  return (
    <div>
      <div className="text-xs">
        <strong>Search</strong>
      </div>
      <input
        className="border rounded "
        type="text"
        placeholder=" Find your favorite here"
        inputValue={inputValue}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBtn;

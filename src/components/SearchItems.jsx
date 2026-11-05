function SearchItems() {
  return (
    <div className="border rounded-2xl p-4 flex justify-between items-center">
      <div>
        <div>Search</div>
        <input className="border rounded  " type="text" placeholder=" Find your favorite here" />
      </div>
      <div>
        <p> Category</p>
        <nav className="flex gap-2">
          <a className="border rounded-full px-1.5 hover:bg-black hover:text-white " href="">
            All
          </a>
          <a className="border rounded-full px-1.5" href="">
            Coffee
          </a>
          <a className="border rounded-full px-1.5" href="">
            Tea
          </a>
        </nav>
      </div>
      <div>
        <p> Currency</p>
        <div className="border rounded flex justify-between pr-1 bg-gray-200">
          <a className="border rounded px-2 bg-white " href="">
            $
          </a>
          <a href="">៛</a>
        </div>
      </div>
      <p>Show sold out</p>
    </div>
  );
}

export default SearchItems;

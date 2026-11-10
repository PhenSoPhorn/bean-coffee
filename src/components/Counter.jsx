import { useState } from "react";

function Counter() {
  console.log("click on render");
  const [count, setCount] = useState(0);
  function subtract() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }

  function add() {
    setCount((prev) => prev + 1);
  }

  return (
    <div className=" border border-gray-500 rounded-2xl flex gap-1 pl-2">
      <button onClick={subtract}>-</button>
      <span>{count}</span>
      <button className=" border  border-gray-500 rounded-full px-2 bg-green-600" onClick={add}>
        +
      </button>
    </div>
  );
}

export default Counter;

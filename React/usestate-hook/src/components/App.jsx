import React, { useState } from "react";

function App() {
  const [count, setcount] = useState(0);
  function increase() {
    setcount(count + 1);
  }
  function decrease() {
    setcount(count - 1);
  }
  function reset() {
    setcount(5);
  }
  // function setcount(params) {}

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;

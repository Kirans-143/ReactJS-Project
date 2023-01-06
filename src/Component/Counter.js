import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  function increment() {
    //   setCounter(counter + 1);
    //   setCounter(counter + 1);

    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={increment}>+</button>
      <button>-</button>
    </div>
  );
}

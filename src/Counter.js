import React, { useEffect, useState } from "react";
import "./Counter.css";

export default function Counter() {
  //   const [state, setState] = useState(0);
  const [count, setCount] = useState(0);

  //similar to componentDidMount, empty dependance array
  //  1. useEffect(() => {
  //     console.log("useEffect called");
  //   }, []);

  //pass Dependency array, Smilar to componentDidUpdate
  //   useEffect(() => {
  //     console.log("useEffect called");
  //   }, [count]);

  //usinga cleanup or return function , similar to component willUnmount
  useEffect(() => {
    console.log("useEffect called");
    return () => {
      console.log("componemt will unmount is caklled");
    };
  }, []);

  //   console.log("Counter rendered");
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

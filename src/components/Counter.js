import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div>
      <h1>Counter</h1>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <h2>counter: {counter}</h2>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={() => setCounter(0)}>KLIR</button>
    </div>
  );
};

export default Counter;

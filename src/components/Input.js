import { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);
  return (
    <div className="App-header">
      <h1>Input</h1>
      <h2>Input value: {value}</h2>
      <input
        value={value}
        onChange={onChange}
        style={{ padding: "1rem", fontSize: "1.5rem", marginBottom: "1rem" }}
      />
      <button onClick={() => setValue("")}>KLIR</button>
    </div>
  );
};

export default Input;

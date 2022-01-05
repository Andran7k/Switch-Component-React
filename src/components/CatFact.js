import { useState, useEffect } from "react";

const CatFact = () => {
  const [fact, setFact] = useState("");

  const fetchFact = async () => {
    const response = await (await fetch("https://catfact.ninja/fact")).json();
    console.log("Fact: ", response);
    setFact(response.fact);
  };
  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="App-header">
      <button
        onClick={fetchFact}
        style={{ marginTop: "2rem", padding: "1rem", fontSize: "2rem" }}
      >
        Load a new fact
      </button>
      <h1>{fact || "Loading..."}</h1>
    </div>
  );
};

export default CatFact;

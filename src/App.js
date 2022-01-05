import "./App.css";
import Counter from "./components/Counter";
import Input from "./components/Input";
import CatFact from "./components/CatFact";
import ComponentSwitch from "./components/ComponentSwitch";
import { useState } from "react";

const App = () => {
  // fetch data
  const [currentComponent, setCurrentComponent] = useState("counter");
  const components = ["counter", "input", "catFact"];
  const switchComponent = (component) => setCurrentComponent(component);
  return (
    <div className="App">
      <header className="App-header">
        <p>Ando is learning React123</p>
      </header>
      <ComponentSwitch
        components={components}   
        switchComponent={switchComponent}
        currentComponent={currentComponent}
      />
      {currentComponent === "counter" && <Counter />}
      {currentComponent === "input" && <Input />}
      {currentComponent === "catFact" && <CatFact />}
    </div>
  );
};
export default App;
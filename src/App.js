import logo from "./logo.svg";
import "./App.css";
import Component2 from "./components/Component2";
import { Component1 } from "./components/Component1";

function App() {
  return (
    <div className="App">
      <Component1>
        <Component2/>
      </Component1>
    </div>
  );
}

export default App;

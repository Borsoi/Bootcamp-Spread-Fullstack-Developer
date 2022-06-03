import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import ComponenteA from "./ComponenteA";
import ComponenteB from "./ComponenteB";
import "./styles.css";

function sum(a, b) {
  alert(a + b);
}

function primeiroJSX() {
  return <div className="teste">Guilherme Borsoi</div>;
}

const App = () => {
  return (
    <div className="App">
      {primeiroJSX()}
      <ComponenteA />
      <ComponenteB />
      <Button onClick={() => sum(10, 20)} name="Guilherme Borsoi" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

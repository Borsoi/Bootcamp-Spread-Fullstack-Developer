import React, {Component} from "react";
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

class AppClasse extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: "água"
    }
  }

  alterarCopo = () => {
    this.setState({
      copo: "refrigerante"
    })
  }

  componentDidMount() {
      window.setTimeout(() => {
        this.setState({
          copo:"suco"
        })
      }, 3000);
  }


  render() {
    const {clock, copo} = this.state
    return (
    <div>
      <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}>
          <h1>{copo}</h1></button>
    </div>
    )
  }

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
ReactDOM.render(<AppClasse />, rootElement);

import React from "react";
import logo from "./van-gif.gif";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>UNIFAJ 2020</h2>
        <p>Trabalho de Conclusão de Curso!</p>
        <a
          name="repositorio"
          id="repositorio"
          class="btn btn-primary"
          className="repositorio"
          href="https://github.com/Guimarcar/tcc-borala"
          role="button"
        >
          Repositório Github
        </a>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./van-gif.gif";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Boralá!</h2>
        <p>
          UNIFAJ 2020 <br /> Trabalho de Conclusão de Curso!
        </p>
        <a
          name="repositorio"
          id="repositorio"
          class="btn btn-primary"
          className="repositorio"
          href="https://github.com/Guimarcar/tcc-borala"
          role="button"
        >
          Repositório GitHub
        </a>
      </header>
    </div>
  );
}

export default App;

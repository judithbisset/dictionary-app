
import './App.css';
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
       <div className="container">
      
        
       <p className="title">Word Storage Unit</p>
          
        <Dictionary defaultKeyword="science" />
     
      <footer>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/judith-maier-bisset-4943b198/" target="_blank" rel="noreferrer">
            Judith Maier Bisset
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/judithbisset/dictionary-app" rel="noreferrer"
            target="_blank"
          >
            open-sourced on GitHub.
          </a>{" "}
          
          
        </footer>
    </div>
    </div>
  );
}

export default App;

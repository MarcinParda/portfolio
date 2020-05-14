import React from "react";
import "./App.scss";
import Technology from "./components/js/Technology";
import Navigation from "./components/js/Navigation";
import Projects from "./components/js/Projects";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Technology/>
      <Projects/>
    </div>
  );
}

export default App;
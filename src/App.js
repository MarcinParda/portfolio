import React from "react";
import "./App.scss";
import Technology from "./components/js/Technology";
import Navigation from "./components/js/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Technology/>
    </div>
  );
}

export default App;
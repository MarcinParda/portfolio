import React from "react";
import "./App.scss";
import Technology from "./components/js/Technology";
import Navigation from "./components/js/Navigation";
import Projects from "./components/js/Projects";
import AboutMe from "./components/js/AboutMe";
import Contact from "./components/js/Contact";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Technology/>
      <Projects/>
      <AboutMe/>
      <Contact/>
    </div>
  );
}

export default App;
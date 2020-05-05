import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
    </div>
  );
}

export default App;

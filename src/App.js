import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Treatments from "./components/Treatments/Treatments";
import AboutUs from "./components/AboutUs/AboutUs";
import Address from "./components/Address/Address";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Treatments/>
      <AboutUs/>
      <Address/>
    </div>
  );
}

export default App;

import './App.css';
import { NavBar } from './components/navigationBar';
import { Banner } from './components/banner';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

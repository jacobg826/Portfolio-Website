import React, { Component } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import LandingPage from "./components/LandingPage";
import ProjectSection from "./components/ProjectSection";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <LandingPage/>
        <About/>
        <ProjectSection/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;

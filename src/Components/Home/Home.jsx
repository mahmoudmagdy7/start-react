import React, { Component } from "react";
import Navbar from "./../Navbar/Navbar";
import Header from "./../Header/Header";
import Portfolio from "./../Portfolio/Portfolio";
import About from "./../About/About";
import Contact from "./../Contact/Contact";
import Footer from "../Footer/Footer";
// import DetailsCard from "./../DetailsCard/DetailsCard";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Portfolio />
        <About />
        <Contact />
      </>
    );
  }
}

export default Home;

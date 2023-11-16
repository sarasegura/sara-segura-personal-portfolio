import React, { useState } from "react";
import "./Mainscreen.css";
import Home from "../../components/Home";
import Navbar from "../../components/Navbar";
import MobileMenu from "../../components/MobileMenu";
import Contact from "../../components/Contact";
import Education from "../../components/Education";
import Skills from "../../components/Skills";
import About from "../../components/About";
import Myproyects from "../../components/Myproyects";

function Mainscreen() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Home>
        <Navbar onMenuToggle={handleMenuToggle} />
        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </Home>
      <About id="sobre-mi" />
      <Skills id="habilidades" />
      <Myproyects />
      <Education id="educacion" />
      <Contact id="contacto" />
    </>
  );
}

export default Mainscreen;

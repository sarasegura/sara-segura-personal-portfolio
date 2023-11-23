import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onMenuToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <button className="menu-button" onClick={onMenuToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <ul className="container-list-Navbar">
        <li className="p-Navbar">
          <ScrollLink to="sobre-mi" smooth={true} duration={500}>
            Sobre Mí
          </ScrollLink>
        </li>
        <li className="p-Navbar">
          <ScrollLink to="habilidades" smooth={true} duration={500}>
            Habilidades
          </ScrollLink>
        </li>
        <li className="p-Navbar">
          <ScrollLink to="educacion" smooth={true} duration={500}>
            Cursos
          </ScrollLink>
        </li>
        <li className="li-porfolio" onClick={() => navigate("/portfolio")}>
          Portafolio
        </li>
        <li className="p-Navbar">
          <ScrollLink to="contacto" smooth={true} duration={500}>
            Contáctame
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

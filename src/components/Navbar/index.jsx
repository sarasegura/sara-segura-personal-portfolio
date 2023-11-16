import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar({ onMenuToggle }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button className="menu-button" onClick={onMenuToggle}>
        ☰
      </button>
      <ul className="container-list-Navbar">
        <li>
          <ScrollLink to="sobre-mi" smooth={true} duration={500}>
            Sobre Mí
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="habilidades" smooth={true} duration={500}>
            Habilidades
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="educacion" smooth={true} duration={500}>
            Educación
          </ScrollLink>
        </li>
        <li onClick={() => navigate("/portfolio")}>Portafolio</li>
        <li>
          <ScrollLink to="contacto" smooth={true} duration={500}>
            Contáctame
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./MobileMenu.css";

function MobileMenu({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleMenuItemClick = (path) => {
    onClose();

    // Si no es la ruta del portafolio, realiza un desplazamiento suave
    if (path !== "/portfolio") {
      const targetElement = document.getElementById(path.slice(1));

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    } else {
      navigate(path);
    }
  };

  const handleExitClick = () => {
    onClose(); // Cierra el menú
    // Puedes agregar cualquier otra lógica relacionada con la salida aquí
  };

  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li className="list-menu ">
          <ScrollLink
            to="sobre-mi"
            smooth={true}
            duration={500}
            onClick={() => handleMenuItemClick("sobre-mi")}
          >
            Sobre Mí
          </ScrollLink>
        </li>
        <li className="list-menu ">
          <ScrollLink
            to="habilidades"
            smooth={true}
            duration={500}
            onClick={() => handleMenuItemClick("habilidades")}
          >
            Habilidades
          </ScrollLink>
        </li>
        <li
          className="list-menu lis-menu-portfolio"
          onClick={() => handleMenuItemClick("/portfolio")}
        >
          Portafolio
        </li>
        <li className="list-menu ">
          <ScrollLink
            to="educacion"
            smooth={true}
            duration={500}
            onClick={() => handleMenuItemClick("educacion")}
          >
            Educación
          </ScrollLink>
        </li>
        <li className="list-menu ">
          <ScrollLink
            to="contacto"
            smooth={true}
            duration={500}
            onClick={() => handleMenuItemClick("contacto")}
          >
            Contáctame
          </ScrollLink>
        </li>
        {/* Nuevo elemento para el botón de salida */}
        <button className="exit-button" onClick={handleExitClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        </button>
      </ul>
    </div>
  );
}

export default MobileMenu;

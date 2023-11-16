import React from "react";
import "./MobileMenu.css";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li onClick={() => handleMenuItemClick("sobre-mi")}>Sobre Mí</li>
        <li onClick={() => handleMenuItemClick("habilidades")}>Habilidades</li>
        <li onClick={() => handleMenuItemClick("educacion")}>Educación</li>
        <li onClick={() => handleMenuItemClick("/portfolio")}>Portafolio</li>
        <li onClick={() => handleMenuItemClick("contacto")}>Contáctame</li>
      </ul>
    </div>
  );
}

export default MobileMenu;

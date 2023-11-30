import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Myproyects.css";

import paginadepeliculas from "../../assets/paginademovies.png";
import juego from "../../assets/juegodeencontrarlamiel.png";
import paginanotes from "../../assets/apppagenotes.png";

const Myproyects = () => {
  // Estados individuales para cada tarjeta
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  // Define la animación para las tarjetas
  const cardAnimation1 = useSpring({
    opacity: isHovered1 ? 1 : 0.8,
    transform: isHovered1 ? "scale(1.05)" : "scale(1)",
    config: { tension: 170, friction: 12 },
  });

  const cardAnimation2 = useSpring({
    opacity: isHovered2 ? 1 : 0.8,
    transform: isHovered2 ? "scale(1.05)" : "scale(1)",
    config: { tension: 170, friction: 12 },
  });

  const cardAnimation3 = useSpring({
    opacity: isHovered3 ? 1 : 0.8,
    transform: isHovered3 ? "scale(1.05)" : "scale(1)",
    config: { tension: 170, friction: 12 },
  });

  return (
    <div className="container-myproyect">
      <h3 className="title-myproyects">Mis proyectos</h3>
      <div className="container-cart-proyects">
        <animated.span
          style={cardAnimation1}
          className="container-cart-proyect"
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <img className="img-proyects" src={juego} alt="Mi Imagen" />
          <p className="name-proyects">Juego encuentra la miel</p>
          <a
            className="enlace-proyect-p"
            href="https://sarasegura.github.io/taller-practico-javascript-videogames/"
          >
            Ver proyecto
          </a>
        </animated.span>
        <animated.span
          style={cardAnimation2}
          className="container-cart-proyect"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <img
            className="img-proyects"
            src={paginadepeliculas}
            alt="Mi Imagen"
          />
          <p className="name-proyects">Pagina de peliculas</p>
          <a
            className="enlace-proyect-p"
            href="https://sarasegura.github.io/movie-page-api-rest-javascript/"
          >
            Ver proyecto
          </a>
        </animated.span>
        <animated.span
          style={cardAnimation3}
          className="container-cart-proyect"
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          <img className="img-proyects" src={paginanotes} alt="Mi Imagen" />
          <p className="name-proyects">App page de notas</p>
          <a
            className="enlace-proyect-p"
            href="https://sarasegura.github.io/page-notes-curso-react-intro/"
          >
            Ver proyecto
          </a>
        </animated.span>
      </div>
    </div>
  );
};

export default Myproyects;

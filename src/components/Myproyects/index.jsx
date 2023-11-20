import React from "react";
import "./Myproyects.css";

import paginadepeliculas from "../../assets/paginademovies.png";
import juego from "../../assets/juegodeencontrarlamiel.png";
import paginanotes from "../../assets/apppagenotes.png";

const Myproyects = () => {
  return (
    <div className="container-myproyect">
      <h3 className="title-myproyects">Mis proyectos</h3>
      <div className="container-cart-proyects">
        <span className="container-cart-proyect">
          <img className="img-proyects" src={juego} alt="Mi Imagen" />
          <p className="name-proyects">Juego encuentra la miel</p>
          <a
            className="enlace-proyect-p"
            href="https://sarasegura.github.io/taller-practico-javascript-videogames/"
          >
            Ver proyecto
          </a>
        </span>
        <span className="container-cart-proyect">
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
        </span>
        <span className="container-cart-proyect">
          <img className="img-proyects" src={paginanotes} alt="Mi Imagen" />
          <p className="name-proyects">App page de notas</p>
          <a
            className="enlace-proyect-p"
            href="https://sarasegura.github.io/page-notes-curso-react-intro/"
          >
            Ver proyecto
          </a>
        </span>
      </div>
    </div>
  );
};

export default Myproyects;

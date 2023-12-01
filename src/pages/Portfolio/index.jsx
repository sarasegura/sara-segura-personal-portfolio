import React from "react";
import "./Portfolio.css";

import paginadepeliculas from "../../assets/paginademovies.png";
import juego from "../../assets/juegodeencontrarlamiel.png";
import paginanotes from "../../assets/apppagenotes.png";
import mundomichis from "../../assets/mundomichi.png";
import calculadora from "../../assets/calculadorabasica.png";
import replicaApple from "../../assets/replicaapple.png";
import restaurante from "../../assets/restaurante.png";
import magistv from "../../assets/magis.png";
import dibujocss from "../../assets/dibujocss.png";
import Yardsale from "../../assets/yardsale.png";
import replicagoogle from "../../assets/ replicagoogle.png";

function Porfolio() {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="container-porfolio">
      <button className="exit-button" onClick={goBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
        >
          <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
        </svg>
      </button>
      <h3 className="title-myproyects">Mis proyectos</h3>
      <div className="container-cart-porfolio">
        <span className="container-cart-proyect-porfolio">
          <img className="img-proyects-potfolio" src={juego} alt="Mi Imagen" />
          <p className="name-proyects">Encuentra la miel</p>
          <a
            className="enlace-proyect-p"
            href="https://sarasegura.github.io/taller-practico-javascript-videogames/"
          >
            Ver proyecto
          </a>
        </span>
        <span className="container-cart-proyect-porfolio">
          <img
            className="img-proyects-potfolio"
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
        <span className="container-cart-proyect-porfolio">
          <img
            className="img-proyects-potfolio"
            src={paginanotes}
            alt="Mi Imagen"
          />
          <p className="name-proyects">App page notas</p>
          <a
            className="enlace-proyect-p"
            href="https://sarasegura.github.io/page-notes-curso-react-intro/"
          >
            Ver proyecto
          </a>
        </span>
        <span className="container-cart-proyect-porfolio">
          <img
            className="img-proyects-potfolio"
            src={mundomichis}
            alt="Mi Imagen"
          />
          <p className="name-proyects">Mundo michis</p>
          <a
            className="enlace-proyect-p"
            href="https://sarasegura.github.io/pagina-gatitos-aleatorios/"
          >
            Ver proyecto
          </a>
        </span>
        <span className="container-cart-proyect-porfolio">
          <img
            className="img-proyects-potfolio"
            src={calculadora}
            alt="Mi Imagen"
          />
          <p className="name-proyects">Calculadora </p>
          <a
            className="enlace-proyect-p"
            href="https://sarasegura.github.io/calculadora_basica/"
          >
            Ver proyecto
          </a>
        </span>
        <span className="container-cart-proyect-porfolio">
          <img
            className="img-proyects-potfolio"
            src={magistv}
            alt="Mi Imagen"
          />
          <p className="name-proyects">Magis tv</p>
          <a
            className="enlace-proyect-p"
            href="https://sarasegura.github.io/magis-tv/"
          >
            Ver proyecto
          </a>
        </span>
        <span className="container-cart-proyect-porfolio">
          <img
            className="img-proyects-potfolio"
            src={replicaApple}
            alt="Mi Imagen"
          />
          <p className="name-proyects">Replica apple</p>
          <a
            className="enlace-proyect-p"
            href="https://sarasegura.github.io/replica_de_apple/"
          >
            Ver proyecto
          </a>
        </span>
        <span className="container-cart-proyect-porfolio">
          <img
            className="img-proyects-potfolio"
            src={Yardsale}
            alt="Mi Imagen"
          />
          <p className="name-proyects">Yardsale</p>
          <a
            className="enlace-proyect-p"
            href="https://sarasegura.github.io/curso-frontend-developer-js-practico/"
          >
            Ver proyecto
          </a>
        </span>
        <span className="container-cart-proyect-porfolio">
          <img
            className="img-proyects-potfolio"
            src={restaurante}
            alt="Mi Imagen"
          />
          <p className="name-proyects">Restaurante </p>
          <a
            className="enlace-proyect-p"
            href="https://sarasegura.github.io/restaurant-css-grid/"
          >
            Ver proyecto
          </a>
        </span>
        <span className="container-cart-proyect-porfolio">
          <img
            className="img-proyects-potfolio"
            src={dibujocss}
            alt="Mi Imagen"
          />
          <p className="name-proyects">Dibujo en CSS </p>
          <a
            className="enlace-proyect-p"
            href="https://sarasegura.github.io/dibujo-css-finn/"
          >
            Ver proyecto
          </a>
        </span>
        <span className="container-cart-proyect-porfolio">
          <img
            className="img-proyects-potfolio"
            src={replicagoogle}
            alt="Mi Imagen"
          />
          <p className="name-proyects">Replica Google </p>
          <a
            className="enlace-proyect-p"
            href="https://sarasegura.github.io/replica-google/"
          >
            Ver proyecto
          </a>
        </span>
      </div>
    </div>
  );
}

export default Porfolio;

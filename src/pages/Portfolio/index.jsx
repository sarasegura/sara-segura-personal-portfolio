import React from "react";
import "./Portfolio.css";

function Porfolio() {
  return (
    <div className="container-myproyect">
      <h3 className="title-myproyects">Mis proyectos</h3>
      <div className="container-cart-proyects">
        <span className="container-cart-proyect">
          <img
            className="img-proyects"
            src="https://www.shutterstock.com/image-photo/beauty-glamour-girl-portrait-perfect-260nw-1906240834.jpg"
            alt="Mi Imagen"
          />
          <p className="name-proyects">Video juego encuentra la miel</p>
          <a className="enlace-proyect-p" href="">
            Ver proyecto
          </a>
        </span>
        <span className="container-cart-proyect">
          <img
            className="img-proyects"
            src="https://www.shutterstock.com/image-photo/beauty-glamour-girl-portrait-perfect-260nw-1906240834.jpg"
            alt="Mi Imagen"
          />
          <p className="name-proyects">Pagina de peluculas</p>
          <a className="enlace-proyect-p" href="">
            Ver proyecto
          </a>
        </span>
        <span className="container-cart-proyect">
          <img
            className="img-proyects"
            src="https://www.shutterstock.com/image-photo/beauty-glamour-girl-portrait-perfect-260nw-1906240834.jpg"
            alt="Mi Imagen"
          />
          <p className="name-proyects">App page de notas</p>
          <a className="enlace-proyect-p" href="">
            Ver proyecto
          </a>
        </span>
      </div>
    </div>
  );
}

export default Porfolio;

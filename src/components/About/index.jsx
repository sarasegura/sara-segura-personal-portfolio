import React from "react";
import "./About.css";

import sarafoto from "../../assets/sarafotopequeña.png";

function About({ id }) {
  return (
    <>
      <div id={id} className="container-about">
        <div className="personal-info">
          <h3 className="personal-info-title">Sara Segura</h3>
          <p className="personal-info-p">Front-End Developer</p>
          <img className="personal-info-img" src={sarafoto} alt="" />
        </div>
        <div className="about-me">
          <h2 className="about-me-h2">Yo Soy</h2>
          <p className="about-me-p">
            ¡Hola! Soy Sara Paola Segura Devia, una apasionada de la
            programación. Mi viaje en el mundo del desarrollo web me ha llevado
            a explorar y dominar diversas tecnologías. Mi compromiso y
            responsabilidad en cada proyecto reflejan mi dedicación al
            desarrollo frontend.
          </p>
          <p className="about-me-p">
            Me he capacitado en la Escuela de Platzi, fortaleciendo mis
            habilidades con conocimientos sólidos y prácticos. Mi enfoque
            meticuloso y creativo me impulsa a crear experiencias web
            cautivadoras y funcionales, superando desafíos con soluciones
            innovadoras.
          </p>
          <p className="about-me-p">
            Fuera del código, me destaco por ser respetuosa y colaborativa.
            Siempre estoy emocionada por aprender, crecer y contribuir al
            fascinante mundo de la tecnología. ¡Bienvenido a mi rincón virtual,
            donde comparto mi viaje, proyectos y aprendizajes en el desarrollo
            web! 🚀
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

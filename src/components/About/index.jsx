import React from "react";
import "./About.css";

function About({ id }) {
  return (
    <>
      <div id={id} className="container-about">
        <div className="personal-info">
          <h3 className="personal-info-title">Sara Segura</h3>
          <p className="personal-info-p">21 años de edad</p>
          <img
            className="personal-info-img"
            src="https://www.shutterstock.com/image-photo/beauty-glamour-girl-portrait-perfect-260nw-1906240834.jpg"
            alt=""
          />
        </div>
        <div className="about-me">
          <h2 className="about-me-h2">Yo Soy</h2>
          <p className="about-me-p">
            ¡Hola! Soy Sara Paola Segura Devia, una apasionada de la
            programación con 21 años de edad. Mi viaje en el mundo del
            desarrollo web me ha llevado a explorar y dominar diversas
            tecnologías. <br></br> Mi compromiso y responsabilidad en cada
            proyecto reflejan mi dedicación al desarrollo frontend. Me
            enorgullece decir que he ampliado mis habilidades a través de la
            Escuela de Platzi, donde he adquirido conocimientos sólidos y
            prácticos. Me esfuerzo por crear experiencias web cautivadoras y
            funcionales. Mi enfoque meticuloso y creativo me impulsa a superar
            desafíos y aportar soluciones innovadoras. <br></br>Fuera del mundo
            del código, me caracterizo por ser una persona respetuosa y
            colaborativa. Siempre estoy ansiosa por aprender, crecer y
            contribuir al emocionante universo de la tecnología. ¡Bienvenido a
            mi rincón virtual, donde compartiré mi viaje, proyectos y
            aprendizajes en el fascinante mundo del desarrollo web! 🚀
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

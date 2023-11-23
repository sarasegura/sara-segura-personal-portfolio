import React from "react";
import "./Education.css";

function Education({ id }) {
  return (
    <div className="container-education" id={id}>
      <div className="wrapper-education">
        <h2 className="education-title">Cursos</h2>

        <span className="wrapper-card-education">
          <p className="number-education">💗</p>
          <div className="profession-name">
            <p className="p-education">Front-end developer</p>
            <p className="p-education p-program">PLatzi</p>
            <p className="year-education">2023</p>
          </div>
        </span>
        <div className="container-info-platzi">
          <a
            href="https://platzi.com/p/sarasegura2002/"
            className="wrapper-platzi"
          >
            <img
              className="image-platzi"
              src="https://seeklogo.com/images/P/platzi-logo-98005E6AD6-seeklogo.com.png"
              alt="icono platzi"
            />
            Todos mis certificados
          </a>
        </div>
      </div>
      <div className="certificate-container">
        <h2 className="certificate-title">Platzi</h2>
        <div className="wrapper-certificate">
          <p className="p-education p-education-platzi ">
            Con entusiasmo comparto mi trayectoria por la Escuela de Platzi en
            desarrollo frontend, donde he cultivado conocimientos en diseño
            utilizando CSS, SASS y Tailwind CSS para crear interfaces
            estilizadas y eficientes.
          </p>
          <p className="p-education p-education-platzi">
            Mi dominio en HTML y HTML5, enfocado en el marcado semántico,
            garantiza la claridad y accesibilidad en mis proyectos. Además, he
            adquirido habilidades en JavaScript y React.
          </p>
          <p className="p-education p-education-platzi">
            Destaco mi capacidad para implementar diseños responsivos,
            asegurando una experiencia óptima en diversos dispositivos. Mi
            tiempo en Platzi ha sido fundamental para adquirir las destrezas
            necesarias en el desarrollo frontend.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;

import React from "react";
import "./Education.css";

import gitygithub from "../../assets/certificadogitygithub.png";
import Javascript from "../../assets/certificadojavascript.png";
import rutareact from "../../assets/certificadoreact.png";
import htmlycss from "../../assets/certificadohtmlycss.png";

function Education({ id }) {
  return (
    <div className="container-education" id={id}>
      <div className="wrapper-education">
        <h2 className="education-title">Educación</h2>
        <span className="wrapper-card-education">
          <p className="number-education">1</p>
          <div className="profession-name">
            <p className="p-education">
              Tecnología en gestión de recursos naturales
            </p>
            <p className="p-education  p-program">SENA</p>
            <p className="year-education">2018-2020</p>
          </div>
        </span>
        <span className="wrapper-card-education">
          <p className="number-education">2</p>
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
        <h2 className="certificate-title">Certificados</h2>
        <span className="wrapper-certificate">
          <span>
            <img className="certificate-image" src={gitygithub} alt="" />
            <p className="certificate-p">Curso profesional de GIT y GITHUB</p>
          </span>
          <span>
            <img className="certificate-image" src={Javascript} alt="" />
            <p className="certificate-p">Javascript a profundidad</p>
          </span>
          <span>
            <img className="certificate-image" src={rutareact} alt="" />
            <p className="certificate-p">Frontend con React</p>
          </span>
          <span>
            <img className="certificate-image" src={htmlycss} alt="" />
            <p className="certificate-p">HTML Y CSS a profundidad</p>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Education;

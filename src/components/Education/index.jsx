import React from "react";
import "./Education.css";

import gitygithub from "../../assets/certificadogitygithub.png";
import Javascript from "../../assets/certificadojavascript.png";

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
            <img className="certificate-image" src={gitygithub} alt="" />
            <p className="certificate-p">React a profundidad</p>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Education;

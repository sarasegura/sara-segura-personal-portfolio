import React from "react";
import "./Education.css";

function Education({ id }) {
  return (
    <div className="container-education" id={id}>
      <h2 className="education-title">Educación</h2>
      <span className="wrapper-card-education">
        <div className="profession-name">
          <p className="number-education">1</p>
          <p className="p-education">
            Tecnología en gestión de recursos naturales
          </p>
        </div>
        <p className="p-education">SENA</p>
        <p className="year-education">2018-2020</p>
      </span>
      <span className="wrapper-card-education">
        <div className="profession-name">
          <p className="number-education">2</p>
          <p className="p-education">Front-end developer</p>
        </div>
        <p className="p-education">PLatzi</p>
        <p className="year-education">2023</p>
      </span>
    </div>
  );
}

export default Education;

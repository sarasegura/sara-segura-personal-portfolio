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
            I am a young enthusiast who is keen on IT and anything about it
            since my first steps to High School. During the past few years, I
            gained lots of experience in this field due to the strong desire of
            becoming an expert. Today I am a senior front-end developer at one
            of the leading companies in the world. “For me, web development is
            more than coding. It's a canvas with a blank page and I am the
            artist to paint it with colors of coding”.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

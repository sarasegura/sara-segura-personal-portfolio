import React from "react";
import "./Home.css";

function Home({ children }) {
  return (
    <div className="home-container">
      {children}
      <img
        className="img-personal"
        src="https://img.freepik.com/fotos-premium/retrato-hermosa-joven-pelo-largo-sobre-fondo-negro_893012-76080.jpg"
        alt="imagen de presentacion"
      />
    </div>
  );
}

export default Home;

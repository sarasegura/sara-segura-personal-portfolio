import React from "react";
import "./Mainscreen.css";
import { useNavigate } from "react-router-dom";

function Mainscreen() {
  const navigate = useNavigate();
  return (
    <>
      <p className="titlemain">Hola soy mainscreen</p>
      <button onClick={() => navigate("/portfolio")}>hola</button>
    </>
  );
}

export default Mainscreen;

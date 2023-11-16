import { HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Mainscreen from "../mainscreen";
import Porfolio from "../Portfolio";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Mainscreen />} />
          <Route path="/portfolio" element={<Porfolio />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

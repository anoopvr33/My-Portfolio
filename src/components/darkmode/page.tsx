"use client";

import React, { useState } from "react";
import "./style.css";
// import Document from "next/document";

const DarkMode = () => {
  const [dark, setDark] = useState(false);
  // const modeToggle = Document.querySelector(".mode-tog");
  // const darkMode = Document.querySelector(".dark-mode");

  // modeToggle?.addEventListener("click", () => {
  //   darkMode?.classList.toggle("active");
  //   modeToggle?.classList.toggle("active");
  // });

  return (
    <div className="html">
      <div
        onClick={() => setDark(!dark)}
        className={dark ? "mode-tog active" : "mode-tog"}
      ></div>
      <div className="container">
        <div className={dark ? "dark-mode active" : "dark-mode"}></div>
      </div>
      <h2>DARK Mode</h2>
    </div>
  );
};

export default DarkMode;

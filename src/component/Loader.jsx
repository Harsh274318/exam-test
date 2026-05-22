import React from "react";

const Loader = () => {
  const colors = [
    "#ff0000",
    "#ff1a1a",
    "#e60000",
    "#cc0000",
    "#b30000",
    "#990000",
    "#ff4d4d",
    "#ff6666",
    "#ff3333",
    "#dc143c",
    "#c21807",
    "#8b0000",
  ];
  const loader = document.querySelector(".loader");
  setInterval(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    loader.style.setProperty("--loader-color", randomColor);
  }, 2000);
  return (
    <div className="loader-box">
      <div className="loader"> </div>

    </div>
  );
};
export default Loader;

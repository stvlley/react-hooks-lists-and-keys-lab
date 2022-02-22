import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
    <a key="home" href="#home">home</a>
    <a key="about" href="#about">about</a>
    <a key="project" href="#projects">projects</a>
    </nav>
  )
}

export default NavBar;

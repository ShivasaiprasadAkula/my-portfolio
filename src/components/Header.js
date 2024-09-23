import React from "react";

function Header() {
  return (
    <header>
      <a href="#home" className="logo">
        <img
          src="../assets/images/logo.png"
          alt="Logo"
          style={{ width: "9%", paddingTop: "" }}
        />{" "}
        Shivasaiprasad&nbsp;
        <span style={{ color: "#ed2129" }}> Akula</span>
      </a>
      <div id="menu" className="fas fa-bars"></div>
      <nav className="navbar">
        <ul>
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

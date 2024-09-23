import React, { useEffect } from "react";
import Typed from "typed.js";

function Home() {
  useEffect(() => {
    const typed = new Typed(".typing-text", {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div id="particles-js"></div>

      <div className="content">
        <h5>
          Hello!
          <br /> I&apos;m Shivasaiprasad <span>Akula</span>
        </h5>
        <p>
          I am <span className="typing-text"></span>
        </p>
        <a href="#about" className="btn">
          <span>About Me</span>
          <i className="fas fa-arrow-circle-down"></i>
        </a>
        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                className="linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/akulashivsaiprasad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className="github"
                aria-label="GitHub"
                href="https://github.com/ShivasaiprasadAkula"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                className="twitter"
                aria-label="Twitter"
                href="https://x.com/Akulashivasaip1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                className="telegram"
                aria-label="Facebook"
                href="https://www.facebook.com/chintu.chintuakula"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                className="instagram"
                aria-label="Instagram"
                href="https://www.instagram.com/chintugoud_1/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26hl%3Den%26__coig_login%3D1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="image">
        <img
          draggable="false"
          className="tilt"
          src="../assets/images/image1.png"
          alt="Kesav Kummari"
        />
      </div>
    </>
  );
}

export default Home;

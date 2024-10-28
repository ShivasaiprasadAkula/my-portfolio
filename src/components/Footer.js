import React from "react";

function Footer() {
  return (
    <div>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Shivasaiprasad Akula</h3>
            <p>
              Thank you for visiting my personal portfolio website. Connect with
              me over socials. <br /> <br /> Keep Rising 🚀. | Learn by Doing{" "}
            </p>
          </div>

          <div className="box">
            <h3>Quick links</h3>
            <a href="#home">
              <i className="fas fa-chevron-circle-right"></i> Home
            </a>
            <a href="#about">
              <i className="fas fa-chevron-circle-right"></i> About
            </a>
            <a href="#skills">
              <i className="fas fa-chevron-circle-right"></i> Skills
            </a>
            <a href="#education">
              <i className="fas fa-chevron-circle-right"></i> Certifications
            </a>
            <a href="#experience">
              <i className="fas fa-chevron-circle-right"></i> Experience
            </a>
          </div>

          <div className="box">
            <h3>Contact Info</h3>
            <p>
              {" "}
              <i className="fas fa-phone"></i>+91 9502493266
            </p>
            <p>
              {" "}
              <i className="fas fa-envelope"></i>
              akulashivasaiprasad3821@gmail.com
            </p>
            <p>
              {" "}
              <i className="fas fa-map-marked-alt"></i>Jangaon,
              Telangana-India
            </p>
            <div className="share">
              <a
                href="https://www.linkedin.com/in/akulashivsaiprasad/"
                className="fab fa-linkedin"
                aria-label="LinkedIn"
                target="_blank" rel="noreferrer"
              ></a>
              <a
                href="https://github.com/ShivasaiprasadAkula"
                className="fab fa-github"
                aria-label="GitHub"
                target="_blank" rel="noreferrer"
              ></a>
              <a
                href="https://www.instagram.com/chintugoud_1/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26hl%3Den%26__coig_login%3D1"
                className="fab fa-instagram"
                aria-label="Twitter"
                target="_blank" rel="noreferrer"
              ></a>
              <a
                href="https://www.facebook.com/chintu.chintuakula"
                className="fab fa-facebook"
                aria-label="Facebook"
                target="_blank" rel="noreferrer"
              ></a>
            </div>
          </div>
        </div>

        <h1 className="credit">
          {/* ©2024. | C3Ops Technologies Private Limited, All rights reserved. |
          ©Kesav Kummari<a href="#"> </a> */}
        </h1>
      </section>
    </div>
  );
}

export default Footer;

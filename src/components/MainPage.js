import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";

function MainPage() {
  return (
    <div>
      <Header />
      <section className="home" id="home">
        <Home />
      </section>
      <section className="about" id="about">
        <About />
      </section>
      <section className="education" id="education">
        <Education />
      </section>
      <section className="experience" id="experience">
        <Experience />
      </section>
      <section className="skills" id="skills">
        <Skills />
      </section>
      <section className="contact" id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default MainPage;

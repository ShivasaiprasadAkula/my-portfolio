import React from "react";

function About() {
  function calculateAge(birthDate) {
    const today = new Date();
    const dob = new Date(birthDate);

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  }

  const birthDate = "1999-01-01"; // Replace with your actual birthdate

  const age = calculateAge(birthDate);

  return (
    <div>
      <h2 className="heading" style={{ color: "#002057" }}>
        <i className="fas fa-user-alt"></i> About <span>Me</span>
      </h2>

      <div className="row">
        <div className="image">
          <img
            draggable="false"
            className="tilt"
            src="../assets/images/profile.jpeg"
            alt="Shivasaiprasad Akula"
          />

          <div className="resumebtn">
            <a
              href="https://www.linkedin.com/in/akulashivsaiprasad/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <span>LinkedIn</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>

        <div className="content">
          <h3 style={{ color: "#002057" }}>
            Shivasaiprasad <span style={{ color: "#ed2129" }}> Akula</span>
          </h3>
          <span className="tag">Software Developer</span>

          <p>
            An overall experience of 1.5 years in software development and 2
            years in non-IT roles.
          </p>
          <p>
            Began as a Junior Associate at 3i Infotech Ltd, where after 6
            months, was promoted to Team Lead. Led the migration of trading
            accounts from PCS Securities Ltd to Kotak Securities Ltd.
          </p>
          <p>
            Completed a 4.0 tech course in JavaScript and Full Stack
            Development. Secured an internship as a MERN Stack Developer at
            Spotlet Solutions Pvt Ltd for 6 months, gaining hands-on experience
            in building full-stack applications.
          </p>
          <p>
            Later transitioned to a Full Stack Developer role at SR Edu
            Technologies Pvt Ltd for 1 year, where I developed 3 major
            applications: CRM, LMS, and School KYC systems, using React,
            Node.js, and PHP Laravel.
          </p>
          <p>
            Proficient in HTML, CSS, JavaScript, React, Node.js, MySQL, PHP,
            Laravel, Git, and Scrum methodologies. Experienced in leading teams
            and managing end-to-end application development projects.
          </p>

          <div className="box-container">
            <div className="box">
              <p>
                <span> Age: </span> {age} years
              </p>
              <p>
                <span> Phone : </span> +91 9502493266
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

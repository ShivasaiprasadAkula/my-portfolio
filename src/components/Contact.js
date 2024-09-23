import React from "react";

function Contact() {
  return (
    <>
      <h2 className="heading">
        <i className="fas fa-headset"></i> Get in <span>Touch</span>
      </h2>

      <div className="container">
        <div className="content">
          <div className="image-box">
            <img draggable="false" src="assets/images/contact1.png" alt="" />
          </div>
          <div className="contact_message">
            <h1 style={{ color: "#002057" }}>
              Kindly click the<span style={{ color: "#ed2129" }}> button </span>
              below to<span style={{ color: "#ed2129" }}> contact</span> me and
              fill out the
              <span style={{ color: "#ed2129" }}> Google Form </span>to submit
              your <span style={{ color: "#ed2129" }}>inquiry</span>.
            </h1>

            <br />
            <div className="button-area">
              <button>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfVN2lgn6l0G3eqBvHWXHxKN7S-xnzY_ingiITn0fSNQJ80Lg/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#ffffff" }}
                >
                  Contact Me
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

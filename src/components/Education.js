import React, { useState } from "react";

function Education() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Certifications</span>
      </h1>

      <div className="cert" style={{ fontFamily: "Nunito, sans-serif" }}>
        <div className="row">
          <div className="column">
            <img
              onClick={() => handleImageClick("../assets/images/Html.jpg")}
              style={{ paddingBottom: 20 }}
              width="90%"
              height="90%"
              src="../assets/images/Html.jpg"
              alt="Html Certificate"
            />
            <h2>Html,CSS Certification From NxtWave</h2>
          </div>
          <div className="column">
            <img
              onClick={() => handleImageClick("../assets/images/Bootstrap.jpg")}
              style={{ paddingBottom: 20 }}
              width="90%"
              height="90%"
              src="../assets/images/Bootstrap.jpg"
              alt="Bootstrap Certificate"
            />
            <h2>Bootstrap Certification From NxtWave</h2>
          </div>
          <div className="column">
            <img
              onClick={() =>
                handleImageClick("../assets/images/Javascript.jpg")
              }
              style={{ paddingBottom: 20 }}
              width="90%"
              height="90%"
              src="../assets/images/Javascript.jpg"
              alt="Javascript Certificate"
            />
            <h2>Javascript Certification From NxtWave</h2>
          </div>
          <div className="column">
            <img
              onClick={() => handleImageClick("../assets/images/React.jpg")}
              style={{ paddingBottom: 20 }}
              width="90%"
              height="90%"
              src="../assets/images/React.jpg"
              alt="React Certificate"
            />
            <h2>React Js Certification From NxtWave</h2>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <img
              onClick={() => handleImageClick("../assets/images/Node.jpg")}
              style={{ paddingBottom: 20 }}
              width="90%"
              height="90%"
              src="../assets/images/Node.jpg"
              alt="Node Certificate"
            />
            <h2>Node Js Certification From NxtWave</h2>
          </div>
          <div className="column">
            <img
              onClick={() => handleImageClick("../assets/images/Python.jpg")}
              style={{ paddingBottom: 20 }}
              width="90%"
              height="90%"
              src="../assets/images/Python.jpg"
              alt="Python Certificate"
            />
            <h2>Python Certification From NxtWave</h2>
          </div>
          <div className="column">
            <img
              onClick={() => handleImageClick("../assets/images/Sql.jpg")}
              style={{ paddingBottom: 20 }}
              width="90%"
              height="90%"
              src="../assets/images/Sql.jpg"
              alt="SQL Certificate"
            />
            <h2>SQL Certification From NxtWave</h2>
          </div>
          <div className="column">
            <img
              onClick={() => handleImageClick("../assets/images/Git.jpg")}
              style={{ paddingBottom: 20 }}
              width="90%"
              height="90%"
              src="../assets/images/Git.jpg"
              alt="Git Certificate"
            />
            <h2>Git Certification From NxtWave</h2>
          </div>
        </div>
      </div>

      {/* Modal or Lightbox */}
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close">&times;</span>
          <img
            className="modal-content"
            src={selectedImage}
            alt="Full Screen"
          />
        </div>
      )}
    </>
  );
}

export default Education;

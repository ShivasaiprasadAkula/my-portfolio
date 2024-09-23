import React from "react";

function Experience() {
  return (
    <>
      <h2 className="heading" style={{ color: "#002057" }}>
        <i className="fas fa-briefcase"></i> Experience
      </h2>

      <div className="timeline">
        <div className="container left">
          <div className="content">
            <div className="tag">
              <h2>3i Infotech BPO LTD</h2>
            </div>
            <div className="desc">
              <h3>Junior Associate</h3>
              <p>Sep 2019 - June 2021</p>
            </div>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <div className="tag">
              <h2>3i Infotech BPO LTD</h2>
            </div>
            <div className="desc">
              <h3>Bakc Office Support (Team Lead)</h3>
              <p>May 2021 - April 2022</p>
            </div>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <div className="tag">
              <h2>Spotlet Solutions Pvt LTD</h2>
            </div>
            <div className="desc">
              <h3>Junior Software Developer (MERN Stack)</h3>
              <p>Apr 2023 - Oct 2023</p>
            </div>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <div className="tag">
              <h2>SR Edu Technologies Pvt Ltd</h2>
            </div>
            <div className="desc">
              <h3>Software Developer (Full Stack)</h3>
              <p>Nov 2023 - Present</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="morebtn">
        <a href="/experience" class="btn">
          <span>View All</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div> */}
    </>
  );
}

export default Experience;

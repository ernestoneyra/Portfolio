import React from "react";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/ernesto.neyra.18/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.youtube.com/channel/UClbCcQ2gUR9qGT4TN-x4a1Q">
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Ernesto Neyra</span>
            </span>
          </div>
          <div className="profiile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {/* npm i react-typical
                {""}
                <Typical 
                loop={indefinitely}
                steps={[
                  "Front-End Developer",
                  1000,
                  "MERN Stack Developer",
                  1000,
                  "HTML/CSS/JS/REACT",
                  1000,
                ]} />*/}
                Front-End Developer
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me!
            </button>
            <a href="Ernesto.Neyra.CV.pdf" download="Ernesto.Neyra.CV.pdf">
              <button className="btn highlighted-btn">Get resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

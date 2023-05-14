import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello, I'm
         <br /> <span className="info-name">Firdaous Kerroudi</span>.
         <br /> Software Engineer Student
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
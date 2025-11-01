import React from "react";
import ReactDom from "react-dom";
import profileImage from './assets/AboutImg.jpg';
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

// const skills = [
//   { name: "JavaScript", percentage: 80 },
//   { name: "React", percentage: 85 },
//   { name: "CSS", percentage: 75 },
//   { name: "html", percentage: 90 },
//   { name: "Java", percentage: 40 },
//   { name: "C", percentage: 90 },
//   { name: "C++", percentage: 90 },
//   { name: "Python", percentage: 20 },
// ];

function About() {
  return (
    <>
      <section className="about-section">
        <div className="about-h2"><h2>About Me</h2></div> 
        <div className="about-content">
          
          <img src={profileImage} alt="ProfileImage" className="profile-photo" />
          
          
          <div className="about-text">
            <h3>Hi, I'm Yash Singh👋</h3>
            <p>
              I'm a frontend developer with a passion for creating clean,
              responsive user interfaces. I work mainly with React, Tailwind
              CSS, and JavaScript. I'm always looking to improve and take on new
              challenges.
            </p>
            <p>
              When I'm not coding, I enjoy cricket and exploring new tech
              trends.
            </p>
            {/* <button>Download Resume</button> */}
          </div>
        </div>
      </section>

      {/* <div >
        
        <div className="skills-section"> 
        <div className="skill-h2"><h2>Skills</h2></div>
          {skills.map(({ name, percentage }) => (
            <div key={name} style={{ width: 100, textAlign: "center" }}>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  textColor: "#333",
                  pathColor: "#007bff",
                  trailColor: "#eee",
                })}
              />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}
export default About;

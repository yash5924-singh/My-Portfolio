import React from "react";
import profileImage from './assets/ProfileImage.jpg'; // adjust the path as needed

function Resume() {
  return (
    <>
      
      <div className="resume-container">
        <div className="resume-header">
          <div className="resumeh2"><h2>Resume</h2></div>
          <img src={profileImage} alt="Yash Singh" className="profile-photo" />
          <h1>Yash Singh</h1>
        </div>

        <div className="resume-section contact">
          <p><strong>Address:</strong> Jaipur, Rajasthan</p>
          <p><strong>Phone:</strong> +91 9588256939</p>
          <p><strong>Email:</strong> <a href="mailto:yashsingh9588@gmail.com">yashsingh9588@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yash-singh-97264730b" target="_blank" rel="noopener noreferrer">Yash Singh</a></p>
        </div>

        <Section title="Career Objective">
          <p>
            To secure a position and be a part of a progressive organization that gives scope to enhance my knowledge and skills, which can be used for organizational and personal growth, and contribute to the organization's success.
          </p>
        </Section>

        <Section title="Education">
          <ul>
            <li><strong>MCA (Pursuing)</strong> – Rajasthan Technical University, Kota</li>
            <li><strong>BCA (2021–2024)</strong> – University of Rajasthan, Jaipur </li>
            {/* <li><strong>12th (2021)</strong> – Govt. Sr. Sec. School, Kota (RBSE) – 91.60%</li>
            <li><strong>10th (2019)</strong> – Kartikay Academy, Kota (RBSE) – 77.33%</li> */}
          </ul>
        </Section>

        <Section title="Programming Skills">
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>C Language</li>
            <li>C++</li>
            <li>SQL Server</li>
          </ul>
        </Section>

        <Section title="Experience">
          <p><strong>Fresher</strong></p>
          <ul>
            <li>Developed responsive and user-friendly web interfaces using React.js to enhance user experience.</li>
          </ul>
        </Section>

        <Section title="Personal Information">
          <ul>
            <li><strong>Date of Birth:</strong> 05-09-2004</li>
            <li><strong>Nationality:</strong> Indian</li>
            <li><strong>Marital Status:</strong> Unmarried</li>
            <li><strong>Gender:</strong> Male</li>
            <li><strong>Languages Known:</strong> Hindi and English</li>
          </ul>
        </Section>

        <Section title="About Me">
          <p>
            HTML, CSS, JavaScript, and Bootstrap with practical knowledge in web development. Passionate about building responsive web applications and eager to learn various frameworks and databases including React.js, MongoDB, Express.js, MySQL, and Node.js. Seeking a job to leverage my skills and interests.
          </p>
        </Section>
        {/* <Section title="You want Download my resume?">
          <button><a href="/YashSinghCV.pdf" download="My_Resume.pdf" > Download Resume </a></button>
        </Section> */}
      </div>
      <div className="btnresume">
        <p>You want Download my resume.</p>
        <button><a href="/YashSinghCV.pdf" download="My_Resume.pdf" > Download Resume </a></button>
      </div>
    </>
  );
};

const Section = ({ title, children }) => (
  <div className="resume-section">
    <h2 className="resume-section-title">{title}</h2>
    {children}
  </div>
  
);

export default Resume;
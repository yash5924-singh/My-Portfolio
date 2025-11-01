import React from 'react';
import ReactDom from 'react-dom';
import profileImage from './assets/ProfileImage.jpg';

function Home(){
  return (
    <div className="home-container">
      <div className="text-section">
        <h1>Hi, I'm Yash Singh </h1>
        <p>I’m a React Developer passionate about clean and interactive UIs..</p>
      </div>
      <div className="image-section">
       <img src={profileImage} alt="ProfileImage" className="profile-photo" />
      </div>
    </div>
  );
};

export default Home;
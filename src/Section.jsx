import React from 'react';
import { Element } from 'react-scroll';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Resume from './Resume';

const Section = () => {
  return (
    <div>
      <Element name="home" className="section">
        <Home/>
      </Element>

      <Element name="about" className="section">
        <About/>
      </Element>

      <Element name="skills" className="section">
        <Skills/>
      </Element>

      <Element name="contact" className="section">
        <Contact/>
      </Element>

       <Element name="resume" className="section">
        <Resume/>
      </Element>
    </div>
  );
};

export default Section
import React,{ useState } from 'react';
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  //  const menuItems = [
  //   { name: "Home", path: "/" },
  //   { name: "About", path: "/about" },
  //    { name: "Skills", path: "/Skills" },
  //   { name: "Resume", path: "/resume" },
  //   { name: "Contact", path: "/contact" },
    
  // ];
   return (
    <nav className="navbar">
      <div className="logo">Yash Singh</div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="home" smooth duration={500} spy activeClass="active" onClick={closeMenu}>Home</Link>
        <Link to="about" smooth duration={500} spy activeClass="active" onClick={closeMenu}>About</Link>
        <Link to="skills" smooth duration={500} spy activeClass="active" onClick={closeMenu}>Skills</Link>
        <Link to="contact" smooth duration={500} spy activeClass="active" onClick={closeMenu}>Contact</Link>
        <Link to="resume" smooth duration={500} spy activeClass="active" onClick={closeMenu}>Resume</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}
export default Nav;




import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Nav from './Nav'; 
import Section from './Section';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Skills from './Skills';
import { Element } from "react-scroll";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Section/>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      
      </div>

    </BrowserRouter>
  );
}

export default App;

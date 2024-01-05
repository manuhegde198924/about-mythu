import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import Certification from "./Certification";
import Projects from "./Projects";
import MoreContact from "./MoreContact";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/certification">Certification</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/more-contact">More Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/certification" element={<Certification />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/more-contact" element={<MoreContact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

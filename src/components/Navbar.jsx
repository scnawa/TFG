import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";


function Navbar() {
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <nav className="tfg-nav">
      {/* ---------- LOGO ---------- */}

      <div className="mark">
        <div className="sq"></div>

        <div className="name">
          TOTAL FACILITY
          <span>GROUP · EST. 1994</span>
        </div>
      </div>

      {/* ---------- NAVIGATION ---------- */}

      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/security">SECURITY</Link> 
        <Link to="/pest-control">PEST CONTROL</Link>
        <Link to="/contact-page">CONTACT US</Link>
      </div>
      {/* ---------- PHONE ---------- */}
      <div className="phone">
        +61 2 9693 2699
      </div>
    </nav>
  );
}

export default Navbar;
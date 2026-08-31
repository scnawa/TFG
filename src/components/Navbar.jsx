import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";


function Navbar() {
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <nav className="tfg-nav">
      {/* ---------- LOGO ---------- */}

      <div className="mark">
        <img
          src="/images/TFG-LOGO.png"
          alt="Total Facility Group"
          className="tfg-logo"
        />
      </div>

      {/* ---------- NAVIGATION ---------- */}

      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/cleaning-page">CLEANING</Link>
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
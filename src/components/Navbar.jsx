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

        <a href="/#about">ABOUT US</a>

        {/* ---------- PROJECTS DROPDOWN ---------- */}

        <div className="projects-menu">
          <button
            className="projects-button"
            onClick={() => setProjectsOpen(!projectsOpen)}
          >
            PROJECTS
          </button>

          {projectsOpen && (
            <div className="projects-dropdown">
              <Link
                to="/security"
                onClick={() => setProjectsOpen(false)}
              >
                Security
              </Link>

              <Link
                to="/pest-control"
                onClick={() => setProjectsOpen(false)}
              >
                Pest Control
              </Link>

              <Link
                to="/battery-bull"
                onClick={() => setProjectsOpen(false)}
              >
                Battery Bull
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* ---------- PHONE ---------- */}

      <div className="phone">
        +61 2 9693 2699
      </div>
    </nav>
  );
}

export default Navbar;
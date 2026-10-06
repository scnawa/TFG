import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { CONTACT_LINK, NAV_LINKS, PHONE } from "../siteConfig";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // While the mobile menu is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">
        SKIP TO CONTENT
      </a>

      <header className="tfg-nav" data-open={menuOpen}>
        {/* ---------- LOGO ---------- */}

        <NavLink
          to="/"
          className="mark"
          aria-label="Total Facility Group home"
          onClick={closeMenu}
        >
          <img
            src="/images/TFG-LOGO.png"
            alt="Total Facility Group"
            className="tfg-logo"
          />
        </NavLink>

        {/* ---------- NAVIGATION ---------- */}

        <nav id="primary-nav" className="links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink to={CONTACT_LINK.to} className="nav-cta" onClick={closeMenu}>
            {CONTACT_LINK.label}
          </NavLink>

          <a className="phone phone-in-menu" href={PHONE.href}>
            <span className="phone-label">CALL</span> {PHONE.display}
          </a>
        </nav>

        {/* ---------- PHONE ---------- */}

        <a className="phone phone-in-bar" href={PHONE.href}>
          {PHONE.display}
        </a>

        {/* ---------- MOBILE TOGGLE ---------- */}

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-label">{menuOpen ? "CLOSE" : "MENU"}</span>
          <span className="menu-toggle-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </header>

      <div
        className="nav-scrim"
        data-open={menuOpen}
        aria-hidden="true"
        onClick={closeMenu}
      />
    </>
  );
}

export default Navbar;

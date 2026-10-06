import { Link } from "react-router-dom";
import { CONTACT_LINK, EMAIL, PHONE, SERVICE_LINKS } from "../siteConfig";
import "./Footer.css";

const COMPANY_LINKS = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  CONTACT_LINK,
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        {/* ---------- BRAND ---------- */}

        <div className="site-footer-brand">
          <img
            src="/images/TFG-LOGO.png"
            alt="Total Facility Group"
            className="site-footer-logo"
          />
          <p>
            Commercial fit-out &amp; building services for national retail
            and commercial clients.
          </p>
        </div>

        {/* ---------- LINKS ---------- */}

        <nav className="site-footer-col" aria-label="Services">
          <p className="site-footer-heading">SERVICES</p>
          <ul>
            {SERVICE_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="site-footer-col" aria-label="Company">
          <p className="site-footer-heading">COMPANY</p>
          <ul>
            {COMPANY_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer-col">
          <p className="site-footer-heading">TALK TO US</p>
          <a className="site-footer-phone" href={PHONE.href}>
            {PHONE.display}
          </a>
          <a className="site-footer-email" href={EMAIL.href}>
            {EMAIL.display}
          </a>
          <Link className="site-footer-link-arrow" to={CONTACT_LINK.to}>
            SEND AN ENQUIRY <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* ---------- BASE BAR ---------- */}

      <div className="site-footer-base">
        <span>
          TOTAL FACILITY GROUP · COMMERCIAL FIT-OUT &amp; BUILDING SERVICES
        </span>
        <span>© 2026 TFG</span>
      </div>
    </footer>
  );
}

export default Footer;

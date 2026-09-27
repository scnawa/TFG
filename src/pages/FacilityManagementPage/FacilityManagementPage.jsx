import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import "./FacilityManagementPage.css";

const PLUMBING_POINTS = [
  {
    title: "Planned maintenance",
    text: "Scheduled servicing of taps, cisterns, valves and fixtures that catches leaks before they become call-outs.",
  },
  {
    title: "Blocked drains & sewer",
    text: "Drain camera inspections, jet blasting and clearing of kitchen, amenity and shared lines.",
  },
  {
    title: "Hot water systems",
    text: "Repair, replacement and servicing of gas, electric, heat pump and continuous flow units.",
  },
  {
    title: "Backflow & TMV testing",
    text: "Annual testing, tagging and servicing of backflow devices and thermostatic mixing valves.",
  },
  {
    title: "Grease traps & trade waste",
    text: "Pipework and drainage around grease arrestors kept clear and compliant for commercial kitchens.",
  },
  {
    title: "Leak detection & repairs",
    text: "Locating hidden leaks, burst pipes and pressure issues, then repairing them with minimal disruption.",
  },
];

const ELECTRICAL_POINTS = [
  {
    title: "Maintenance & repairs",
    text: "Fault finding, repairs and scheduled checks that keep power, lighting and equipment running.",
  },
  {
    title: "Test & tag",
    text: "Testing and tagging of portable appliances and leads, with records kept for your compliance file.",
  },
  {
    title: "Emergency & exit lighting",
    text: "Routine testing, reporting and replacement of emergency and exit lighting to Australian Standards.",
  },
  {
    title: "Switchboards & RCDs",
    text: "Switchboard upgrades, circuit protection and RCD testing for safer, more reliable supply.",
  },
  {
    title: "Lighting upgrades",
    text: "LED retrofits and new lighting for offices, retail, warehouses and car parks that cut running costs.",
  },
  {
    title: "Fit-out electrical",
    text: "Power, data and lighting for fit-outs and refurbishments, delivered to program alongside the builder.",
  },
];

const REASONS = [
  ["One provider, both trades", "plumbing and electrical coordinated under one plan and one point of contact."],
  ["Work around your trade", "early starts and after-hours visits when a site can't close."],
  ["Licensed tradespeople", "every job done or supervised by qualified, licensed trades."],
  ["Clear paperwork", "photos, itemised invoices and compliance records sent with every job."],
  ["Part of TFG", "backed by a team already handling cleaning, security and fit-out."],
  ["Planned, not reactive", "maintenance schedules that cut downtime and avoid costly emergencies."],
];

function FacilityManagement() {
  return (
    <>
      <Navbar />

      <main className="project-page facility-page">
        {/* HERO */}
        <section className="project-hero">
          <p className="project-label">TOTAL FACILITY GROUP</p>

          <h1>
            FACILITY MANAGEMENT,
            <br />
            <em>SORTED.</em>
          </h1>

          <p className="project-description">
            Plumbing and electrical services that keep your building safe,
            compliant and running — from planned maintenance to fast repairs,
            all through one team.
          </p>
        </section>

        {/* PLUMBING FEATURE */}
        <section className="fm-feature">
          <div className="fm-feature-inner">
            <img
              className="fm-image"
              src="/images/Plumbing.jfif"
              alt="Plumber carrying out commercial plumbing work"
            />

            <div className="fm-feature-text">
              <p className="fm-eyebrow">PLUMBING</p>

              <h2>
                Commercial Plumbing, <em>Handled</em>
              </h2>

              <p>
                A blocked drain or failed hot water system in a commercial
                building costs more than the repair — it costs trading time,
                staff hours and sometimes compliance. Our plumbing team looks
                after offices, retail, hospitality, childcare and industrial
                sites with planned maintenance and prompt repairs.
              </p>

              <p>
                We build a maintenance schedule around your site, keep your
                compliance records current and work around your opening hours
                so the plumbing never gets in the way of business.
              </p>
            </div>
          </div>
        </section>

        {/* PLUMBING CARDS */}
        <section className="fm-section fm-centered">
          <p className="fm-eyebrow">WHAT WE COVER</p>
          <h2>
            Plumbing <em>Services</em>
          </h2>

          <div className="fm-cards">
            {PLUMBING_POINTS.map((point, i) => (
              <article className="fm-card" key={point.title}>
                <span className="fm-card-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ELECTRICAL FEATURE */}
        <section className="fm-feature fm-feature-reverse">
          <div className="fm-feature-inner">
            <img
              className="fm-image"
              src="/images/Electrician.jfif"
              alt="Electrician working on a commercial electrical installation"
            />

            <div className="fm-feature-text">
              <p className="fm-eyebrow">ELECTRICAL</p>

              <h2>
                Power You Can <em>Rely On</em>
              </h2>

              <p>
                Lighting, power and safety systems are the backbone of any
                commercial building. Our electricians handle maintenance,
                fault finding, compliance testing and upgrades across
                offices, shopping centres, warehouses and industrial sites.
              </p>

              <p>
                From test and tag to switchboard upgrades and LED retrofits,
                we keep your electrical systems safe, compliant and efficient
                — with the reporting your facilities team needs.
              </p>
            </div>
          </div>
        </section>

        {/* ELECTRICAL CARDS */}
        <section className="fm-section fm-centered">
          <p className="fm-eyebrow">WHAT WE COVER</p>
          <h2>
            Electrical <em>Services</em>
          </h2>

          <div className="fm-cards">
            {ELECTRICAL_POINTS.map((point, i) => (
              <article className="fm-card" key={point.title}>
                <span className="fm-card-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* WHY TFG */}
        <section className="fm-panel">
          <div className="fm-panel-inner">
            <p className="fm-eyebrow">WHY TFG</p>
            <h2>
              Why Choose <em>Total Facility Group</em>
            </h2>

            <ul className="fm-list fm-list-bullets fm-list-cols">
              {REASONS.map(([label, text]) => (
                <li key={label}>
                  <strong>{label}</strong> — {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="fm-cta">
          <h2>
            ONE CALL. <em>SITE SORTED.</em>
          </h2>

          <p>
            Talk to us about a maintenance plan for your plumbing and
            electrical — or get a repair booked in today.
          </p>

          <Link to="/contact-page" className="fm-cta-button">
            Contact TFG
          </Link>
        </section>
      </main>

      <footer className="fm-footer">
        <span>
          TOTAL FACILITY GROUP · COMMERCIAL FIT-OUT &amp; BUILDING SERVICES
        </span>

        <span>© 2026 TFG</span>
      </footer>
    </>
  );
}

export default FacilityManagement;

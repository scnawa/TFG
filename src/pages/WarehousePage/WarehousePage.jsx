import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import "./WarehousePage.css";

const CLEANING_POINTS = [
  {
    title: "Floor cleaning & sealing",
    text: "Scrubbing, strip & seal and cutbacks that protect floors from forklift and pallet traffic.",
  },
  {
    title: "Racking & shelving",
    text: "Dust, debris and build-up removed from racking, shelving and high-level storage.",
  },
  {
    title: "Loading docks & bays",
    text: "Keeping dock areas, bays and hardstand clean, clear and hazard-free.",
  },
  {
    title: "Waste & debris removal",
    text: "Regular removal of packaging waste, strapping and general site debris.",
  },
  {
    title: "High-level cleaning",
    text: "Roof trusses, beams and overhead areas cleaned safely at height.",
  },
  {
    title: "Preventative maintenance",
    text: "Scheduled checks and minor repairs that catch issues before they cause downtime.",
  },
];

const BATTERY_POINTS = [
  {
    title: "Heavy-duty capacity",
    text: "Built to handle industrial forklift batteries weighing over 3 tonnes.",
  },
  {
    title: "Narrow-aisle design",
    text: "A compact footprint suited to tight warehouse aisles and racking layouts.",
  },
  {
    title: "Powered extraction",
    text: "Motorised rollers and magnetic extraction for smooth, controlled battery transfers.",
  },
  {
    title: "Built-in safety",
    text: "Operator-present floor pedal and safety interlocks protect your team on every change.",
  },
  {
    title: "AC or DC power",
    text: "Flexible operation to suit your site's existing power setup.",
  },
  {
    title: "Less downtime",
    text: "Faster changes mean more forklifts on the floor across every shift.",
  },
];

const REASONS = [
  ["One team, both jobs", "cleaning, maintenance and battery exchange coordinated under one provider."],
  ["Scheduled around you", "work planned around picking, packing and despatch so operations don't stop."],
  ["Licensed & experienced", "technicians trained on warehouse sites and industrial equipment."],
  ["Part of TFG", "backed by a team already handling security, pest control and facility services."],
  ["First time, every time", "we show up, cover the job properly and keep things moving."],
];

function Warehouse() {
  return (
    <>
      <Navbar />

      <main className="project-page warehouse-page">
        {/* HERO */}
        <section className="project-hero">
          <p className="project-label">TOTAL FACILITY GROUP</p>

          <h1>
            WAREHOUSE SERVICES,
            <br />
            KEPT <em>MOVING.</em>
          </h1>

          <p className="project-description">
            From floor to fleet — Total Facility Group keeps warehouses and
            distribution centres clean, well maintained and running, with
            Battery Bull forklift battery exchange to keep your fleet moving
            too.
          </p>
        </section>

        {/* CLEANING & MAINTENANCE FEATURE */}
        <section className="wh-feature">
          <div className="wh-feature-inner">
            <img
              className="wh-image"
              src="/images/warehouse cleaning.jfif"
              alt="Clean warehouse interior with racking and loading area"
            />

            <div className="wh-feature-text">
              <p className="wh-eyebrow">CLEANING &amp; MAINTENANCE</p>

              <h2>
                Warehouses That Stay <em>Work-Ready</em>
              </h2>

              <p>
                Warehouse floors, racking and loading areas take a daily
                beating from forklifts, pallets and stock movement. Our
                cleaning and maintenance teams keep facilities safe, compliant
                and presentable — from routine floor care to scheduled
                maintenance that stops small issues becoming costly downtime.
              </p>

              <p>
                We work around your operating hours and despatch schedules, so
                cleaning and maintenance never gets in the way of picking,
                packing and despatch.
              </p>
            </div>
          </div>
        </section>

        {/* CLEANING CARDS */}
        <section className="wh-section wh-centered">
          <p className="wh-eyebrow">WHAT WE COVER</p>
          <h2>
            Cleaning &amp; <em>Maintenance</em>
          </h2>

          <div className="wh-cards">
            {CLEANING_POINTS.map((point, i) => (
              <article className="wh-card" key={point.title}>
                <span className="wh-card-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* BATTERY BULL FEATURE */}
        <section className="wh-feature wh-feature-reverse">
          <div className="wh-feature-inner">
            <div className="wh-feature-text">
              <p className="wh-eyebrow">BATTERY BULL</p>

              <h2>
                Forklift Battery Changes, <em>Cut in Half</em>
              </h2>

              <p>
                For sites running multiple shifts, changing forklift
                batteries manually costs time and puts operators at risk.
                Battery Bull is our man-aboard battery exchange system,
                purpose-built to pull and replace batteries quickly, safely
                and with minimal disruption to your operation.
              </p>

              <p>
                Converting from a manual, pallet-jack or narrow-aisle changer
                to Battery Bull can cut battery change times in half —
                keeping your fleet on the floor and your operation moving.
              </p>

              <Link to="/battery-bull" className="wh-feature-link">
                Learn more about Battery Bull
              </Link>
            </div>

            <div className="wh-video">
              <iframe
                src="https://www.youtube.com/embed/hKZb7Rk81oM"
                title="Battery Bull forklift battery exchange"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* BATTERY BULL CARDS */}
        <section className="wh-section wh-centered">
          <p className="wh-eyebrow">WHY BATTERY BULL</p>
          <h2>
            Built for <em>Fleet Operations</em>
          </h2>

          <div className="wh-cards">
            {BATTERY_POINTS.map((point, i) => (
              <article className="wh-card" key={point.title}>
                <span className="wh-card-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* WHY TFG */}
        <section className="wh-panel">
          <div className="wh-panel-inner">
            <p className="wh-eyebrow">WHY TFG</p>
            <h2>
              Why Choose <em>Total Facility Group</em>
            </h2>

            <ul className="wh-list wh-list-bullets wh-list-cols">
              {REASONS.map(([label, text]) => (
                <li key={label}>
                  <strong>{label}</strong> — {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="wh-cta">
          <h2>
            KEEP YOUR WAREHOUSE <em>MOVING.</em>
          </h2>

          <p>
            Talk to us about a site assessment and a warehouse cleaning,
            maintenance or Battery Bull plan built around your operation.
          </p>

          <Link to="/contact-page" className="wh-cta-button">
            Contact TFG
          </Link>
        </section>
      </main>

      <footer className="wh-footer">
        <span>
          TOTAL FACILITY GROUP · COMMERCIAL FIT-OUT &amp; BUILDING SERVICES
        </span>

        <span>© 2026 TFG</span>
      </footer>
    </>
  );
}

export default Warehouse;

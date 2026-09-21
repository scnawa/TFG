import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import "./SecurityPage.css";

const DUTIES = [
  {
    title: "Access control",
    text: "Checking ID, logging visitors and contractors, and restricting entry to authorised personnel.",
  },
  {
    title: "Patrols",
    text: "Scheduled walks and drive-bys covering perimeters, entry points, car parks and loading areas.",
  },
  {
    title: "Asset protection",
    text: "Watching over stock, plant, equipment and materials to guard against theft and damage.",
  },
  {
    title: "Incident reporting",
    text: "Documenting suspicious activity, damage or breaches with clear, timely written reports.",
  },
  {
    title: "Alarm response",
    text: "Attending triggered alarms, inspecting the site and clearing it once it is confirmed safe.",
  },
  {
    title: "Safety compliance",
    text: "Working to site induction requirements and safety procedures on every job.",
  },
];

const SERVICES = [
  {
    name: "Static guards",
    suited: "Sites needing a continuous on-site presence and immediate incident response.",
  },
  {
    name: "Mobile patrols",
    suited: "Sites needing scheduled lock-up checks and visible perimeter coverage.",
  },
  {
    name: "Gatehouse security",
    suited: "Sites with a controlled entry point requiring visitor and delivery management.",
  },
  {
    name: "Alarm monitoring & response",
    suited: "Sites with an existing alarm system needing fast, verified attendance.",
  },
  {
    name: "Electronic security (CCTV)",
    suited: "Sites needing remote visibility over storage areas, compounds and access points.",
  },
  {
    name: "Guards + patrol combination",
    suited: "Busy sites — for example a guard overnight on weekdays and patrols on weekends.",
  },
];

const RISKS = [
  ["Theft of stock and equipment", "high-value, portable items are easy to resell."],
  ["Unauthorised access", "creates safety, liability and insurance risk."],
  ["Vandalism", "graffiti, damaged fencing and interference with works."],
  ["After-hours intrusion", "risk rises sharply once staff leave, especially on weekends."],
  ["Perimeter weak points", "unlit areas, loading zones and temporary fencing."],
  ["Unmonitored areas", "blind spots that go unwatched between patrols."],
];

const STEPS = [
  ["Site assessment", "review layout, access points, lighting, storage areas and risk factors."],
  ["Security plan", "recommend guards, patrols, alarm response or CCTV to suit your site and budget."],
  ["Guard briefing", "every guard is briefed on site instructions before starting."],
  ["Deployment", "coverage begins on the agreed schedule, with logs and reporting from day one."],
  ["Ongoing reporting", "incident reports and patrol logs are provided throughout."],
  ["Plan review", "coverage is adjusted as your site and needs change."],
];

const REASONS = [
  ["Licensed personnel", "guards hold the licences required to work on your site."],
  ["Coordinated coverage", "guards, patrols and CCTV under one plan and one provider."],
  ["Fast mobilisation", "briefed, on site and accountable from the first patrol."],
  ["Part of TFG", "one team also handling cleaning, maintenance and facility services."],
  ["First time, every time", "we show up, cover the job properly and keep things moving."],
];

const FAQS = [
  {
    q: "Why do sites need security?",
    a: "Unattended sites, stores and warehouses are frequent targets for theft, vandalism and trespass — particularly overnight and on weekends. Security reduces that risk and protects your people, stock and insurance position.",
  },
  {
    q: "What's the difference between static guards and mobile patrols?",
    a: "Static guards stay on site for continuous presence and immediate response. Mobile patrols visit one or more sites on a schedule, checking perimeters, doors and gates, and responding to alarms.",
  },
  {
    q: "Can your team respond to alarms?",
    a: "Yes. We can attend triggered alarms, inspect the premises and confirm the site is safe before it is cleared.",
  },
  {
    q: "Do you provide CCTV?",
    a: "Yes. Electronic security can be combined with guards and patrols so you have remote visibility over key areas as well as people on the ground.",
  },
  {
    q: "Do you cover both commercial and industrial sites?",
    a: "Yes. We tailor coverage to the site — retail, warehouse, commercial buildings and more.",
  },
  {
    q: "How do I get a quote?",
    a: "Get in touch through our contact page and we'll arrange a site assessment and put together a tailored plan.",
  },
];

function Security() {
  return (
    <>
      <Navbar />

      <main className="project-page security-page">
        {/* HERO */}
        <section className="project-hero">
          <p className="project-label">TOTAL FACILITY GROUP</p>

          <h1>
            SECURITY,
            <br />
            BUILT TO <em>WATCH.</em>
          </h1>

          <p className="project-description">
            Total Facility Group brings the same standard to security that
            we bring to every site we touch — show up, cover the job
            properly, and keep things moving.
          </p>
        </section>

        {/* INTRO */}
        <section className="sec-section sec-split">
          <img
            className="sec-split-image"
            src="/images/cctv.jfif"
            alt="CCTV security camera"
          />

          <div className="sec-split-text">
            <p className="sec-eyebrow">TOP-NOTCH SECURITY</p>

            <h2>
              Licensed Guards, Patrols <em>&amp;</em> CCTV
            </h2>

            <p>
              Total Facility Group delivers top-notch security services you
              can rely on. Our licensed guards protect people, property and
              operations around the clock — mobilised fast, briefed
              properly, and accountable from the first patrol to the last.
            </p>

            <p>
              From CCTV monitoring to on-site guards and alarm response, we
              keep your premises protected with fast response, clear
              reporting and a standard we hold on every site.
            </p>
          </div>
        </section>

        {/* DUTIES */}
        <section className="sec-section sec-centered">
          <p className="sec-eyebrow">WHAT WE DO</p>
          <h2>
            What Does a <em>Security Officer</em> Do?
          </h2>

          <p className="sec-lead">
            Our officers control access, patrol the site, respond to alarms
            and report incidents — protecting your people, property and
            operations, especially when the site is unattended.
          </p>

          <div className="sec-cards">
            {DUTIES.map((duty, i) => (
              <article className="sec-card" key={duty.title}>
                <span className="sec-card-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{duty.title}</h3>
                <p>{duty.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICES TABLE */}
        <section className="sec-section sec-narrow">
          <p className="sec-eyebrow">SERVICES</p>
          <h2>
            Our Security <em>Services</em>
          </h2>

          <p className="sec-lead sec-lead-left">
            We combine physical guards, mobile patrols and electronic
            monitoring into one coordinated plan — so you're not managing
            multiple providers for one site.
          </p>

          <div className="sec-table" role="table">
            <div className="sec-table-row sec-table-head" role="row">
              <span role="columnheader">SERVICE</span>
              <span role="columnheader">BEST SUITED FOR</span>
            </div>

            {SERVICES.map((service) => (
              <div className="sec-table-row" role="row" key={service.name}>
                <strong role="cell">{service.name}</strong>
                <span role="cell">{service.suited}</span>
              </div>
            ))}
          </div>

          <p className="sec-note">
            No matter the size of the site, we tailor coverage to suit it.
          </p>
        </section>

        {/* RISKS + PROCESS + WHY */}
        <section className="sec-panel">
          <div className="sec-panel-inner">
            <article className="sec-block">
              <p className="sec-eyebrow">KNOW THE RISKS</p>
              <h2>
                Common <em>Security Risks</em>
              </h2>

              <p>
                Commercial sites are a frequent target because they hold
                valuable stock and equipment and are regularly unattended
                after hours.
              </p>

              <ol className="sec-list">
                {RISKS.map(([label, text]) => (
                  <li key={label}>
                    <strong>{label}</strong> — {text}
                  </li>
                ))}
              </ol>
            </article>

            <article className="sec-block">
              <p className="sec-eyebrow">OUR PROCESS</p>
              <h2>
                How We <em>Secure Your Site</em>
              </h2>

              <ol className="sec-list">
                {STEPS.map(([label, text]) => (
                  <li key={label}>
                    <strong>{label}</strong> — {text}
                  </li>
                ))}
              </ol>
            </article>

            <article className="sec-block sec-block-wide">
              <p className="sec-eyebrow">WHY TFG</p>
              <h2>
                Why Choose <em>Total Facility Group</em>
              </h2>

              <ul className="sec-list sec-list-bullets sec-list-cols">
                {REASONS.map(([label, text]) => (
                  <li key={label}>
                    <strong>{label}</strong> — {text}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec-section sec-narrow">
          <p className="sec-eyebrow">FAQ</p>
          <h2>
            Frequently Asked <em>Questions</em>
          </h2>

          <div className="sec-faq">
            {FAQS.map((faq) => (
              <details className="sec-faq-item" key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="sec-cta">
          <h2>
            NEED SECURITY THAT <em>SHOWS UP?</em>
          </h2>

          <p>
            Talk to us about a site assessment and a security plan built
            around your premises.
          </p>

          <Link to="/contact-page" className="sec-cta-button">
            Contact TFG
          </Link>
        </section>
      </main>

      <footer className="sec-footer">
        <span>
          TOTAL FACILITY GROUP · COMMERCIAL FIT-OUT &amp; BUILDING SERVICES
        </span>

        <span>© 2026 TFG</span>
      </footer>
    </>
  );
}

export default Security;

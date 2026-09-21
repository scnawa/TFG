import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import "./PestControlPage.css";

const HIGHLIGHTS = [
  "Our technicians identify the root cause of pest activity, treat affected areas and give guidance to help prevent future problems.",
  "We use Integrated Pest Management (IPM) — a proactive approach that focuses on long-term prevention through smart, targeted treatments.",
  "We know discretion matters. Treatments are planned to minimise disruption and protect your professional image.",
];

const PESTS = [
  {
    title: "Rodents",
    text: "Rats and mice damage stock, wiring and packaging, and put food safety at risk.",
  },
  {
    title: "Cockroaches",
    text: "Fast-breeding and hard to spot until numbers build — a serious hygiene and reputation risk.",
  },
  {
    title: "Ants",
    text: "Trailing ants contaminate food areas and can nest in walls, floors and voids.",
  },
  {
    title: "Flies & Flying Insects",
    text: "Flies and other flying insects spread contamination and put off customers.",
  },
  {
    title: "Spiders",
    text: "Webs and nests in ceilings, eaves and storage areas are unsightly and hard to keep on top of.",
  },
  {
    title: "Stored-Product Pests",
    text: "Beetles, weevils and moths that infest dry goods in warehouses and stockrooms.",
  },
];

const INDUSTRIES = [
  ["Retail & Supermarkets", "Protect customers, stock and reputation."],
  ["Food & Hospitality", "Hygiene that keeps customers coming back."],
  ["Warehouses & Distribution", "Secure your supply chain from stock damage."],
  ["Commercial Offices", "Comfortable, pest-free workplaces."],
  ["Property Management", "Pest-free properties, happy tenants."],
  ["Education & Government", "Safe spaces for work and learning."],
];

const STEPS = [
  [
    "Assess",
    "We inspect the interior and exterior of your premises to identify pests, activity and the conditions attracting them.",
  ],
  [
    "Plan & Treat",
    "Based on our findings, we prepare a tailored plan, treat existing issues and protect against future ones.",
  ],
  [
    "Advise",
    "We provide corrective actions and guidance so your team can spot the signs of a pest problem early.",
  ],
  [
    "Monitor",
    "We put monitoring in place to check treatment results and alert us to any change in activity.",
  ],
];

const METHODS = [
  {
    q: "Exclusion",
    a: "Sealing gaps, entry points and harbourage areas so pests can't get in or settle in the first place.",
  },
  {
    q: "Baiting & Trapping",
    a: "Targeted bait stations and traps placed where activity is found, particularly for rodents and ants.",
  },
  {
    q: "Insecticide Treatments",
    a: "Precise treatments applied to the areas where insects live and travel, chosen to suit the site and pest.",
  },
  {
    q: "Insect Light Traps",
    a: "Units that capture flying insects in food and customer areas without sprays.",
  },
  {
    q: "Sanitation Audits",
    a: "A review of cleanliness, storage and waste practices that may be feeding a pest problem.",
  },
  {
    q: "Ongoing Monitoring",
    a: "Scheduled checks and activity records so changes are picked up early.",
  },
];

const FAQS = [
  {
    q: "How much does commercial pest control cost?",
    a: "It depends on the size of the premises, the pests involved and how often service is needed. Every business is different, so we tailor treatments and provide a quote after assessing your site.",
  },
  {
    q: "Will treatments disrupt my business?",
    a: "We plan treatments around your trading hours and operations, and can work after hours to keep disruption to a minimum.",
  },
  {
    q: "What can I expect during an inspection?",
    a: "A technician will inspect the inside and outside of the premises, look for signs of activity and conducive conditions, then explain what they found and what we recommend.",
  },
  {
    q: "Can you provide regular ongoing service?",
    a: "Yes. Many sites benefit from scheduled visits with monitoring so problems are caught before they grow.",
  },
  {
    q: "How do I get a quote?",
    a: "Get in touch through our contact page and we'll arrange an inspection and put together a tailored plan.",
  },
];

function PestControl() {
  return (
    <>
      <Navbar />

      <main className="project-page pest-page">
        {/* HERO */}
        <section className="project-hero">
          <p className="project-label">TOTAL FACILITY GROUP</p>

          <h1>
            STOP PESTS
            <br />
            BEFORE THEY <em>START.</em>
          </h1>

          <p className="project-description">
            Professional pest management keeping workplaces, properties and
            facilities safe, hygienic and pest-free.
          </p>
        </section>

        {/* MAIN: WHAT IS PEST CONTROL */}
        <section className="pest-section pest-centered">
          <p className="pest-eyebrow">PEST MANAGEMENT</p>

          <h2>
            Does Your Business Need <em>Pest Control?</em>
          </h2>

          <p className="pest-lead">
            You deserve more than set schedules and standard treatments.
            Our pest control services identify, manage and prevent pest
            problems across commercial and residential environments — we
            don't just treat pest problems, we help stop them before they
            start.
          </p>

          <figure className="pest-diagram">
            <img
              src="/images/pest control diagram.jfif"
              alt="Warning signs for rodents, cockroaches and ants"
            />
          </figure>

          <ul className="pest-checks">
            {HIGHLIGHTS.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </section>

        {/* PESTS WE MANAGE */}
        <section className="pest-section pest-centered pest-section-tight">
          <p className="pest-eyebrow">TARGET PESTS</p>
          <h2>
            Pests We <em>Manage</em>
          </h2>

          <div className="pest-cards">
            {PESTS.map((pest, i) => (
              <article className="pest-card" key={pest.title}>
                <span className="pest-card-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{pest.title}</h3>
                <p>{pest.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SPECIFIC: INTERIOR TREATMENTS */}
        <section className="pest-feature">
          <div className="pest-feature-inner">
            <div className="pest-feature-card">
              <p className="pest-eyebrow">INTERIOR TREATMENTS</p>

              <h2>Targeted Treatments Inside Your Site</h2>

              <p>
                Cockroaches and other crawling insects thrive in kitchens,
                storerooms and back-of-house areas. Our technicians work in
                protective equipment to treat floors, skirtings, voids and
                hidden harbourage points — using targeted products where
                the activity is, not blanket sprays.
              </p>

              <p>
                Work is planned around your trading hours, so your team and
                customers can carry on as normal.
              </p>

              <Link to="/contact-page" className="pest-feature-link">
                Book an inspection
              </Link>
            </div>

            <img
              className="pest-feature-image"
              src="/images/pest control.jfif"
              alt="Technician in protective gear treating a floor for cockroaches"
            />
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="pest-industries">
          <p className="pest-eyebrow">WHO WE HELP</p>
          <h2>
            Industries We <em>Support</em>
          </h2>

          <div className="pest-tiles">
            {INDUSTRIES.map(([title, text]) => (
              <article className="pest-tile" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="pest-section pest-centered">
          <p className="pest-eyebrow">OUR PROCESS</p>
          <h2>
            How We Protect Your Business <em>From Pests</em>
          </h2>

          <div className="pest-steps">
            {STEPS.map(([title, text], i) => (
              <article className="pest-step" key={title}>
                <span className="pest-step-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* METHODS */}
        <section className="pest-section pest-narrow pest-section-tight">
          <p className="pest-eyebrow">HOW WE TREAT</p>
          <h2>
            Our Treatment <em>Methods</em>
          </h2>

          <div className="pest-faq">
            {METHODS.map((method) => (
              <details className="pest-faq-item" key={method.q}>
                <summary>{method.q}</summary>
                <p>{method.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="pest-section pest-narrow pest-section-tight">
          <p className="pest-eyebrow">FAQ</p>
          <h2>
            Frequently Asked <em>Questions</em>
          </h2>

          <div className="pest-faq">
            {FAQS.map((faq) => (
              <details className="pest-faq-item" key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pest-cta">
          <h2>
            PESTS DON'T <em>WAIT.</em>
          </h2>

          <p>
            Talk to us about an inspection and a pest management plan built
            around your premises.
          </p>

          <Link to="/contact-page" className="pest-cta-button">
            Contact TFG
          </Link>
        </section>
      </main>

      <footer className="pest-footer">
        <span>
          TOTAL FACILITY GROUP · COMMERCIAL FIT-OUT &amp; BUILDING SERVICES
        </span>

        <span>© 2026 TFG</span>
      </footer>
    </>
  );
}

export default PestControl;

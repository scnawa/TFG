import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import "./ShopfittingPage.css";

const CASES = [
  {
    code: "C.01",
    title: "Bakery Shop Fitting",
    text: "TFG is regularly engaged by our Coles clients to provide shop fitting services for fixture standard upgrades. These changes take place after hours, with the store ready for opening trade the next morning. Coles Chisholm in the ACT was just one of 30 stores completed in succession.",
  },
  {
    code: "C.02",
    title: "Coles Gondola & Signage Refresh",
    text: "TFG was recently engaged by Coles to complete a minor store freshen-up. This included installing a new store signage kit and lowering the height of the existing gondolas — creating a more open, brighter feel with fresh white backing panels across all gondola modules and new infill joinery around columns. The works were completed entirely after hours, enabling the store to continue trading as normal.",
  },
  {
    code: "C.03",
    title: "General Pants Co.",
    text: "TFG was approached by General Pants Co. to undertake a rapid store refresh. Over five nights, the team deep-cleaned the store in preparation for painting, re-lamped it with new LED down and directional lighting, and prepped and painted all surfaces — mobilising the store each evening. Existing clothing racks were fitted with castors so the store team could move them easily, all required maintenance to floors and joinery was completed, and the job was finished off with a full floor polish and white-glove clean.",
  },
  {
    code: "C.04",
    title: "Tradeflex De-fit",
    text: "TFG worked to a very tight timeline to complete this de-fit for a TOLL warehouse. Works included painting approximately 200m² of office and amenities space, ceiling tile replacements, carpet replacement, steam cleaning, and a strip, polish and reseal of the floors, plus a full exterior high-pressure clean and scrub, gutter clean and rubbish removal. Outside, we upgraded the gardens with rejuvenated vegetation, repaired damaged fencing, metal wall cladding and façade, roller doors, and refreshed all bollards.",
  },
];

const REASONS = [
  ["Overnight mobilisation", "crews on site after close, gone before trade opens the next morning."],
  ["Every trade coordinated", "painting, flooring, fixtures and signage managed under one plan."],
  ["Zero trade lost", "work timed so stores open on schedule, every time."],
  ["Part of TFG", "backed by a team already handling cleaning, security and maintenance."],
  ["First time, every time", "we show up, cover the job properly and keep things moving."],
];

function Shopfitting() {
  return (
    <>
      <Navbar />

      <main className="project-page shopfitting-page">
        {/* HERO */}
        <section className="project-hero">
          <p className="project-label">TOTAL FACILITY GROUP</p>

          <h1>
            SHOPFITTING &amp;
            <br />
            <em>CONSTRUCTION.</em>
          </h1>

          <p className="project-description">
            Fit-outs, refreshes and de-fits delivered after hours and on
            tight timelines — with sites ready for trade the next morning.
          </p>
        </section>

        {/* INTRO */}
        <section className="sf-section sf-centered">
          <p className="sf-eyebrow">HOW WE WORK</p>
          <h2>
            Built Around Your <em>Trading Hours</em>
          </h2>

          <p className="sf-lead">
            From fixture upgrades to full store refreshes and warehouse
            de-fits, TFG mobilises overnight and on short notice,
            coordinating every trade so the job gets done without a single
            day of trade lost.
          </p>
        </section>

        {/* RECENT WORK */}
        <section className="sf-section sf-narrow sf-section-tight">
          <p className="sf-eyebrow">PROJECT EXPERIENCE</p>
          <h2>
            Recent <em>Work</em>
          </h2>

          <div className="sf-cases">
            {CASES.map((item) => (
              <article className="sf-case" key={item.code}>
                <span className="sf-case-code">{item.code}</span>

                <div className="sf-case-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WHY TFG */}
        <section className="sf-panel">
          <div className="sf-panel-inner">
            <p className="sf-eyebrow">WHY TFG</p>
            <h2>
              Why Choose <em>Total Facility Group</em>
            </h2>

            <ul className="sf-list">
              {REASONS.map(([label, text]) => (
                <li key={label}>
                  <strong>{label}</strong> — {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="sf-cta">
          <h2>
            NEED A FIT-OUT DONE <em>OVERNIGHT?</em>
          </h2>

          <p>
            Talk to us about a fit-out, refresh or de-fit built around your
            trading hours.
          </p>

          <Link to="/contact-page" className="sf-cta-button">
            Contact TFG
          </Link>
        </section>
      </main>

      <footer className="sf-footer">
        <span>
          TOTAL FACILITY GROUP · COMMERCIAL FIT-OUT &amp; BUILDING SERVICES
        </span>

        <span>© 2026 TFG</span>
      </footer>
    </>
  );
}

export default Shopfitting;

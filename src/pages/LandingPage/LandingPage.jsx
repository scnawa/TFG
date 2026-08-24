import Navbar from '../../components/Navbar';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="tfg-hero">
          <div className="eyebrow">
            COMMERCIAL FIT-OUT &amp; BUILDING SERVICES
          </div>

          <h1>
            COMMERCIAL
            <br />
            FIT-OUTS,
            <br />
            BUILT TO <em>SCHEDULE.</em>
          </h1>

          <p className="sub">
            Store fit-outs, refreshes and building works for national
            retail and commercial clients — mobilised fast, managed end
            to end.
          </p>

          <div className="dimline">
            <div className="tick"></div>
            <div className="line"></div>

            <div className="label">
              NATIONWIDE&nbsp; · &nbsp;30 YEARS ON SITE
            </div>

            <div className="line"></div>
            <div className="tick"></div>
          </div>

          <a href="#contact" className="cta">
            BOOK A CONSULTATION
          </a>

          <div className="titleblock">
            <div className="row">
              <span>SHEET</span>
              <span>FO-01</span>
            </div>

            <div className="row">
              <span>SCALE</span>
              <span>NTS</span>
            </div>

            <div className="row">
              <span>REV</span>
              <span>2026.03</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="tfg-services" id="about">
          <div className="eyebrow">SCOPE OF WORKS</div>

          <h2>One site contact. Every trade covered.</h2>

          <div className="tfg-grid">
            <div className="tfg-card">
              <div className="code">A.01</div>
              <h3>Shop Fit-Outs</h3>
              <p>
                New store builds and rapid shop fitting for national
                retail rollouts.
              </p>
            </div>

            <div className="tfg-card">
              <div className="code">A.02</div>
              <h3>Store Refreshes</h3>
              <p>
                Refits and refreshes completed after hours, with zero
                disruption to trade.
              </p>
            </div>

            <div className="tfg-card">
              <div className="code">A.03</div>
              <h3>Signage &amp; Fixtures</h3>
              <p>
                Supply and install of signage, joinery and fixed
                fit-out elements.
              </p>
            </div>

            <div className="tfg-card">
              <div className="code">A.04</div>
              <h3>Rapid Mobilisation</h3>
              <p>
                Crews on site within 48 hours for urgent or unplanned
                works.
              </p>
            </div>

            <div className="tfg-card">
              <div className="code">A.05</div>
              <h3>Compliance &amp; Safety</h3>
              <p>
                Site works delivered to Tier 1 safety and governance
                standards.
              </p>
            </div>

            <div className="tfg-card">
              <div className="code">A.06</div>
              <h3>National Roll-Out</h3>
              <p>
                Coordinated delivery across multiple sites under one
                program.
              </p>
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="tfg-case" id="clients">
          <div className="eyebrow">PROJECT EXPERIENCE</div>

          <h2>
            Battery Bull works across NSW distribution centres.
          </h2>

          <p>
            TFG has supported Battery Bull with coordinated fit-out and
            building works across distribution centres throughout New
            South Wales, delivering practical site upgrades while
            coordinating trades, site access and works around operational
            requirements.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="tfg-footer" id="contact">
        <span>
          TOTAL FACILITY GROUP · COMMERCIAL FIT-OUT &amp; BUILDING SERVICES
        </span>

        <span>© 2026 TFG</span>
      </footer>
    </div>
  );
}

export default LandingPage;

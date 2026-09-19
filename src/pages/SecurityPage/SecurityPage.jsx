import Navbar from "../../components/Navbar";
import "./SecurityPage.css";

function Security() {
  return (
    <>
      <Navbar />

      <main className="project-page security-page">
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

        <section className="project-content">
          <h2>ONE STANDARD. EVERY SHIFT.</h2>

          <p>
            Our licensed guards protect people, property and operations
            around the clock — mobilised fast, briefed properly, and
            accountable from the first patrol to the last. No surprises, no
            gaps in coverage. Just a team that's actually watching.
          </p>
        </section>
      </main>
    </>
  );
}

export default Security;

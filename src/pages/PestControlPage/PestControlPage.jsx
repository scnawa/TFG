import Navbar from "../../components/Navbar";
import "./PestControlPage.css";

function PestControl() {
  return (
    <>
      <Navbar />

      <main className="project-page pest-page">
        <section className="project-hero">
          <p className="project-label">TOTAL FACILITY GROUP</p>

          <h1>PEST CONTROL</h1>

          <p className="project-description">
            Professional pest management solutions keeping workplaces,
            properties and facilities safe and pest-free.
          </p>
        </section>

        <section className="project-content">
          <h2>PEST MANAGEMENT</h2>

          <p>
            Our pest control services are designed to identify, manage and
            prevent pest problems across commercial and residential
            environments.
          </p>
        </section>
      </main>
    </>
  );
}

export default PestControl;

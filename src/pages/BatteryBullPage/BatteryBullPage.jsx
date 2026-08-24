import Navbar from "../../components/Navbar";
import "./BatteryBullPage.css";

function BatteryBull() {
  return (
    <>
      <Navbar />

      <main className="project-page battery-page">
        <section className="project-hero">
          <p className="project-label">TOTAL FACILITY GROUP</p>

          <h1>BATTERY BULL</h1>

          <p className="project-description">
            Battery and power solutions designed to keep businesses and
            facilities operating reliably.
          </p>
        </section>

        <section className="project-content">
          <h2>BATTERY SOLUTIONS</h2>

          <p>
            Battery Bull provides dependable power solutions with a focus on
            performance, reliability and long-term support.
          </p>
        </section>
      </main>
    </>
  );
}

export default BatteryBull;

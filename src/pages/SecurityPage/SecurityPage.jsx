import Navbar from "../../components/Navbar";
import "./SecurityPage.css";

function Security() {
  return (
    <>
      <Navbar />

      <main className="project-page security-page">
        <section className="project-hero">
          <p className="project-label">TOTAL FACILITY GROUP</p>

          <h1>SECURITY</h1>

          <p className="project-description">
            Professional security solutions designed to protect people,
            property and businesses.
          </p>
        </section>

        <section className="project-content">
          <h2>SECURITY SERVICES</h2>

          <p>
            Our security services provide reliable protection tailored to the
            needs of each client and environment.
          </p>
        </section>
      </main>
    </>
  );
}

export default Security;

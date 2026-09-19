import Navbar from "../../components/Navbar";
import "./FacilityManagementPage.css";

function FacilityManagement() {
  return (
    <>
      <Navbar />

      <main className="project-page facility-page">
        <section className="project-hero">
          <p className="project-label">TOTAL FACILITY GROUP</p>

          <h1>FACILITY MANAGEMENT</h1>

          <p className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

        <section className="project-content">
          <h2>LOREM IPSUM DOLOR</h2>

          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem.
          </p>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </p>
        </section>
      </main>
    </>
  );
}

export default FacilityManagement;

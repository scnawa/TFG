import Navbar from "../../components/Navbar";
import "./WarehousePage.css";

function Warehouse() {
  return (
    <>
      <Navbar />

      <main className="project-page warehouse-page">
        <section className="project-hero">
          <p className="project-label">TOTAL FACILITY GROUP</p>

          <h1>WAREHOUSE SERVICES</h1>

          <p className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

        <section className="project-content">
          <h2>LOREM IPSUM DOLOR</h2>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>

          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </section>
      </main>
    </>
  );
}

export default Warehouse;

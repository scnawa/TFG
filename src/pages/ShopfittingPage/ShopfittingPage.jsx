import Navbar from "../../components/Navbar";
import "./ShopfittingPage.css";

function Shopfitting() {
  return (
    <>
      <Navbar />

      <main className="project-page shopfitting-page">
        <section className="project-hero">
          <p className="project-label">TOTAL FACILITY GROUP</p>

          <h1>SHOPFITTING &amp; CONSTRUCTION</h1>

          <p className="project-description">
            Fit-outs, refreshes and de-fits delivered after hours and on
            tight timelines — with sites ready for trade the next morning.
          </p>
        </section>

        <section className="project-content">
          <h2>BUILT AROUND YOUR TRADING HOURS</h2>

          <p>
            From fixture upgrades to full store refreshes and warehouse
            de-fits, TFG mobilises overnight and on short notice, coordinating
            every trade so the job gets done without a single day of trade
            lost.
          </p>
        </section>

        <section className="shopfitting-cases">
          <div className="shopfitting-cases-container">
            <p className="project-eyebrow">PROJECT EXPERIENCE</p>

            <h2>Recent Work</h2>

            <div className="shopfitting-case">
              <span className="shopfitting-case-code">C.01</span>

              <div className="shopfitting-case-body">
                <h3>Bakery Shop Fitting</h3>

                <p>
                  TFG is regularly engaged by our Coles clients to provide
                  shop fitting services for fixture standard upgrades. These
                  changes take place after hours, with the store ready for
                  opening trade the next morning. Coles Chisholm in the ACT
                  was just one of 30 stores completed in succession.
                </p>
              </div>
            </div>

            <div className="shopfitting-case">
              <span className="shopfitting-case-code">C.02</span>

              <div className="shopfitting-case-body">
                <h3>Coles Gondola &amp; Signage Refresh</h3>

                <p>
                  TFG was recently engaged by Coles to complete a minor
                  store freshen-up. This included installing a new store
                  signage kit and lowering the height of the existing
                  gondolas — creating a more open, brighter feel with fresh
                  white backing panels across all gondola modules and new
                  infill joinery around columns. The works were completed
                  entirely after hours, enabling the store to continue
                  trading as normal.
                </p>
              </div>
            </div>

            <div className="shopfitting-case">
              <span className="shopfitting-case-code">C.03</span>

              <div className="shopfitting-case-body">
                <h3>General Pants Co.</h3>

                <p>
                  TFG was approached by General Pants Co. to undertake a
                  rapid store refresh. Over five nights, the team
                  deep-cleaned the store in preparation for painting,
                  re-lamped it with new LED down and directional lighting,
                  and prepped and painted all surfaces — mobilising the
                  store each evening. Existing clothing racks were fitted
                  with castors so the store team could move them easily, all
                  required maintenance to floors and joinery was completed,
                  and the job was finished off with a full floor polish and
                  white-glove clean.
                </p>
              </div>
            </div>

            <div className="shopfitting-case">
              <span className="shopfitting-case-code">C.04</span>

              <div className="shopfitting-case-body">
                <h3>Tradeflex De-fit</h3>

                <p>
                  TFG worked to a very tight timeline to complete this de-fit
                  for a TOLL warehouse. Works included painting approximately
                  200m² of office and amenities space, ceiling tile
                  replacements, carpet replacement, steam cleaning, and a
                  strip, polish and reseal of the floors, plus a full
                  exterior high-pressure clean and scrub, gutter clean and
                  rubbish removal. Outside, we upgraded the gardens with
                  rejuvenated vegetation, repaired damaged fencing, metal
                  wall cladding and façade, roller doors, and refreshed all
                  bollards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Shopfitting;

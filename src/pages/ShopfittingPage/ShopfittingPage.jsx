import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CtaBand from "../../components/ui/CtaBand";
import FeatureList from "../../components/ui/FeatureList";
import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import Section from "../../components/ui/Section";
import SectionHeader from "../../components/ui/SectionHeader";
import StatRow from "../../components/ui/StatRow";
import "./ShopfittingPage.css";

// Project write-ups from the original totalfacility.com.au site.
const CASES = [
  {
    code: "C.01",
    client: "COLES · CHISHOLM, ACT",
    title: "Bakery Shop Fitting",
    text: "TFG is regularly engaged by our Coles clients to provide shop fitting services for fixture standard upgrades. These changes take place after hours, with the store ready for opening trade the next morning. Coles Chisholm in the ACT was just one of 30 stores completed in succession.",
    images: [
      { src: "/images/projects/coles-bakery-1.jpg", alt: "Coles bakery with new display fixtures installed overnight, before stocking" },
      { src: "/images/projects/coles-bakery-2.jpg", alt: "Completed Coles bakery stocked and trading the next morning" },
    ],
  },
  {
    code: "C.02",
    client: "COLES",
    title: "Coles Gondola & Signage Refresh",
    text: "TFG was recently engaged by Coles to complete a minor store freshen-up. This included installing a new store signage kit and lowering the height of the existing gondolas — creating a more open, brighter feel with fresh white backing panels across all gondola modules and new infill joinery around columns. The works were completed entirely after hours, enabling the store to continue trading as normal.",
    images: [
      { src: "/images/projects/coles-refresh-1.jpg", alt: "Coles aisle with lowered gondolas and fresh white backing panels" },
      { src: "/images/projects/coles-refresh-2.jpg", alt: "New Coles aisle signage kit above the refreshed gondolas" },
    ],
  },
  {
    code: "C.03",
    client: "COLES ONLINE · NATIONAL",
    title: "Coles Online Loading Bays",
    text: "TFG has become a supplier of choice for Coles Online and Click & Collect, delivering more than 80 sites nationally to date. Works include site audits and recommendations, all authority requirements and certifications, dock installations, canopy extensions, construction of walls and doorways including hi-impact door supply and installation, ceramic wall tiling, signage, demolition, scissor lift pit installations including all engineering and civil works, line marking, electrical and data. We manufacture and install all of the joinery, and deliver flooring works including vinyl tiles and epoxy — a one-stop shop that takes away the stress of managing multiple contractors.",
    images: [
      { src: "/images/projects/coles-online-3.jpg", alt: "Crane lifting a new dock installation into place at a Coles receiving bay" },
      { src: "/images/projects/coles-online-2.jpg", alt: "Dock leveller being installed at a Coles receiving bay" },
      { src: "/images/projects/coles-online-1.jpg", alt: "Reinforcement steel in place for a scissor lift pit at a Coles loading dock" },
    ],
  },
  {
    code: "C.04",
    client: "COLES CLICK & COLLECT",
    title: "Car Park Line Marking",
    text: "Alongside our Coles Online works, TFG delivers car park line marking for Click & Collect bays. We are market leaders in line marking solutions, tailored to each site's bespoke requirements.",
    images: [
      { src: "/images/projects/line-marking-3.jpg", alt: "Red Coles Click & Collect customer parking bays with yellow line marking" },
      { src: "/images/projects/line-marking-1.jpg", alt: "Coles Click & Collect bays in an undercover car park" },
      { src: "/images/projects/line-marking-2.jpg", alt: "Accessible parking bay with yellow hatched shared zone" },
    ],
  },
  {
    code: "C.05",
    client: "GENERAL PANTS CO. · KOTARA, NSW",
    title: "Rapid Store Refresh",
    text: "TFG was approached by General Pants Co. to undertake a rapid refresh of their Kotara store in Newcastle. Over five nights, the team deep-cleaned the store in preparation for painting, re-lamped it with new LED down and directional lighting, and prepped and painted all surfaces — mobilising the store each evening. Existing clothing racks were fitted with castors so the store team could move them easily, all required maintenance to floors and joinery was completed, and the job was finished off with a full floor polish and white-glove clean.",
    images: [
      { src: "/images/projects/general-pants-1.jpg", alt: "General Pants Co. Kotara shopfront closed for overnight works" },
      { src: "/images/projects/general-pants-2.jpg", alt: "General Pants Co. Kotara store trading after the refresh" },
    ],
  },
  {
    code: "C.06",
    client: "TOLL",
    title: "Forklift Recharge Station",
    text: "Clients regularly come to TFG for bespoke engineering solutions. For Toll, we designed, manufactured and installed a forklift recharge station barrier with walkway protection.",
    images: [
      { src: "/images/projects/toll-recharge-1.jpg", alt: "Galvanised barrier and walkway protection along forklift charging stations at Toll" },
      { src: "/images/projects/toll-recharge-2.jpg", alt: "Steel guardrail protecting forklift battery chargers" },
    ],
  },
  {
    code: "C.07",
    client: "TRADEFLEX · TOLL WAREHOUSE",
    title: "Warehouse & Office De-fit",
    text: "TFG worked to a very tight timeline to complete this de-fit for a TOLL warehouse. Works included painting approximately 200m² of office and amenities space, ceiling tile replacements, carpet replacement, steam cleaning, and a strip, polish and reseal of the floors, plus a full exterior high-pressure clean and scrub, gutter clean and rubbish removal. Outside, we upgraded the gardens with rejuvenated vegetation, repaired damaged fencing, metal wall cladding and façade, roller doors, and refreshed all bollards.",
    images: [
      { src: "/images/projects/tradeflex-1.jpg", alt: "Toll warehouse full of stock before the de-fit" },
      { src: "/images/projects/tradeflex-2.jpg", alt: "Office and amenities space at the Toll facility" },
      { src: "/images/projects/tradeflex-3.jpg", alt: "Empty, cleaned warehouse floor after the de-fit" },
    ],
  },
];

const STATS = [
  { value: "80+", label: "COLES ONLINE SITES DELIVERED NATIONALLY" },
  { value: "30", label: "BAKERY UPGRADES COMPLETED IN SUCCESSION" },
  { value: "5", label: "NIGHTS TO REFRESH GENERAL PANTS KOTARA" },
];

// Scope drawn from the Coles Online and Toll project write-ups.
const CAPABILITIES = [
  "Site audits & recommendations",
  "Authority approvals & certifications",
  "Dock installations",
  "Canopy extensions",
  "Walls, doorways & hi-impact doors",
  "Ceramic wall tiling",
  "Signage & fixtures",
  "Demolition",
  "Scissor lift pits & civil works",
  "Line marking",
  "Electrical & data",
  "Joinery manufacture & install",
  "Vinyl & epoxy flooring",
  "Barriers & walkway protection",
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

      <main id="main">
        <PageHero
          title={
            <>
              SHOPFITTING &amp;
              <br />
              <em>CONSTRUCTION.</em>
            </>
          }
          lead="Fit-outs, refreshes and de-fits delivered after hours and on tight timelines — with sites ready for trade the next morning."
        />

        {/* INTRO */}
        <Section>
          <Reveal>
            <SectionHeader
              eyebrow="HOW WE WORK"
              title={
                <>
                  Built Around Your <em>Trading Hours</em>
                </>
              }
              lead="From fixture upgrades to full store refreshes and warehouse de-fits, TFG mobilises overnight and on short notice, coordinating every trade so the job gets done without a single day of trade lost."
            />
          </Reveal>

          <StatRow items={STATS} />

          <Reveal className="sf-capabilities">
            <p className="eyebrow">ONE-STOP SCOPE</p>

            <ul>
              {CAPABILITIES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </Section>

        {/* RECENT WORK */}
        <Section tone="paper-2">
          <Reveal>
            <SectionHeader
              eyebrow="PROJECT EXPERIENCE"
              title={
                <>
                  Recent <em>Work</em>
                </>
              }
            />
          </Reveal>

          <div className="sf-cases">
            {CASES.map((item) => (
              <Reveal as="article" className="sf-case" key={item.code}>
                <span className="sf-case-code">{item.code}</span>

                <div className="sf-case-body">
                  <p className="sf-case-client">{item.client}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <div className="sf-case-gallery">
                    {item.images.map((image) => (
                      <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* WHY TFG */}
        <Section tone="ink">
          <Reveal>
            <SectionHeader
              tone="dark"
              eyebrow="WHY TFG"
              title={
                <>
                  Why Choose <em>Total Facility Group</em>
                </>
              }
            />

            <FeatureList items={REASONS} columns={2} tone="dark" />
          </Reveal>
        </Section>

        <CtaBand
          title={
            <>
              NEED A FIT-OUT DONE <em>OVERNIGHT?</em>
            </>
          }
          text="Talk to us about a fit-out, refresh or de-fit built around your trading hours."
        />
      </main>

      <Footer />
    </>
  );
}

export default Shopfitting;

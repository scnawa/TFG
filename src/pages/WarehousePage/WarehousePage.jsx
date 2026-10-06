import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/ui/Button";
import CardGrid from "../../components/ui/CardGrid";
import CtaBand from "../../components/ui/CtaBand";
import FeatureList from "../../components/ui/FeatureList";
import FeatureSplit from "../../components/ui/FeatureSplit";
import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import Section from "../../components/ui/Section";
import SectionHeader from "../../components/ui/SectionHeader";

const CLEANING_POINTS = [
  {
    title: "Floor cleaning & sealing",
    text: "Scrubbing, strip & seal and cutbacks that protect floors from forklift and pallet traffic.",
  },
  {
    title: "Racking & shelving",
    text: "Dust, debris and build-up removed from racking, shelving and high-level storage.",
  },
  {
    title: "Loading docks & bays",
    text: "Keeping dock areas, bays and hardstand clean, clear and hazard-free.",
  },
  {
    title: "Waste & debris removal",
    text: "Regular removal of packaging waste, strapping and general site debris.",
  },
  {
    title: "High-level cleaning",
    text: "Roof trusses, beams and overhead areas cleaned safely at height.",
  },
  {
    title: "Preventative maintenance",
    text: "Scheduled checks and minor repairs that catch issues before they cause downtime.",
  },
];

const BATTERY_POINTS = [
  {
    title: "Heavy-duty capacity",
    text: "Built to handle industrial forklift batteries weighing over 3 tonnes.",
  },
  {
    title: "Narrow-aisle design",
    text: "A compact footprint suited to tight warehouse aisles and racking layouts.",
  },
  {
    title: "Powered extraction",
    text: "Motorised rollers and magnetic extraction for smooth, controlled battery transfers.",
  },
  {
    title: "Built-in safety",
    text: "Operator-present floor pedal and safety interlocks protect your team on every change.",
  },
  {
    title: "AC or DC power",
    text: "Flexible operation to suit your site's existing power setup.",
  },
  {
    title: "Less downtime",
    text: "Faster changes mean more forklifts on the floor across every shift.",
  },
];

const REASONS = [
  ["One team, both jobs", "cleaning, maintenance and battery exchange coordinated under one provider."],
  ["Scheduled around you", "work planned around picking, packing and despatch so operations don't stop."],
  ["Licensed & experienced", "technicians trained on warehouse sites and industrial equipment."],
  ["Part of TFG", "backed by a team already handling security, pest control and facility services."],
  ["First time, every time", "we show up, cover the job properly and keep things moving."],
];

function Warehouse() {
  return (
    <>
      <Navbar />

      <main id="main">
        <PageHero
          title={
            <>
              WAREHOUSE SERVICES,
              <br />
              KEPT <em>MOVING.</em>
            </>
          }
          lead="From floor to fleet — Total Facility Group keeps warehouses and distribution centres clean, well maintained and running, with Battery Bull forklift battery exchange to keep your fleet moving too."
        />

        {/* CLEANING & MAINTENANCE */}
        <Section>
          <FeatureSplit
            media={
              <img
                src="/images/warehouse cleaning.jfif"
                alt="Clean warehouse interior with racking and loading area"
              />
            }
            eyebrow="CLEANING & MAINTENANCE"
            title={
              <>
                Warehouses That Stay <em>Work-Ready</em>
              </>
            }
          >
            <p>
              Warehouse floors, racking and loading areas take a daily
              beating from forklifts, pallets and stock movement. Our
              cleaning and maintenance teams keep facilities safe, compliant
              and presentable — from routine floor care to scheduled
              maintenance that stops small issues becoming costly downtime.
            </p>

            <p>
              We work around your operating hours and despatch schedules, so
              cleaning and maintenance never gets in the way of picking,
              packing and despatch.
            </p>
          </FeatureSplit>
        </Section>

        <Section tone="paper-2">
          <Reveal>
            <SectionHeader
              eyebrow="WHAT WE COVER"
              title={
                <>
                  Cleaning &amp; <em>Maintenance</em>
                </>
              }
            />
          </Reveal>

          <CardGrid items={CLEANING_POINTS} numbered />
        </Section>

        {/* BATTERY BULL */}
        <Section>
          <FeatureSplit
            reverse
            media={
              <iframe
                src="https://www.youtube.com/embed/hKZb7Rk81oM"
                title="Battery Bull forklift battery exchange"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            }
            eyebrow="BATTERY BULL"
            title={
              <>
                Forklift Battery Changes, <em>Cut in Half</em>
              </>
            }
            action={
              <Button to="/battery-bull" variant="outline" arrow>
                Learn more about Battery Bull
              </Button>
            }
          >
            <p>
              For sites running multiple shifts, changing forklift
              batteries manually costs time and puts operators at risk.
              Battery Bull is our man-aboard battery exchange system,
              purpose-built to pull and replace batteries quickly, safely
              and with minimal disruption to your operation.
            </p>

            <p>
              Converting from a manual, pallet-jack or narrow-aisle changer
              to Battery Bull can cut battery change times in half —
              keeping your fleet on the floor and your operation moving.
            </p>
          </FeatureSplit>
        </Section>

        <Section tone="paper-2">
          <Reveal>
            <SectionHeader
              eyebrow="WHY BATTERY BULL"
              title={
                <>
                  Built for <em>Fleet Operations</em>
                </>
              }
            />
          </Reveal>

          <CardGrid items={BATTERY_POINTS} numbered />
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
              KEEP YOUR WAREHOUSE <em>MOVING.</em>
            </>
          }
          text="Talk to us about a site assessment and a warehouse cleaning, maintenance or Battery Bull plan built around your operation."
        />
      </main>

      <Footer />
    </>
  );
}

export default Warehouse;

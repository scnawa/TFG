import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardGrid from "../../components/ui/CardGrid";
import CtaBand from "../../components/ui/CtaBand";
import FeatureList from "../../components/ui/FeatureList";
import FeatureSplit from "../../components/ui/FeatureSplit";
import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import Section from "../../components/ui/Section";
import SectionHeader from "../../components/ui/SectionHeader";

const PLUMBING_POINTS = [
  {
    title: "Planned maintenance",
    text: "Scheduled servicing of taps, cisterns, valves and fixtures that catches leaks before they become call-outs.",
  },
  {
    title: "Blocked drains & sewer",
    text: "Drain camera inspections, jet blasting and clearing of kitchen, amenity and shared lines.",
  },
  {
    title: "Hot water systems",
    text: "Repair, replacement and servicing of gas, electric, heat pump and continuous flow units.",
  },
  {
    title: "Backflow & TMV testing",
    text: "Annual testing, tagging and servicing of backflow devices and thermostatic mixing valves.",
  },
  {
    title: "Grease traps & trade waste",
    text: "Pipework and drainage around grease arrestors kept clear and compliant for commercial kitchens.",
  },
  {
    title: "Leak detection & repairs",
    text: "Locating hidden leaks, burst pipes and pressure issues, then repairing them with minimal disruption.",
  },
];

const ELECTRICAL_POINTS = [
  {
    title: "Maintenance & repairs",
    text: "Fault finding, repairs and scheduled checks that keep power, lighting and equipment running.",
  },
  {
    title: "Test & tag",
    text: "Testing and tagging of portable appliances and leads, with records kept for your compliance file.",
  },
  {
    title: "Emergency & exit lighting",
    text: "Routine testing, reporting and replacement of emergency and exit lighting to Australian Standards.",
  },
  {
    title: "Switchboards & RCDs",
    text: "Switchboard upgrades, circuit protection and RCD testing for safer, more reliable supply.",
  },
  {
    title: "Lighting upgrades",
    text: "LED retrofits and new lighting for offices, retail, warehouses and car parks that cut running costs.",
  },
  {
    title: "Fit-out electrical",
    text: "Power, data and lighting for fit-outs and refurbishments, delivered to program alongside the builder.",
  },
];

const REASONS = [
  ["One provider, both trades", "plumbing and electrical coordinated under one plan and one point of contact."],
  ["Work around your trade", "early starts and after-hours visits when a site can't close."],
  ["Licensed tradespeople", "every job done or supervised by qualified, licensed trades."],
  ["Clear paperwork", "photos, itemised invoices and compliance records sent with every job."],
  ["Part of TFG", "backed by a team already handling cleaning, security and fit-out."],
  ["Planned, not reactive", "maintenance schedules that cut downtime and avoid costly emergencies."],
];

function FacilityManagement() {
  return (
    <>
      <Navbar />

      <main id="main">
        <PageHero
          title={
            <>
              FACILITY MANAGEMENT,
              <br />
              <em>SORTED.</em>
            </>
          }
          lead="Plumbing and electrical services that keep your building safe, compliant and running — from planned maintenance to fast repairs, all through one team."
        />

        {/* PLUMBING */}
        <Section>
          <FeatureSplit
            media={
              <img
                src="/images/Plumbing.jfif"
                alt="Plumber carrying out commercial plumbing work"
              />
            }
            eyebrow="PLUMBING"
            title={
              <>
                Commercial Plumbing, <em>Handled</em>
              </>
            }
          >
            <p>
              A blocked drain or failed hot water system in a commercial
              building costs more than the repair — it costs trading time,
              staff hours and sometimes compliance. Our plumbing team looks
              after offices, retail, hospitality, childcare and industrial
              sites with planned maintenance and prompt repairs.
            </p>

            <p>
              We build a maintenance schedule around your site, keep your
              compliance records current and work around your opening hours
              so the plumbing never gets in the way of business.
            </p>
          </FeatureSplit>
        </Section>

        <Section tone="paper-2">
          <Reveal>
            <SectionHeader
              eyebrow="WHAT WE COVER"
              title={
                <>
                  Plumbing <em>Services</em>
                </>
              }
            />
          </Reveal>

          <CardGrid items={PLUMBING_POINTS} numbered />
        </Section>

        {/* ELECTRICAL */}
        <Section>
          <FeatureSplit
            reverse
            media={
              <img
                src="/images/Electrician.jfif"
                alt="Electrician working on a commercial electrical installation"
              />
            }
            eyebrow="ELECTRICAL"
            title={
              <>
                Power You Can <em>Rely On</em>
              </>
            }
          >
            <p>
              Lighting, power and safety systems are the backbone of any
              commercial building. Our electricians handle maintenance,
              fault finding, compliance testing and upgrades across
              offices, shopping centres, warehouses and industrial sites.
            </p>

            <p>
              From test and tag to switchboard upgrades and LED retrofits,
              we keep your electrical systems safe, compliant and efficient
              — with the reporting your facilities team needs.
            </p>
          </FeatureSplit>
        </Section>

        <Section tone="paper-2">
          <Reveal>
            <SectionHeader
              eyebrow="WHAT WE COVER"
              title={
                <>
                  Electrical <em>Services</em>
                </>
              }
            />
          </Reveal>

          <CardGrid items={ELECTRICAL_POINTS} numbered />
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
              ONE CALL. <em>SITE SORTED.</em>
            </>
          }
          text="Talk to us about a maintenance plan for your plumbing and electrical — or get a repair booked in today."
        />
      </main>

      <Footer />
    </>
  );
}

export default FacilityManagement;

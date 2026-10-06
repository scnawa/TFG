import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Accordion from "../../components/ui/Accordion";
import Button from "../../components/ui/Button";
import CardGrid from "../../components/ui/CardGrid";
import CtaBand from "../../components/ui/CtaBand";
import FeatureSplit from "../../components/ui/FeatureSplit";
import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import Section from "../../components/ui/Section";
import SectionHeader from "../../components/ui/SectionHeader";
import Steps from "../../components/ui/Steps";
import "./PestControlPage.css";

const HIGHLIGHTS = [
  "Our technicians identify the root cause of pest activity, treat affected areas and give guidance to help prevent future problems.",
  "We use Integrated Pest Management (IPM) — a proactive approach that focuses on long-term prevention through smart, targeted treatments.",
  "We know discretion matters. Treatments are planned to minimise disruption and protect your professional image.",
];

const PESTS = [
  {
    title: "Rodents",
    text: "Rats and mice damage stock, wiring and packaging, and put food safety at risk.",
  },
  {
    title: "Cockroaches",
    text: "Fast-breeding and hard to spot until numbers build — a serious hygiene and reputation risk.",
  },
  {
    title: "Ants",
    text: "Trailing ants contaminate food areas and can nest in walls, floors and voids.",
  },
  {
    title: "Flies & Flying Insects",
    text: "Flies and other flying insects spread contamination and put off customers.",
  },
  {
    title: "Spiders",
    text: "Webs and nests in ceilings, eaves and storage areas are unsightly and hard to keep on top of.",
  },
  {
    title: "Stored-Product Pests",
    text: "Beetles, weevils and moths that infest dry goods in warehouses and stockrooms.",
  },
];

const INDUSTRIES = [
  ["Retail & Supermarkets", "Protect customers, stock and reputation."],
  ["Food & Hospitality", "Hygiene that keeps customers coming back."],
  ["Warehouses & Distribution", "Secure your supply chain from stock damage."],
  ["Commercial Offices", "Comfortable, pest-free workplaces."],
  ["Property Management", "Pest-free properties, happy tenants."],
  ["Education & Government", "Safe spaces for work and learning."],
];

const STEPS = [
  [
    "Assess",
    "We inspect the interior and exterior of your premises to identify pests, activity and the conditions attracting them.",
  ],
  [
    "Plan & Treat",
    "Based on our findings, we prepare a tailored plan, treat existing issues and protect against future ones.",
  ],
  [
    "Advise",
    "We provide corrective actions and guidance so your team can spot the signs of a pest problem early.",
  ],
  [
    "Monitor",
    "We put monitoring in place to check treatment results and alert us to any change in activity.",
  ],
];

const METHODS = [
  {
    q: "Exclusion",
    a: "Sealing gaps, entry points and harbourage areas so pests can't get in or settle in the first place.",
  },
  {
    q: "Baiting & Trapping",
    a: "Targeted bait stations and traps placed where activity is found, particularly for rodents and ants.",
  },
  {
    q: "Insecticide Treatments",
    a: "Precise treatments applied to the areas where insects live and travel, chosen to suit the site and pest.",
  },
  {
    q: "Insect Light Traps",
    a: "Units that capture flying insects in food and customer areas without sprays.",
  },
  {
    q: "Sanitation Audits",
    a: "A review of cleanliness, storage and waste practices that may be feeding a pest problem.",
  },
  {
    q: "Ongoing Monitoring",
    a: "Scheduled checks and activity records so changes are picked up early.",
  },
];

const FAQS = [
  {
    q: "How much does commercial pest control cost?",
    a: "It depends on the size of the premises, the pests involved and how often service is needed. Every business is different, so we tailor treatments and provide a quote after assessing your site.",
  },
  {
    q: "Will treatments disrupt my business?",
    a: "We plan treatments around your trading hours and operations, and can work after hours to keep disruption to a minimum.",
  },
  {
    q: "What can I expect during an inspection?",
    a: "A technician will inspect the inside and outside of the premises, look for signs of activity and conducive conditions, then explain what they found and what we recommend.",
  },
  {
    q: "Can you provide regular ongoing service?",
    a: "Yes. Many sites benefit from scheduled visits with monitoring so problems are caught before they grow.",
  },
  {
    q: "How do I get a quote?",
    a: "Get in touch through our contact page and we'll arrange an inspection and put together a tailored plan.",
  },
];

function PestControl() {
  return (
    <>
      <Navbar />

      <main id="main">
        <PageHero
          title={
            <>
              STOP PESTS
              <br />
              BEFORE THEY <em>START.</em>
            </>
          }
          lead="Professional pest management keeping workplaces, properties and facilities safe, hygienic and pest-free."
        />

        {/* WHAT IS PEST CONTROL */}
        <Section>
          <Reveal>
            <SectionHeader
              eyebrow="PEST MANAGEMENT"
              title={
                <>
                  Does Your Business Need <em>Pest Control?</em>
                </>
              }
              lead="You deserve more than set schedules and standard treatments. Our pest control services identify, manage and prevent pest problems across commercial and residential environments — we don't just treat pest problems, we help stop them before they start."
            />

            <figure className="pest-diagram">
              <img
                src="/images/pest control diagram.jfif"
                alt="Warning signs for rodents, cockroaches and ants"
              />
            </figure>
          </Reveal>

          <ul className="pest-checks">
            {HIGHLIGHTS.map((text, i) => (
              <Reveal as="li" key={text} delay={i * 80}>
                {text}
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* PESTS WE MANAGE */}
        <Section tone="paper-2">
          <Reveal>
            <SectionHeader
              eyebrow="TARGET PESTS"
              title={
                <>
                  Pests We <em>Manage</em>
                </>
              }
            />
          </Reveal>

          <CardGrid items={PESTS} numbered />
        </Section>

        {/* INTERIOR TREATMENTS */}
        <Section>
          <FeatureSplit
            reverse
            media={
              <img
                src="/images/pest control.jfif"
                alt="Technician in protective gear treating a floor for cockroaches"
              />
            }
            eyebrow="INTERIOR TREATMENTS"
            title="Targeted Treatments Inside Your Site"
            action={
              <Button to="/contact-page" arrow>
                Book an inspection
              </Button>
            }
          >
            <p>
              Cockroaches and other crawling insects thrive in kitchens,
              storerooms and back-of-house areas. Our technicians work in
              protective equipment to treat floors, skirtings, voids and
              hidden harbourage points — using targeted products where
              the activity is, not blanket sprays.
            </p>

            <p>
              Work is planned around your trading hours, so your team and
              customers can carry on as normal.
            </p>
          </FeatureSplit>
        </Section>

        {/* INDUSTRIES */}
        <Section tone="paper-2">
          <Reveal>
            <SectionHeader
              eyebrow="WHO WE HELP"
              title={
                <>
                  Industries We <em>Support</em>
                </>
              }
            />
          </Reveal>

          <CardGrid items={INDUSTRIES.map(([title, text]) => ({ title, text }))} />
        </Section>

        {/* PROCESS */}
        <Section>
          <Reveal>
            <SectionHeader
              eyebrow="OUR PROCESS"
              title={
                <>
                  How We Protect Your Business <em>From Pests</em>
                </>
              }
            />
          </Reveal>

          <Steps items={STEPS} />
        </Section>

        {/* METHODS */}
        <Section tone="paper-2" width="narrow" spacing="tight">
          <Reveal>
            <SectionHeader
              eyebrow="HOW WE TREAT"
              title={
                <>
                  Our Treatment <em>Methods</em>
                </>
              }
            />

            <Accordion items={METHODS} />
          </Reveal>
        </Section>

        {/* FAQ */}
        <Section width="narrow">
          <Reveal>
            <SectionHeader
              eyebrow="FAQ"
              title={
                <>
                  Frequently Asked <em>Questions</em>
                </>
              }
            />

            <Accordion items={FAQS} />
          </Reveal>
        </Section>

        <CtaBand
          title={
            <>
              PESTS DON&apos;T <em>WAIT.</em>
            </>
          }
          text="Talk to us about an inspection and a pest management plan built around your premises."
        />
      </main>

      <Footer />
    </>
  );
}

export default PestControl;

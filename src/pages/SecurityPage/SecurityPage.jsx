import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Accordion from "../../components/ui/Accordion";
import CardGrid from "../../components/ui/CardGrid";
import CtaBand from "../../components/ui/CtaBand";
import FeatureList from "../../components/ui/FeatureList";
import FeatureSplit from "../../components/ui/FeatureSplit";
import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import Section from "../../components/ui/Section";
import SectionHeader from "../../components/ui/SectionHeader";
import Steps from "../../components/ui/Steps";
import "./SecurityPage.css";

const DUTIES = [
  {
    title: "Access control",
    text: "Checking ID, logging visitors and contractors, and restricting entry to authorised personnel.",
  },
  {
    title: "Patrols",
    text: "Scheduled walks and drive-bys covering perimeters, entry points, car parks and loading areas.",
  },
  {
    title: "Asset protection",
    text: "Watching over stock, plant, equipment and materials to guard against theft and damage.",
  },
  {
    title: "Incident reporting",
    text: "Documenting suspicious activity, damage or breaches with clear, timely written reports.",
  },
  {
    title: "Alarm response",
    text: "Attending triggered alarms, inspecting the site and clearing it once it is confirmed safe.",
  },
  {
    title: "Safety compliance",
    text: "Working to site induction requirements and safety procedures on every job.",
  },
];

const SERVICES = [
  {
    name: "Static guards",
    suited: "Sites needing a continuous on-site presence and immediate incident response.",
  },
  {
    name: "Mobile patrols",
    suited: "Sites needing scheduled lock-up checks and visible perimeter coverage.",
  },
  {
    name: "Gatehouse security",
    suited: "Sites with a controlled entry point requiring visitor and delivery management.",
  },
  {
    name: "Alarm monitoring & response",
    suited: "Sites with an existing alarm system needing fast, verified attendance.",
  },
  {
    name: "Electronic security (CCTV)",
    suited: "Sites needing remote visibility over storage areas, compounds and access points.",
  },
  {
    name: "Guards + patrol combination",
    suited: "Busy sites — for example a guard overnight on weekdays and patrols on weekends.",
  },
];

const RISKS = [
  ["Theft of stock and equipment", "high-value, portable items are easy to resell."],
  ["Unauthorised access", "creates safety, liability and insurance risk."],
  ["Vandalism", "graffiti, damaged fencing and interference with works."],
  ["After-hours intrusion", "risk rises sharply once staff leave, especially on weekends."],
  ["Perimeter weak points", "unlit areas, loading zones and temporary fencing."],
  ["Unmonitored areas", "blind spots that go unwatched between patrols."],
];

const STEPS = [
  ["Site assessment", "review layout, access points, lighting, storage areas and risk factors."],
  ["Security plan", "recommend guards, patrols, alarm response or CCTV to suit your site and budget."],
  ["Guard briefing", "every guard is briefed on site instructions before starting."],
  ["Deployment", "coverage begins on the agreed schedule, with logs and reporting from day one."],
  ["Ongoing reporting", "incident reports and patrol logs are provided throughout."],
  ["Plan review", "coverage is adjusted as your site and needs change."],
];

const REASONS = [
  ["Licensed personnel", "guards hold the licences required to work on your site."],
  ["Coordinated coverage", "guards, patrols and CCTV under one plan and one provider."],
  ["Fast mobilisation", "briefed, on site and accountable from the first patrol."],
  ["Part of TFG", "one team also handling cleaning, maintenance and facility services."],
  ["First time, every time", "we show up, cover the job properly and keep things moving."],
];

const FAQS = [
  {
    q: "Why do sites need security?",
    a: "Unattended sites, stores and warehouses are frequent targets for theft, vandalism and trespass — particularly overnight and on weekends. Security reduces that risk and protects your people, stock and insurance position.",
  },
  {
    q: "What's the difference between static guards and mobile patrols?",
    a: "Static guards stay on site for continuous presence and immediate response. Mobile patrols visit one or more sites on a schedule, checking perimeters, doors and gates, and responding to alarms.",
  },
  {
    q: "Can your team respond to alarms?",
    a: "Yes. We can attend triggered alarms, inspect the premises and confirm the site is safe before it is cleared.",
  },
  {
    q: "Do you provide CCTV?",
    a: "Yes. Electronic security can be combined with guards and patrols so you have remote visibility over key areas as well as people on the ground.",
  },
  {
    q: "Do you cover both commercial and industrial sites?",
    a: "Yes. We tailor coverage to the site — retail, warehouse, commercial buildings and more.",
  },
  {
    q: "How do I get a quote?",
    a: "Get in touch through our contact page and we'll arrange a site assessment and put together a tailored plan.",
  },
];

function Security() {
  return (
    <>
      <Navbar />

      <main id="main">
        <PageHero
          title={
            <>
              SECURITY,
              <br />
              BUILT TO <em>WATCH.</em>
            </>
          }
          lead="Total Facility Group brings the same standard to security that we bring to every site we touch — show up, cover the job properly, and keep things moving."
        />

        {/* INTRO */}
        <Section>
          <FeatureSplit
            media={<img src="/images/cctv.jfif" alt="CCTV security camera" />}
            eyebrow="TOP-NOTCH SECURITY"
            title={
              <>
                Licensed Guards, Patrols <em>&amp;</em> CCTV
              </>
            }
          >
            <p>
              Total Facility Group delivers top-notch security services you
              can rely on. Our licensed guards protect people, property and
              operations around the clock — mobilised fast, briefed
              properly, and accountable from the first patrol to the last.
            </p>

            <p>
              From CCTV monitoring to on-site guards and alarm response, we
              keep your premises protected with fast response, clear
              reporting and a standard we hold on every site.
            </p>
          </FeatureSplit>
        </Section>

        {/* DUTIES */}
        <Section tone="paper-2">
          <Reveal>
            <SectionHeader
              eyebrow="WHAT WE DO"
              title={
                <>
                  What Does a <em>Security Officer</em> Do?
                </>
              }
              lead="Our officers control access, patrol the site, respond to alarms and report incidents — protecting your people, property and operations, especially when the site is unattended."
            />
          </Reveal>

          <CardGrid items={DUTIES} numbered />
        </Section>

        {/* SERVICES TABLE */}
        <Section width="narrow">
          <Reveal>
            <SectionHeader
              align="left"
              eyebrow="SERVICES"
              title={
                <>
                  Our Security <em>Services</em>
                </>
              }
              lead="We combine physical guards, mobile patrols and electronic monitoring into one coordinated plan — so you're not managing multiple providers for one site."
            />

            <table className="sec-table">
              <thead>
                <tr>
                  <th scope="col">SERVICE</th>
                  <th scope="col">BEST SUITED FOR</th>
                </tr>
              </thead>

              <tbody>
                {SERVICES.map((service) => (
                  <tr key={service.name}>
                    <th scope="row">{service.name}</th>
                    <td>{service.suited}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="section-note">
              No matter the size of the site, we tailor coverage to suit it.
            </p>
          </Reveal>
        </Section>

        {/* RISKS */}
        <Section tone="ink">
          <Reveal>
            <SectionHeader
              tone="dark"
              eyebrow="KNOW THE RISKS"
              title={
                <>
                  Common <em>Security Risks</em>
                </>
              }
              lead="Commercial sites are a frequent target because they hold valuable stock and equipment and are regularly unattended after hours."
            />

            <FeatureList items={RISKS} marker="number" columns={2} tone="dark" />
          </Reveal>
        </Section>

        {/* PROCESS */}
        <Section>
          <Reveal>
            <SectionHeader
              eyebrow="OUR PROCESS"
              title={
                <>
                  How We <em>Secure Your Site</em>
                </>
              }
            />
          </Reveal>

          <Steps items={STEPS} />
        </Section>

        {/* WHY TFG */}
        <Section tone="paper-2">
          <Reveal>
            <SectionHeader
              eyebrow="WHY TFG"
              title={
                <>
                  Why Choose <em>Total Facility Group</em>
                </>
              }
            />

            <FeatureList items={REASONS} columns={2} />
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
              NEED SECURITY THAT <em>SHOWS UP?</em>
            </>
          }
          text="Talk to us about a site assessment and a security plan built around your premises."
        />
      </main>

      <Footer />
    </>
  );
}

export default Security;

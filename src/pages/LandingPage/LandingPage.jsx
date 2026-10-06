import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';
import CardGrid from '../../components/ui/CardGrid';
import Reveal from '../../components/ui/Reveal';
import Section from '../../components/ui/Section';
import SectionHeader from '../../components/ui/SectionHeader';
import StatRow from '../../components/ui/StatRow';
import './LandingPage.css';

const CLIENT_LOGOS = [
  { name: 'Coles', src: '/images/Coles logo.png' },
  { name: 'City FM', src: '/images/CityFm Logo.png' },
  { name: 'General Pants Co', src: '/images/General pants co logo.jpg' },
  { name: 'Tradeflex', src: '/images/Tradeflex logo.gif' },
  { name: 'Liquorland', src: '/images/Liquorland Logo.png' },
  { name: 'HDS', src: '/images/HDS Logo.webp' },
];

const STATS = [
  { value: '30+', label: 'YEARS OF INDUSTRY EXPERIENCE' },
  { value: '80+', label: 'COLES ONLINE SITES DELIVERED NATIONALLY' },
  { value: '48H', label: 'CREWS ON SITE FOR URGENT WORKS' },
];

const SERVICES = [
  {
    code: 'A.01',
    title: 'Shop Fit-Outs',
    image: '/images/Coles1.png',
    alt: 'Shop fit-out',
    text: 'New store builds and rapid shop fitting for national retail rollouts.',
  },
  {
    code: 'A.02',
    title: 'Store Refreshes',
    image: '/images/ColesClickandCollect.png',
    alt: 'Store refresh',
    text: 'Refits and refreshes completed after hours, with zero disruption to trade.',
  },
  {
    code: 'A.03',
    title: 'Signage & Fixtures',
    image: '/images/ColesSign.png',
    alt: 'Signage and fixtures',
    text: 'Supply and install of signage, joinery and fixed fit-out elements.',
  },
  {
    code: 'A.04',
    title: 'Rapid Mobilisation',
    image: '/images/Rapid.png',
    alt: 'Rapid mobilisation',
    text: 'Crews on site within 48 hours for urgent or unplanned works.',
  },
  {
    code: 'A.05',
    title: 'Compliance & Safety',
    image: '/images/Safety.png',
    alt: 'Compliance and safety',
    text: 'Site works delivered to Tier 1 safety and governance standards.',
  },
  {
    code: 'A.06',
    title: 'National Roll-Out',
    image: '/images/National.png',
    alt: 'National roll-out',
    text: 'Coordinated delivery across multiple sites under one program.',
  },
];

function LandingPage() {
  return (
    <div className="page">
      <Navbar />

      <main id="main">
        {/* HERO */}
        <section className="tfg-hero">
          <div className="content-container">
            <p className="eyebrow hero-in" style={{ '--i': 0 }}>
              COMMERCIAL FIT-OUT &amp; BUILDING SERVICES
            </p>

            <h1 className="hero-in" style={{ '--i': 1 }}>
              COMMERCIAL
              <br />
              FIT-OUTS,
              <br />
              BUILT TO <em>SCHEDULE.</em>
            </h1>

            <p className="sub hero-in" style={{ '--i': 2 }}>
              Store fit-outs, refreshes and building works for national
              retail and commercial clients — mobilised fast, managed end
              to end.
            </p>

            <div className="dimline hero-in" style={{ '--i': 3 }} aria-hidden="true">
              <div className="tick"></div>
              <div className="line"></div>

              <div className="label">
                NATIONWIDE&nbsp; · &nbsp;30 YEARS ON SITE
              </div>

              <div className="line"></div>
              <div className="tick"></div>
            </div>

            <div className="hero-actions hero-in" style={{ '--i': 4 }}>
              <Button to="/contact-page" tilt>
                BOOK A CONSULTATION
              </Button>

              <Button href="#services" variant="outline" tone="dark" arrow>
                VIEW SCOPE OF WORKS
              </Button>
            </div>

            <div className="titleblock" aria-hidden="true">
              <div className="row">
                <span>SHEET</span>
                <span>FO-01</span>
              </div>

              <div className="row">
                <span>SCALE</span>
                <span>NTS</span>
              </div>

              <div className="row">
                <span>REV</span>
                <span>2026.03</span>
              </div>
            </div>
          </div>
        </section>

        {/* LOGO SLIDER */}
        <section className="logo-slider" aria-label="Our clients">
          <p className="logo-slider-label">TRUSTED BY NATIONAL RETAIL &amp; COMMERCIAL CLIENTS</p>

          <div className="logo-slider-window">
            <div className="logo-track">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
                <div
                  className="logo-item"
                  key={`${logo.name}-${i}`}
                  aria-hidden={i >= CLIENT_LOGOS.length}
                >
                  <img src={logo.src} alt={i < CLIENT_LOGOS.length ? logo.name : ''} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF POINTS */}
        <Section spacing="tight">
          <StatRow items={STATS} />
        </Section>

        {/* SERVICES */}
        <Section id="services" tone="paper-2">
          <Reveal>
            <SectionHeader
              eyebrow="SCOPE OF WORKS"
              title="One site contact. Every trade covered."
            />
          </Reveal>

          <CardGrid items={SERVICES} align="center" />

          <Reveal className="section-actions">
            <Button to="/shopfitting-construction" variant="outline" arrow>
              SHOPFITTING &amp; CONSTRUCTION
            </Button>
          </Reveal>
        </Section>

        {/* CASE STUDY */}
        <Section tone="ink" id="clients">
          <Reveal className="landing-case">
            <SectionHeader
              tone="dark"
              eyebrow="PROJECT EXPERIENCE"
              title="Battery Bull works across NSW distribution centres."
              lead="TFG has supported Battery Bull with coordinated fit-out and building works across distribution centres throughout New South Wales, delivering practical site upgrades while coordinating trades, site access and works around operational requirements."
            />

            <Button to="/contact-page">DISCUSS YOUR PROJECT</Button>
          </Reveal>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;

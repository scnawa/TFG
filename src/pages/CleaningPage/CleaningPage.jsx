import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CardGrid from '../../components/ui/CardGrid';
import CtaBand from '../../components/ui/CtaBand';
import FeatureList from '../../components/ui/FeatureList';
import FeatureSplit from '../../components/ui/FeatureSplit';
import PageHero from '../../components/ui/PageHero';
import Reveal from '../../components/ui/Reveal';
import Section from '../../components/ui/Section';
import SectionHeader from '../../components/ui/SectionHeader';
import StatPanel from '../../components/ui/StatPanel';

// Add an image path (e.g. '/images/window-cleaning.jpg') to a service to show a photo.

const CLEANING_SERVICES = [
    {
        title: 'Regular Cleaning',
        text: 'Tailored routine cleaning designed to maintain cleanliness, hygiene and presentation across your site.',
        image: '/images/stock-cleaning.jpg',
    },
    {
        title: 'Washroom Cleaning',
        text: 'Complete washroom cleaning and hygiene management to support health, safety and compliance.',
        image: '/images/Clean Toilet.jpg',
    },
    {
        title: 'Hard Floor Cleaning',
        text: 'Professional hard floor cleaning and maintenance to protect surfaces and enhance appearance.',
        image: '/images/Strip and Seal.jpg',
    },
    {
        title: 'Pressure Cleaning',
        text: 'High-pressure cleaning for car parks, paths and external areas to keep them safe and presentable.',
        image: '/images/Pressure Cleaning.jpg',
    },
    {
        title: 'Window Cleaning',
        text: 'Internal and external window cleaning for a clear, streak-free finish.',
        image: '/images/Window Clean.jpg',
    },
    {
        title: 'Deep Cleaning',
        text: 'Comprehensive deep cleans for periodic maintenance, audits or changeovers.',
        image: '/images/Deep Cleaning.jpg',
    },
];

// What TFG delivers for Coles.
const COLES_SERVICES = [
    ['Strip & seal', 'worn floor finishes taken back to the surface and resealed for a clean, even, protected floor.'],
    ['Cutbacks', 'scheduled cutbacks that restore shine between full strips, with less downtime for the store.'],
    ['Ad hoc works', 'responsive call-outs for one-off and unplanned jobs, so issues are sorted before they affect trade.'],
    ['Shopfitting & refreshes', 'fit-out and refresh works delivered after hours, with stores ready to trade the next morning.'],
];

function CleaningPage() {
    return (
        <>
            <Navbar />

            <main id="main">
                <PageHero
                    eyebrow="OUR SERVICES"
                    title={
                        <>
                            CLEANING.
                            <br />
                            <em>STRIP &amp; SEAL. CUTBACKS.</em>
                        </>
                    }
                    lead="From routine commercial cleaning to floor strip and seal and scheduled cutbacks, we keep your site clean, presentable and well maintained — reliable service you can count on."
                />

                {/* STRIP & SEAL / CUTBACKS */}
                <Section>
                    <FeatureSplit
                        media={
                            <img
                                src="/images/Strip and Seal.jpg"
                                alt="Commercial floor being stripped and sealed"
                            />
                        }
                        eyebrow="FLOOR CARE"
                        title={
                            <>
                                Strip &amp; Seal. <em>Cutbacks.</em>
                            </>
                        }
                    >
                        <p>
                            Over time, foot traffic and trolleys wear down floor
                            finishes. A strip and seal removes the old, worn coating
                            right back to the surface, then applies fresh coats of
                            sealer for a clean, even, protected floor.
                        </p>

                        <p>
                            Between full strips, a cutback removes the scuffed top
                            layer of finish and re-coats it — restoring shine and
                            extending the life of your floor with less downtime.
                        </p>
                    </FeatureSplit>
                </Section>

                {/* SERVICES GRID */}
                <Section tone="paper-2">
                    <Reveal>
                        <SectionHeader
                            eyebrow="WHAT WE OFFER"
                            title={
                                <>
                                    Our Cleaning <em>Services</em>
                                </>
                            }
                        />
                    </Reveal>

                    <CardGrid items={CLEANING_SERVICES} />
                </Section>

                {/* COLES PARTNERSHIP */}
                <Section tone="ink">
                    <div className="section-split">
                        <Reveal>
                            <SectionHeader
                                align="left"
                                tone="dark"
                                eyebrow="COLES PARTNERSHIP"
                                title={
                                    <>
                                        Trusted Partner for <em>Coles</em>
                                    </>
                                }
                                lead="Coles trusts TFG to keep its stores clean, presentable and ready to trade. We bring more than 30 years of industry experience to every store we look after — from floor care through to shopfitting and refreshes."
                            />

                            <FeatureList items={COLES_SERVICES} marker="number" tone="dark" />
                        </Reveal>

                        <Reveal delay={120}>
                            <StatPanel
                                label="TFG / INDUSTRY EXPERIENCE"
                                value="30+"
                                caption="YEARS OF EXPERIENCE"
                            />
                        </Reveal>
                    </div>
                </Section>

                <CtaBand
                    eyebrow="FLOOR CARE & CLEANING"
                    title={
                        <>
                            KEEP YOUR SITE <em>TRADE-READY.</em>
                        </>
                    }
                    text="Talk to us about strip and seal, cutbacks or a regular cleaning schedule built around your trading hours."
                />
            </main>

            <Footer />
        </>
    );
}

export default CleaningPage;

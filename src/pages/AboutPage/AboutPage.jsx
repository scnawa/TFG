import { useState } from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CardGrid from '../../components/ui/CardGrid';
import CtaBand from '../../components/ui/CtaBand';
import FeatureList from '../../components/ui/FeatureList';
import Reveal from '../../components/ui/Reveal';
import Section from '../../components/ui/Section';
import SectionHeader from '../../components/ui/SectionHeader';
import StatPanel from '../../components/ui/StatPanel';
import './AboutPage.css';

const SLIDES = [
    {
        image: '/images/stock-cleaning.jpg',
        label: '01 / WHO WE ARE',
        title: (
            <>
                BUILT ON
                <br />
                <span>EXPERIENCE.</span>
            </>
        ),
        description:
            'Total Facility Group delivers practical commercial fit-out, building and facility solutions.',
    },
    {
        image: '/images/stock-handshake.jpg',
        label: '02 / WHAT WE DO',
        title: (
            <>
                BUILT FOR
                <br />
                <span>DELIVERY.</span>
            </>
        ),
        description:
            'We coordinate people, trades and projects to deliver reliable outcomes.',
    },
    {
        image: '/images/battery-bull.jpg',
        label: '03 / OUR APPROACH',
        title: (
            <>
                ONE TEAM.
                <br />
                <span>ONE STANDARD.</span>
            </>
        ),
        description:
            'Clear communication, practical solutions and dependable project delivery.',
    },
];

const VALUES = [
    {
        code: '01',
        title: 'Reliable',
        text: 'We turn up when we say we will and finish what we start. Consistent communication and dependable delivery from project start to completion.',
    },
    {
        code: '02',
        title: 'Practical',
        text: 'We look for the simplest way to get a good result on site, not the most complicated. Solutions focused on what works best for the site, project and people involved.',
    },
    {
        code: '03',
        title: 'Responsive',
        text: 'Programs shift, stores close early and urgent works land overnight. We adapt quickly and coordinate efficiently when project requirements change.',
    },
    {
        code: '04',
        title: 'Accountable',
        text: 'One team owns the job from the first walk-through to final handover. We take ownership of our work and remain focused on delivering the agreed outcome.',
    },
];

const EXPERIENCE = [
    ['Commercial fit-outs and refurbishments'],
    ['Building repairs and maintenance works'],
    ['Retail and distribution centre projects'],
    ['Multi-site project coordination'],
];

function AboutPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((current) =>
            current === SLIDES.length - 1 ? 0 : current + 1
        );
    };

    const previousSlide = () => {
        setCurrentSlide((current) =>
            current === 0 ? SLIDES.length - 1 : current - 1
        );
    };

    const handleSliderKeyDown = (event) => {
        if (event.key === 'ArrowRight') nextSlide();
        if (event.key === 'ArrowLeft') previousSlide();
    };

    return (
        <>
            <Navbar />

            <main id="main">
                {/* HERO SLIDER */}
                <section
                    className="about-slider"
                    aria-roledescription="carousel"
                    aria-label="About Total Facility Group"
                    onKeyDown={handleSliderKeyDown}
                >
                    <div className="about-slider-track" aria-live="polite">
                        {SLIDES.map((slide, index) => {
                            const active = index === currentSlide;

                            return (
                                <article
                                    key={slide.label}
                                    className={`about-slide ${active ? 'about-slide-active' : ''}`}
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label={`${index + 1} of ${SLIDES.length}`}
                                    aria-hidden={!active}
                                >
                                    <img
                                        src={slide.image}
                                        alt=""
                                        className="about-slide-image"
                                    />

                                    <div className="about-slide-overlay"></div>

                                    <div className="about-slide-content">
                                        <p className="eyebrow">{slide.label}</p>

                                        <h1>{slide.title}</h1>

                                        <p className="about-slide-description">
                                            {slide.description}
                                        </p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <div className="about-slider-controls">
                        <button
                            type="button"
                            className="about-slider-button"
                            onClick={previousSlide}
                            aria-label="Previous slide"
                        >
                            ←
                        </button>

                        <div className="about-slider-dots">
                            {SLIDES.map((slide, index) => (
                                <button
                                    key={slide.label}
                                    type="button"
                                    className={`about-slider-dot ${
                                        index === currentSlide ? 'about-slider-dot-active' : ''
                                    }`}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    aria-current={index === currentSlide}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            className="about-slider-button"
                            onClick={nextSlide}
                            aria-label="Next slide"
                        >
                            →
                        </button>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <Section>
                    <div className="about-intro">
                        <Reveal>
                            <SectionHeader
                                align="left"
                                eyebrow="WHO WE ARE"
                                title={
                                    <>
                                        One team.
                                        <br />
                                        One point of contact.
                                        <br />
                                        <em>Complete delivery.</em>
                                    </>
                                }
                            />
                        </Reveal>

                        <Reveal className="about-intro-copy" delay={120}>
                            <p className="about-intro-lead">
                                Total Facility Group provides practical, reliable
                                solutions across commercial fit-outs, building works
                                and ongoing facility requirements.
                            </p>

                            <p>
                                We work with businesses that need projects delivered
                                efficiently, safely and with minimal disruption. From
                                individual site upgrades to large-scale rollouts, our
                                team coordinates the people, trades and processes
                                required to get the job done.
                            </p>

                            <p>
                                Our project managers have worked in the industry for
                                more than 30 years, serving everyone from Tier 1
                                contracts to independent operators. We operate
                                nationally and can mobilise rapidly for any project,
                                roll-out or unforeseen works.
                            </p>

                            <p>
                                Our approach is simple: clear communication,
                                dependable delivery and a commitment to doing the
                                work properly.
                            </p>

                            <blockquote className="about-mission">
                                <p className="eyebrow">OUR MISSION</p>
                                <p>
                                    On-time delivery of every project, with no
                                    compromise on safety or quality.
                                </p>
                            </blockquote>
                        </Reveal>
                    </div>
                </Section>

                {/* VALUES */}
                <Section tone="paper-2">
                    <Reveal>
                        <SectionHeader
                            eyebrow="HOW WE WORK"
                            title="The principles behind every project."
                        />
                    </Reveal>

                    <CardGrid items={VALUES} columns={4} />
                </Section>

                {/* EXPERIENCE */}
                <Section tone="ink">
                    <div className="section-split">
                        <Reveal>
                            <SectionHeader
                                align="left"
                                tone="dark"
                                eyebrow="EXPERIENCE THAT SCALES"
                                title={
                                    <>
                                        From single sites to
                                        <br />
                                        <em>national roll-outs.</em>
                                    </>
                                }
                                lead="Our experience allows us to coordinate projects across multiple locations while maintaining clear communication and consistent standards throughout delivery."
                            />

                            <FeatureList items={EXPERIENCE} marker="number" tone="dark" />
                        </Reveal>

                        <Reveal delay={120}>
                            <StatPanel
                                label="TFG / PROJECT DELIVERY"
                                value="30+"
                                caption="YEARS OF EXPERIENCE"
                            />
                        </Reveal>
                    </div>
                </Section>

                <CtaBand
                    eyebrow="WORK WITH US"
                    title={
                        <>
                            Have a project <em>in mind?</em>
                        </>
                    }
                    text="Talk to our team about your next commercial fit-out, building project or facility requirement."
                    action="START A CONVERSATION"
                />
            </main>

            <Footer />
        </>
    );
}

export default AboutPage;

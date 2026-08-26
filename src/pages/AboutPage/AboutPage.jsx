import { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import './AboutPage.css';

function AboutPage() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
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

    const nextSlide = () => {
    setCurrentSlide((current) =>
        current === slides.length - 1 ? 0 : current + 1
    );
    };

    const previousSlide = () => {
    setCurrentSlide((current) =>
        current === 0 ? slides.length - 1 : current - 1
    );
    };
    return (
        <div className="about-page">
        <Navbar />

        <main className="about-main">
            {/* HERO */}
            <section className="about-hero">
            {/* HERO SLIDER */}
            <section className="about-slider">
            <div className="about-slider-track">
                {slides.map((slide, index) => (
                <article
                    key={index}
                    className={`about-slide ${
                    index === currentSlide ? 'about-slide-active' : ''
                    }`}
                >
                    <img
                    src={slide.image}
                    alt={slide.label}
                    className="about-slide-image"
                    />

                    <div className="about-slide-overlay"></div>

                    <div className="about-slide-content">
                    <p className="about-slide-eyebrow">{slide.label}</p>

                    <h1>{slide.title}</h1>

                    <p className="about-slide-description">
                        {slide.description}
                    </p>
                    </div>
                </article>
                ))}
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
                {slides.map((_, index) => (
                    <button
                    key={index}
                    type="button"
                    className={`about-slider-dot ${
                        index === currentSlide ? 'about-slider-dot-active' : ''
                    }`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
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


            </section>

            {/* INTRODUCTION */}
            <section className="about-intro">
            <div className="about-container">
                <div className="about-section-header">
                <p className="about-section-eyebrow">WHO WE ARE</p>

                <h2>
                    One team.
                    <br />
                    One point of contact.
                    <br />
                    <span>Complete delivery.</span>
                </h2>
                </div>

                <div className="about-intro-copy">
                <p>
                    Total Facility Group provides practical, reliable solutions
                    across commercial fit-outs, building works and ongoing
                    facility requirements.
                </p>

                <p>
                    We work with businesses that need projects delivered
                    efficiently, safely and with minimal disruption. From
                    individual site upgrades to large-scale rollouts, our team
                    coordinates the people, trades and processes required to get
                    the job done.
                </p>

                <p>
                    Our approach is simple: clear communication, dependable
                    delivery and a commitment to doing the work properly.
                </p>
                </div>
            </div>
            </section>

            {/* VALUES */}
            <section className="about-values">
            <div className="about-container">
                <div className="about-values-header">
                <p className="about-section-eyebrow">HOW WE WORK</p>

                <h2>The principles behind every project.</h2>
                </div>

                <div className="about-values-grid">
                <article className="about-value-card">
                    <span className="about-value-number">01</span>

                    <h3>RELIABLE</h3>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consistent communication and dependable delivery from
                    project start to completion.
                    </p>
                </article>

                <article className="about-value-card">
                    <span className="about-value-number">02</span>

                    <h3>PRACTICAL</h3>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Solutions focused on what works best for the site, project
                    and people involved.
                    </p>
                </article>

                <article className="about-value-card">
                    <span className="about-value-number">03</span>

                    <h3>RESPONSIVE</h3>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    We adapt quickly and coordinate efficiently when project
                    requirements change.
                    </p>
                </article>

                <article className="about-value-card">
                    <span className="about-value-number">04</span>

                    <h3>ACCOUNTABLE</h3>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    We take ownership of our work and remain focused on
                    delivering the agreed outcome.
                    </p>
                </article>
                </div>
            </div>
            </section>

            {/* EXPERIENCE */}
            <section className="about-experience">
            <div className="about-container">
                <div className="about-experience-content">
                <p className="about-section-eyebrow">
                    EXPERIENCE THAT SCALES
                </p>

                <h2>
                    From single sites to
                    <br />
                    <span>national roll-outs.</span>
                </h2>

                <p className="about-experience-copy">
                    Our experience allows us to coordinate projects across
                    multiple locations while maintaining clear communication and
                    consistent standards throughout delivery.
                </p>

                <div className="about-experience-list">
                    <div className="about-experience-item">
                    <span>01</span>
                    <p>Commercial fit-outs and refurbishments</p>
                    </div>

                    <div className="about-experience-item">
                    <span>02</span>
                    <p>Building repairs and maintenance works</p>
                    </div>

                    <div className="about-experience-item">
                    <span>03</span>
                    <p>Retail and distribution centre projects</p>
                    </div>

                    <div className="about-experience-item">
                    <span>04</span>
                    <p>Multi-site project coordination</p>
                    </div>
                </div>
                </div>

                <div className="about-experience-panel">
                <div className="about-panel-line about-panel-line-top"></div>

                <p>TFG / PROJECT DELIVERY</p>

                <strong>30+</strong>

                <span>YEARS OF EXPERIENCE</span>

                <div className="about-panel-line about-panel-line-bottom"></div>
                </div>
            </div>
            </section>

            {/* CTA */}
            <section className="about-cta">
            <div className="about-container">
                <p className="about-section-eyebrow">WORK WITH US</p>

                <h2>
                Have a project
                <br />
                in mind?
                </h2>

                <p>
                Talk to our team about your next commercial fit-out, building
                project or facility requirement.
                </p>

                <Link to="/contact-page" className="about-cta-button">
                    START A CONVERSATION
                    </Link>
            </div>
            </section>
        </main>

        <footer className="about-footer" id="contact">
            <span>
            TOTAL FACILITY GROUP · COMMERCIAL FIT-OUT &amp; BUILDING SERVICES
            </span>

            <span>© 2026 TFG</span>
        </footer>
        </div>
    );
    }

    export default AboutPage;
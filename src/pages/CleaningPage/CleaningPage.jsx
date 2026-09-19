import { useState } from 'react';

import Navbar from '../../components/Navbar';
import './CleaningPage.css';

// Add an image path (e.g. '/images/window-cleaning.jpg') to replace a placeholder.
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

function CleaningPage() {

    return (
        <div className="cleaning-page">
        <Navbar />

        <main className="cleaning-main">
           {/* HERO */}
            <section className="cleaning-hero">
            <div className="cleaning-hero-content">
                <p className="cleaning-eyebrow">OUR SERVICES</p>

                <h1 className="cleaning-title">
                CLEANING.
                <br />
                <span>STRIP & SEAL. CUTBACKS.</span>
                </h1>

                <p className="cleaning-description">
                From routine commercial cleaning to floor strip and seal and
                scheduled cutbacks, we keep your site clean, presentable and
                well maintained — reliable service you can count on.
                </p>
            </div>
            </section>

            {/* STRIP & SEAL / CUTBACKS BLURB */}
            <section className="cleaning-feature">
            <div className="cleaning-container cleaning-feature-inner">
                <img
                src="/images/Strip and Seal.jpg"
                alt="Commercial floor being stripped and sealed"
                className="cleaning-feature-image"
                />

                <div className="cleaning-feature-text">
                <p className="cleaning-section-eyebrow">FLOOR CARE</p>

                <h2>Strip &amp; Seal. Cutbacks.</h2>

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
                </div>
            </div>
            </section>

            {/* SERVICES GRID */}
            <section className="cleaning-services">
            <div className="cleaning-container">
                <div className="cleaning-services-header">
                <p className="cleaning-section-eyebrow">WHAT WE OFFER</p>

                <h2>Our Cleaning Services</h2>
                </div>

                <div className="cleaning-services-grid">
                {CLEANING_SERVICES.map((service) => (
                    <article className="cleaning-service-card" key={service.title}>
                    <div className="cleaning-service-media">
                        {service.image ? (
                        <img src={service.image} alt={service.title} />
                        ) : (
                        <div className="cleaning-service-placeholder" aria-hidden="true" />
                        )}
                    </div>

                    <div className="cleaning-service-body">
                        <h3>{service.title}</h3>
                        <p>{service.text}</p>
                    </div>
                    </article>
                ))}
                </div>
            </div>
            </section>

            {/* STATS / EXPERIENCE */}
            <section className="cleaning-experience">
            <div className="cleaning-container">
                <div className="cleaning-experience-content">
                <p className="cleaning-section-eyebrow">LOREM IPSUM</p>

                <h2>
                    Trusted Partner for Coles
                </h2>

                <p className="cleaning-experience-copy">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor
                    sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt.
                </p>

                <div className="cleaning-experience-list">
                    <div className="cleaning-experience-item">
                    <span>01</span>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>

                    <div className="cleaning-experience-item">
                    <span>02</span>
                    <p>Ut enim ad minim veniam quis nostrud</p>
                    </div>

                    <div className="cleaning-experience-item">
                    <span>03</span>
                    <p>Duis aute irure dolor in reprehenderit</p>
                    </div>

                    <div className="cleaning-experience-item">
                    <span>04</span>
                    <p>Excepteur sint occaecat cupidatat</p>
                    </div>
                </div>
                </div>

                <div className="cleaning-experience-panel">
                <div className="cleaning-panel-line cleaning-panel-line-top"></div>

                <p>LOREM / IPSUM DOLOR</p>

                <strong>15+</strong>

                <span>YEARS OF WORK</span>

                <div className="cleaning-panel-line cleaning-panel-line-bottom"></div>
                </div>
            </div>
            </section>

            {/* CTA */}
            <section className="cleaning-cta">
            <div className="cleaning-container">
                <p className="cleaning-section-eyebrow">LOREM IPSUM</p>

                <h2>
                Dolor sit amet
                <br />
                consectetur?
                </h2>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
                </p>
            </div>
            </section>
        </main>

        <footer className="cleaning-footer">
            <span>
            TOTAL FACILITY GROUP · COMMERCIAL FIT-OUT &amp; BUILDING SERVICES
            </span>

            <span>© 2026 TFG</span>
        </footer>
        </div>
    );
    }

    export default CleaningPage;
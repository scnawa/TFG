import { useState } from 'react';

import Navbar from '../../components/Navbar';
import './CleaningPage.css';

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

            {/* SERVICES GRID */}
            <section className="cleaning-services">
            <div className="cleaning-container">
                <div className="cleaning-services-header">
                <p className="cleaning-section-eyebrow">WHAT WE OFFER</p>

                <h2>Lorem ipsum dolor sit amet.</h2>
                </div>

                <div className="cleaning-services-grid">
                <article className="cleaning-service-card">
                    <span className="cleaning-service-number">01</span>

                    <h3>Strip and Seal</h3>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed do eiusmod tempor incididunt ut labore.
                    </p>
                </article>

                <article className="cleaning-service-card">
                    <span className="cleaning-service-number">02</span>

                    <h3>Cut Back</h3>

                    <p>
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </article>

                <article className="cleaning-service-card">
                    <span className="cleaning-service-number">03</span>

                    <h3>Sushi Refresh</h3>

                    <p>
                    Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </article>

                <article className="cleaning-service-card">
                    <span className="cleaning-service-number">04</span>

                    <h3>Click and Collect</h3>

                    <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </article>
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
import { useState } from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';
import PageHero from '../../components/ui/PageHero';
import Reveal from '../../components/ui/Reveal';
import Section from '../../components/ui/Section';
import { EMAIL, PHONE } from '../../siteConfig';
import './ContactPage.css';

function ContactPage() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: replace with actual submit logic (API call, email service, etc.)
        console.log('Contact form submitted:', formData);

        setSubmitted(true);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <>
            <Navbar />

            <main id="main">
                <PageHero
                    eyebrow="GET IN TOUCH"
                    title={
                        <>
                            LET&apos;S START
                            <br />
                            <em>THE CONVERSATION.</em>
                        </>
                    }
                    lead="Have a project, question or facility requirement? Fill out the form below and our team will get back to you."
                />

                {/* FORM */}
                <Section>
                    <div className="contact-layout">
                        {/* DIRECT CONTACT */}
                        <Reveal as="aside" className="contact-aside">
                            <p className="eyebrow">PREFER TO TALK?</p>

                            <a className="contact-phone" href={PHONE.href}>
                                {PHONE.display}
                            </a>

                            <p className="contact-aside-note">
                                Call our team directly to discuss a fit-out,
                                building project or facility requirement.
                            </p>

                            <p className="eyebrow contact-aside-label">EMAIL US</p>

                            <a className="contact-email" href={EMAIL.href}>
                                {EMAIL.display}
                            </a>
                        </Reveal>

                        {/* FORM PANEL */}
                        <Reveal className="contact-form-panel" delay={120}>
                            {submitted && (
                                <div className="contact-success" role="status">
                                    Thanks for reaching out — we&apos;ll be in touch shortly.
                                </div>
                            )}

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="contact-form-row">
                                    <div className="contact-field">
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            autoComplete="given-name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="contact-field">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            autoComplete="family-name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="contact-form-row">
                                    <div className="contact-field">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            autoComplete="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="contact-field">
                                        <label htmlFor="phone">
                                            Phone <span className="contact-optional">(optional)</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            autoComplete="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="contact-field">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <Button type="submit" className="contact-submit-button" arrow>
                                    SEND MESSAGE
                                </Button>
                            </form>
                        </Reveal>
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}

export default ContactPage;

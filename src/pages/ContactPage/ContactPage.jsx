import { useState } from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';
import PageHero from '../../components/ui/PageHero';
import Reveal from '../../components/ui/Reveal';
import Section from '../../components/ui/Section';
import { sendEnquiry } from '../../lib/sendEnquiry';
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

    // 'idle' | 'sending' | 'sent' | 'error'
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === 'sending') return;

        setStatus('sending');

        try {
            const botcheck = new FormData(e.currentTarget).get('botcheck') === 'on';
            await sendEnquiry({ ...formData, botcheck });

            setStatus('sent');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: '',
            });
        } catch (error) {
            console.error('Contact form failed to send:', error);
            // Keep what they typed so they can retry without starting over
            setStatus('error');
        }
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
                            <div aria-live="polite">
                                {status === 'sent' && (
                                    <div className="contact-success" role="status">
                                        Thanks for reaching out — your message has been sent and
                                        we&apos;ll be in touch shortly.
                                    </div>
                                )}
                            </div>

                            {status === 'error' && (
                                <div className="contact-error" role="alert">
                                    Sorry, your message couldn&apos;t be sent. Please try again,
                                    or contact us directly on{' '}
                                    <a href={PHONE.href}>{PHONE.display}</a> or at{' '}
                                    <a href={EMAIL.href}>{EMAIL.display}</a>.
                                </div>
                            )}

                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                                aria-busy={status === 'sending'}
                            >
                                {/* Spam honeypot: hidden from people, filled in by bots */}
                                <input
                                    type="checkbox"
                                    name="botcheck"
                                    className="contact-honeypot"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                />

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

                                <Button
                                    type="submit"
                                    className="contact-submit-button"
                                    arrow={status !== 'sending'}
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? 'SENDING…' : 'SEND MESSAGE'}
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

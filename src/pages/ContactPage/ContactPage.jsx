import { useState } from 'react';

import Navbar from '../../components/Navbar';
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
        <div className="contact-page">
        <Navbar />

        <main className="contact-main">
            {/* HERO */}
            <section className="contact-hero">
            <div className="contact-hero-content">
                <p className="contact-eyebrow">GET IN TOUCH</p>

                <h1 className="contact-title">
                LET'S START
                <br />
                <span>THE CONVERSATION.</span>
                </h1>

                <p className="contact-description">
                Have a project, question or facility requirement? Fill out
                the form below and our team will get back to you.
                </p>
            </div>
            </section>

            {/* FORM */}
            <section className="contact-form-section">
            <div className="contact-container">
                <div className="contact-form-panel">
                <div className="contact-panel-corner contact-panel-corner-tl"></div>
                <div className="contact-panel-corner contact-panel-corner-br"></div>

                {submitted && (
                    <div className="contact-success">
                    Thanks for reaching out — we'll be in touch shortly.
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
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="contact-field">
                        <label htmlFor="phone">Phone</label>
                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        />
                    </div>
                    </div>

                    <div className="contact-field contact-field-full">
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

                    <button type="submit" className="contact-submit-button">
                    SEND MESSAGE
                    </button>
                </form>
                </div>
            </div>
            </section>
        </main>

        <footer className="contact-footer">
            <span>
            TOTAL FACILITY GROUP · COMMERCIAL FIT-OUT &amp; BUILDING SERVICES
            </span>

            <span>© 2026 TFG</span>
        </footer>
        </div>
    );
}

export default ContactPage;
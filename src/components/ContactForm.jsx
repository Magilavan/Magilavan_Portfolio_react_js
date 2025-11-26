import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import "./ContactForm.css";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  useEffect(() => {
    emailjs.init('b4kPJ13JdlHoWwSqz');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Please fill in all fields.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      return "Please enter a valid email address.";
    }
    if (form.message.length < 10) {
      return "Message must be at least 10 characters.";
    }
    return null;
  };

  // <-- Updated submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: "" });

    const err = validate();
    if (err) {
      setStatus({ loading: false, ok: false, msg: err });
      return;
    }

    try {
      await emailjs.send(
        'service_njrbgpg',
        'template_b157ppr',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        }
      );
      
      setForm({ name: "", email: "", message: "" });
      setStatus({ loading: false, ok: true, msg: "Message sent successfully!" });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({ loading: false, ok: false, msg: "Failed to send message. Please try again." });
    }
  };
  // <-- end updated submit handler

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get in touch</h2>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label className="field">
          <span>Name</span>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </label>

        <label className="field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="field">
          <span>Message</span>
          <textarea
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project or opportunity..."
            required
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="btn-primary" disabled={status.loading}>
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </div>

        {status.msg && (
          <p
            className={`form-status ${status.ok ? "success" : "error"}`}
            role="status"
            aria-live="polite"
          >
            {status.msg}
          </p>
        )}
      </form>
    </section>
  );
}

export default ContactForm;

import React, { useState } from 'react';
import reactdom from "react-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    setSubmitted(true);

    // Add your backend integration here (Formspree, EmailJS, etc.)
    console.log('Form submitted:', formData);

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <div><h2>Contact Me</h2></div>
      <p>Have a question or want to work together?</p>

      {submitted && <p className="success-message">Thank you! I’ll get back to you soon.</p>}
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            rows="5"
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    alert('Thank you for your message. We will contact you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      {/* Hero Image Section */}
      <div className="contact-hero">
        <img 
          src="/images/contact-hero.jpg" // Replace with your actual image path
          alt="Contact Us"
          className="contact-hero-image"
        />
        <div className="contact-hero-overlay">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">Get in touch with Radiant Pranic Healing</p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <FaMapMarkerAlt className="icon" />
            </div>
            <h3>Our Location</h3>
            <p>123 Healing Street,<br />Pranic City, PC 123456<br />India</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <FaPhone className="icon" />
            </div>
            <h3>Phone Number</h3>
            <p>+91 98765 43210</p>
            <p>+91 12345 67890</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <FaEnvelope className="icon" />
            </div>
            <h3>Email Address</h3>
            <p>info@radiantpranic.com</p>
            <p>support@radiantpranic.com</p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="contact-content-wrapper">
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <p>Have questions about our healing services or want to learn more? Fill out the form below and we'll get back to you as soon as possible.</p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number"
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input 
                type="text" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea 
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-map-section">
          <h2>Find Us on Map</h2>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.376647221273!2d77.2098653150823!3d28.62873998242386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5e347d5e3d%3A0x3a1d3b5a8e2b4b4e!2sRadiant%20Pranic%20Healing!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Radiant Pranic Healing Location"
            ></iframe>
          </div>

          <div className="social-media-section">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Healing Hours Section */}
      <div className="healing-hours-section">
        <h2>Healing Hours</h2>
        <div className="hours-container">
          <div className="hours-card">
            <h3>Monday - Friday</h3>
            <p>9:00 AM - 6:00 PM</p>
          </div>
          <div className="hours-card">
            <h3>Saturday</h3>
            <p>10:00 AM - 4:00 PM</p>
          </div>
          <div className="hours-card">
            <h3>Sunday</h3>
            <p>Emergency Healing Only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
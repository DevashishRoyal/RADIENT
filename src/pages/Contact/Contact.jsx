import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="section-header">
          <h1>Contact Us</h1>
          <p>Reach out for support and begin your healing journey</p>
        </div>

        <div className="contact-content">
          <div className="contact-form">
            <h2>Send us a message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Get in touch</h2>
            <div className="info-item">
              <h3>📧 Email</h3>
              <p>hello@radiant-healing.com</p>
            </div>
            <div className="info-item">
              <h3>📞 Phone</h3>
              <p>(555) 123-4567</p>
            </div>
            <div className="info-item">
              <h3>📍 Address</h3>
              <p>
                123 Healing Way
                <br />
                Peace City, PC 12345
              </p>
            </div>
            <div className="info-item">
              <h3>🕒 Hours</h3>
              <p>
                Monday - Friday: 9AM - 6PM
                <br />
                Saturday: 10AM - 4PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

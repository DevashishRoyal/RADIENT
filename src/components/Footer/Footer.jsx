import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Radiant</h3>
            <p>
              Your journey to healing and inner peace starts here. We provide compassionate support for panic and
              anxiety management.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📧 hello@radiant-healing.com</p>
            <p>📞 (555) 123-4567</p>
            <p>📍 123 Healing Way, Peace City</p>
          </div>

          <div className="footer-section">
            <h4>Support Hours</h4>
            <p>Monday - Friday: 9AM - 6PM</p>
            <p>Saturday: 10AM - 4PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Radiant Healing. All rights reserved.</p>
          <div className="footer-disclaimer">
            <p>
              <strong>Disclaimer:</strong> Our services are designed to support your wellness journey. Please consult
              with healthcare professionals for medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

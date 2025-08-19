import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Radiaant</h3>
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
                <Link to="/testimonies">Testimonies</Link>
              </li>
              <li>
                <Link to="/ashram">Ashram</Link>
              </li>
              <li>
                <Link to="/research">Research</Link>
              </li>
              <li>
                <a href="/contribution">Contrubution</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📧 Radiaantconsultant@gmail.com</p>
            <p>📞+91 9819852675</p>
            <p>📍 103, Oyster CHS, Hiranandani estate,Thane West</p>
          </div>

          <div className="footer-section">
            <h4>Support Hours</h4>
            <p>Monday - Friday: 9AM - 6PM</p>
            <p>Saturday: 10AM - 4PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Radiaant Healing. All rights reserved.</p>
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

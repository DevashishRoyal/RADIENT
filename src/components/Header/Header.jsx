"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path ? "active" : ""
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <h2>Radiant</h2>
            </Link>
          </div>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul className="nav-list">
              <li>
                <Link to="/" className={isActive("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={isActive("/about")}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className={isActive("/contact")}>
                  Contact
                </Link>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="btn btn-primary">Chat with us</button>
            <button className="menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

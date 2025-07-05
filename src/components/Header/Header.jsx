"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const isActive = (path) => (location.pathname === path ? "active" : "")

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Courses", to: "/Courses" },
    { label: "Testimonies", href: "#testimonies" },
    { label: "Ashram", href: "#ashram" },
    { label: "Research", href: "#research" },
    { label: "Contribution", href: "#contribution" },
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="images/radiant_logo.jpg" alt="Radiant Logo" className="logo-img" />
          </Link>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul className="nav-list">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.to ? (
                    <Link to={link.to} className={isActive(link.to)} onClick={() => setIsMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
                      <Link to="/" className="logo">
            <img src="images/PH_logo.jpg" alt="PH Logo" className="ph-img" />
          </Link>
           
            <button className="menu-toggle" onClick={toggleMenu}>
  <span />
  <span />
  <span />
</button>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

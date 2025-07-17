import React from 'react';
import './Contribution.css';

const Contribution = () => {
  return (
    <div className="cont-container">
      {/* Hero Image Section */}
      <div className="cont-hero">
        <img 
          src="/path-to-your-image.jpg"  // Replace with your actual image path
          alt="Contribution Hero"
          className="cont-hero-image"
        />
        <div className="cont-hero-overlay">
          <h1 className="cont-title">Contribution</h1>
          <p className="cont-subtitle">Educational medical food for hungry</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="cont-content-wrapper">
        <div className="cont-quote-section">
          <blockquote className="cont-quote">
            "It is in giving that we receive." <span className="cont-quote-author">- Grand Master Choa Kok Sui</span>
          </blockquote>
        </div>
        
        <div className="cont-content">
          <h2 className="cont-heading">Give Light: Give Hope.</h2>
          <div className="cont-text">
            <p>
              There are many lives waiting to be touched—and your support can be the light that brings hope. Every contribution, no matter how small, creates a ripple of change.  
            </p>
            <p>
              At the Pranic Healing Foundation of South Mumbai, we believe that healing extends beyond the energy body—it includes healing hunger, ignorance, and suffering. We're committed to giving back in every way we can, and we invite you to be a part of this journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribution;
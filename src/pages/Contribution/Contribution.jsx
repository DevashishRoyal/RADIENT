import React from 'react';
import './Contribution.css';

const ContributionPage = () => {
  return (
    <div className="contribution-page">
      {/* Hero Image Section with Overlay Text */}
      <div className="hero-section">
        <img 
          src="/images/contribution-hero.jpg" // Replace with your image path
          alt="Contribution Hero"
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title animate-fadeIn">Contribution</h1>
            <p className="hero-subtitle animate-fadeIn">Educational medical food for hungry</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-container">
        {/* Quote Section */}
        <div className="quote-section animate-slideUp">
          <blockquote className="main-quote">
            <strong>It is in giving that we receive.</strong>
            <footer>- Grand Master Choa Kok Sui</footer>
          </blockquote>
        </div>

        {/* Content Section */}
        <div className="text-section">
          <h2 className="section-title animate-slideUp">Give Light. Give Hope.</h2>
          <div className="content-text animate-fadeIn">
            <p>
              There are many lives waiting to be touched—and your support can be the light that brings hope. 
              Every contribution, no matter how small, creates a ripple of change.
            </p>
            <p>
              At the Pranic Healing Foundation of South Mumbai, we believe that healing extends beyond the 
              energy body—it includes healing hunger, ignorance, and suffering. We're committed to giving 
              back in every way we can, and we invite you to be a part of this journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionPage;
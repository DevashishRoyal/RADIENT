import React from 'react';
import './Contribution.css';

const Contribution = () => {
  return (
    
    <div className="cont-container">
      {/* Hero Image Section */}
      <div className="cont-hero">
        <img 
          src="images/Contribution.png"  // Replace with your actual image path
          alt="Contribution Hero"
          className="cont-hero-image"
        />
        <div className="cont-hero-overlay">
          <h1 className="cont-title">Contribution</h1>
          <p className="cont-subtitle">Educational medical food for hungry</p>
        </div>
      </div>

      <div class="cont-content-wrapper">
  
  {/* <!-- Quote --> */}
  <div class="cont-quote-section">
    <blockquote class="cont-quote">
      “It is in giving that we receive.”
      <span class="cont-quote-author">- Grand Master Choa Kok Sui</span>
    </blockquote>
  </div>
  
  {/* <!-- Heading --> */}
  <h2 class="cont-heading">Give Light. Give Hope.</h2>
  
  {/* <!-- Main Text --> */}
  <div class="cont-text">
    <p>There are many lives waiting to be touched—and your support can be the light that brings hope. Every contribution, no matter how small, creates a ripple of change.</p>
    <p>At Radiant Pranic Healing, we believe that true service begins with compassion — and healing is a right, not a privilege. Through free healing sessions, wellness camps, food distribution drives, and emotional support programs, we strive to reach those who need it most — regardless of their means.</p>
    <p>Your donation empowers us to continue this work. It helps us offer healing to the sick, peace to the anxious, and hope to those who feel forgotten. Every rupee you give becomes a channel of love, care, and transformation.</p>
    <p>Whether it’s a one-time contribution or a monthly pledge, your support fuels our mission — to heal, to serve, and to uplift.</p>
  </div>
  
  {/* <!-- Closing Line --> */}
  <p class="cont-closing">🙏 <em>Donate now. Be the hand that heals. Be the heart that gives.</em></p>
</div>
</div>

  );
};

export default Contribution;
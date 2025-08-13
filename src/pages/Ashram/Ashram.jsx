import React from 'react';
import './Ashram.css';

const AshramPage = () => {
  return (
    <div className="ashram-container">
      {/* Hero Image Section */}
      <section className="ashram-hero">
        <div className="ashram-hero-image-container">
          <img 
            src="/images/Ashram.png"
            alt="GMCKS Arhatic Yoga Ashram"
            className="ashram-hero-image"
          />
          <div className="ashram-hero-overlay">
            <div className="ashram-hero-content">
              <h1 className="ashram-title">GMCKS Ashram</h1>
              <p className="ashram-subtitle">A Sacred Sanctuary for Spiritual Transformation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ashram-section">
      <div className="ashram-text">
        <h2>GMCKS Arhatic Yoga Ashram</h2>
        <p>
          Nestled in the serene Sahyadri hills of Mulshi, Maharashtra, the GMCKS
          Arhatic Yoga Ashram stands as a living legacy of Grand Master Choa Kok
          Sui’s vision. More than just a physical space, this ashram is a
          spiritual home for thousands of practitioners from around the world...
        </p>
        <p>
          Spread across nearly sixty acres of pristine land, the ashram offers
          breathtaking views of lush green valleys, majestic mountain peaks, and
          the tranquil Mulshi lake...
        </p>
      </div>

      <div className="ashram-video">
        <video
          src="/videos/ashram.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
    </section>
    </div>
  );
};

export default AshramPage;
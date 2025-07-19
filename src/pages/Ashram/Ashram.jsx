import React from 'react';
import './Ashram.css';

const AshramPage = () => {
  return (
    <div className="ashram-container">
      {/* Hero Image Section */}
      <div className="ashram-hero">
        <img 
          src="/images/ashram-image.jpg"  // Replace with your hero image path
          alt="GMCKS Arhatic Yoga Ashram"
          className="ashram-hero-image"
        />
        <div className="ashram-hero-overlay">
          <h1 className="ashram-title">GMCKS Arhatic Yoga Ashram</h1>
        </div>
      </div>

      {/* Content with Video Section */}
      <div className="ashram-content-section">
        <div className="ashram-text-content">
          <p className="ashram-paragraph">
            Nestled in the serene Sahyadri hills of Mulshi, Maharashtra, the GMCKS Arhatic Yoga Ashram stands
            as a living legacy of Grand Master Choa Kok Sui's vision. More than just a physical space, this ashram is
            a spiritual home for thousands of practitioners from around the world. It was lovingly conceived by GMCKS
            as a sacred retreat where students could deepen their inner practice and experience true transformation.
          </p>
          <p className="ashram-paragraph">
            Designed in harmony with the principles of Pranic Feng Shui, every corner of the ashram—be it the meditation halls,
            dining area, or living quarters—has been carefully crafted to enhance the flow of energy and support the
            practitioner's journey.
          </p>
        </div>

        <div className="ashram-video-wrapper">
          <video 
            className="ashram-video" 
            controls 
            poster="/images/radiant_logo.jpg"
          >
            <source src="/videos/Ashram.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Remaining Text Content */}
      <div className="ashram-text-content ashram-full-width">
        <p className="ashram-paragraph">
          Spread across nearly sixty acres of pristine land, the ashram offers breathtaking views of lush green valleys,
          majestic mountain peaks, and the tranquil Mulshi lake. The natural beauty of the landscape, combined with its
          peaceful atmosphere, makes it an ideal setting for intense spiritual practice and self-reflection.
        </p>
        <p className="ashram-paragraph">
          The ashram regularly hosts Arhatic Yoga retreats and higher spiritual workshops, drawing students from all walks
          of life. Its dedicated staff ensure that every visitor's stay is safe, comfortable, and enriching, with nutritious
          meals prepared fresh daily and a warm, supportive environment that fosters growth on all levels—physical,
          emotional, mental, and spiritual.
        </p>
        <p className="ashram-paragraph">
          In essence, the GMCKS Ashram is not just a destination—it's a journey inward. For many, it is a sacred space
          where silence speaks volumes, healing happens naturally, and the soul finds its way home.
        </p>
      </div>
    </div>
  );
};

export default AshramPage;
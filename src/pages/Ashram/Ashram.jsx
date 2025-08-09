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

      {/* Main Content */}
      <main className="ashram-main-content">
        {/* Content with Video Section */}
        <section className="ashram-content-section">
          <div className="ashram-text-content">
            <div className="ashram-section-header">
              <h2 className="ashram-section-title">The Spiritual Haven</h2>
              <div className="ashram-title-underline"></div>
            </div>
            <p className="ashram-paragraph">
              Nestled in the serene Sahyadri hills of Mulshi, Maharashtra, the GMCKS Arhatic Yoga Ashram stands
              as a living legacy of Grand Master Choa Kok Sui's vision. More than just a physical space, this ashram is
              a spiritual home for thousands of practitioners from around the world.
            </p>
            <p className="ashram-paragraph">
              Designed in harmony with the principles of Pranic Feng Shui, every corner of the ashram—be it the meditation halls,
              dining area, or living quarters—has been carefully crafted to enhance the flow of energy and support the
              practitioner's journey.
            </p>
          </div>

          <div className="ashram-video-wrapper">
            <div className="ashram-video-container">
              <video 
                className="ashram-video" 
                controls 
                poster="/images/radiant_logo.jpg"
              >
                <source src="/videos/Ashram.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="ashram-video-caption">Experience the Ashram's Serenity</div>
            </div>
          </div>
        </section>

        {/* Full Width Text Content */}
        <section className="ashram-full-width-section">
          <div className="ashram-text-content">
            <div className="ashram-section-header">
              <h2 className="ashram-section-title">The Ashram Experience</h2>
              <div className="ashram-title-underline"></div>
            </div>
            <p className="ashram-paragraph">
              Spread across nearly sixty acres of pristine land, the ashram offers breathtaking views of lush green valleys,
              majestic mountain peaks, and the tranquil Mulshi lake. The natural beauty of the landscape, combined with its
              peaceful atmosphere, makes it an ideal setting for intense spiritual practice and self-reflection.
            </p>
            
            <div className="ashram-feature-boxes">
              <div className="ashram-feature-box">
                <div className="ashram-feature-icon">🌿</div>
                <h3>Natural Beauty</h3>
                <p>Sixty acres of pristine land with stunning valley and lake views</p>
              </div>
              <div className="ashram-feature-box">
                <div className="ashram-feature-icon">🕉️</div>
                <h3>Spiritual Retreats</h3>
                <p>Regular Arhatic Yoga retreats and higher spiritual workshops</p>
              </div>
              <div className="ashram-feature-box">
                <div className="ashram-feature-icon">🍃</div>
                <h3>Holistic Nourishment</h3>
                <p>Nutritious meals and supportive environment for all-round growth</p>
              </div>
            </div>
            
            <p className="ashram-paragraph">
              The ashram regularly hosts Arhatic Yoga retreats and higher spiritual workshops, drawing students from all walks
              of life. Its dedicated staff ensure that every visitor's stay is safe, comfortable, and enriching.
            </p>
            <p className="ashram-paragraph ashram-closing">
              In essence, the GMCKS Ashram is not just a destination—it's a journey inward. For many, it is a sacred space
              where silence speaks volumes, healing happens naturally, and the soul finds its way home.
            </p>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="ashram-testimonial-section">
          <div className="ashram-testimonial-content">
            <blockquote className="ashram-testimonial">
              "The ashram is truly a divine space where one can feel the presence and blessings of the Masters. 
              Every visit deepens my practice and connection to the teachings."
            </blockquote>
            <div className="ashram-testimonial-author">— Long-time Practitioner</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AshramPage;
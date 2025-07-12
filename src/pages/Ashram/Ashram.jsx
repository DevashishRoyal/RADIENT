import React from 'react';
import './Ashram.css';

const AshramSection = () => {
  return (
    <section className="ashram-section">
      {/* Hero Section */}
      <div className="ashram-hero">
        <div className="hero-image-container">
          <img
            src="/images/ashram-image.jpg"
            alt="GMCKS Arhatic Yoga Ashram"
            className="hero-image"
            loading="eager"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">GMCKS Arhatic Yoga</span>
            <span className="title-line">Ashram</span>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="ashram-content">
        <div className="content-container">
          {/* Text Content */}
          <div className="text-content">
            <div className="intro-text fade-in">
              <p className="lead-paragraph">
                Nestled in the serene Sahyadri Hills of Mulshi, Maharashtra, the GMCKS Arhatic Yoga Ashram stands as a living legacy of Grand Master Choa Kok Sui's vision.
              </p>
            </div>

            <div className="text-block fade-in">
              <p>
                More than just a physical space, this Ashram is a spiritual home for thousands of practitioners from around the world. Lovingly conceived by GMCKS, it is a sacred retreat where students could deepen their inner practice and experience true transformation.
              </p>
            </div>
            
            <div className="highlight-box fade-in">
              <p>
                Spread across nearly sixty acres of pristine land, the ashram offers breathtaking views of lush green valleys, majestic mountain peaks, and the tranquil Mulshi lake. The natural beauty of the landscape, combined with its peaceful atmosphere, makes it an ideal setting for intense spiritual practice and self-reflection.
              </p>
            </div>

            <div className="text-block fade-in">
              <p>
                The ashram regularly hosts Arhatic Yoga retreats and higher level workshops, drawing students from all walks of life. Its dedicated staff ensures every stay is safe, comfortable, and enriching, with nutritious meals and programs designed to nurture physical, emotional, and spiritual growth.
              </p>
            </div>

            <div className="conclusion-text fade-in">
              <p>
                In essence, the GMCKS Ashram represents 25 years of spiritual legacy. For many, it is a sacred space where hearts speak volumes, lasting transformations occur naturally, and the soul finds its way home.
              </p>
            </div>
          </div>

          {/* Portrait Video */}
          <div className="video-portrait-container fade-in">
            <div className="video-wrapper">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="portrait-video"
              >
                <source src="./images/Video/Ashram.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay"></div>
              <div className="play-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AshramSection;
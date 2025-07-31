import React, { useRef, useState } from 'react';
import './testimonies.css';

const Testimonials = () => {
  const videoRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState([]);

  const handlePlayVideo = (index) => {
    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
      video.controls = true;
      setIsPlaying(prev => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
    } else {
      video.pause();
      video.controls = false;
      setIsPlaying(prev => {
        const newState = [...prev];
        newState[index] = false;
        return newState;
      });
    }
  };

  return (
    <section className="test-section">
      {/* Hero Section */}
      <div className="test-hero">
        <img 
          src="/images/testimonies.png" 
          alt="Hero" 
          className="test-hero-image" 
        />
        <div className="test-hero-overlay"></div>
        <div className="test-hero-content">
          {/* <h1 className="test-hero-title">Testimonials</h1>
          <p className="test-hero-subtitle">Hear what people say about their experiences</p> */}
        </div>
      </div>

      {/* Testimonials Container */}
      <div className="test-container">
        <div className="test-header">
          <h2 className="test-main-title">Hear what people say about their experiences</h2>
          <p className="test-header-description">
           At Radiaant, we believe healing is more than just recovery — it's a journey toward inner peace, clarity, and purpose. Over the years, people from all walks of life have walked through our doors seeking change, and what they’ve found is transformation.

Through Pranic Healing, many have experienced emotional balance, physical relief, mental stillness, and spiritual awakening. Their testimonials are more than words — they are living proof of the power of energy, intention, and guided healing.

We invite you to read their stories, feel their journeys, and discover how Raadiant has become a trusted space for growth, healing, and light.
          </p>
        </div>

        <div className="test-grid">
          {/* Testimonial Card 1 with Video */}
          <div className="test-card">
            <div className="test-video-container">
              <video
                ref={el => videoRefs.current[0] = el}
                className="test-video"
                poster="/images/radiant_logo.jpg"
                onClick={() => handlePlayVideo(0)}
                preload="metadata"
              >
                <source src="/videos/video5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying[0] && (
                <div 
                  className="test-play-overlay" 
                  onClick={() => handlePlayVideo(0)}
                >
                  <div className="test-play-circle">
                    <svg className="test-play-icon" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="test-content">
              <h3 className="test-card-title">John's Transformation</h3>
              <p className="test-card-description">
                After attending our retreat, John completely transformed his lifestyle and found inner peace.
              </p>
            </div>
          </div>

          {/* Testimonial Card 2 with Video */}
            <div className="test-card">
            <div className="test-video-container">
              <video
                ref={el => videoRefs.current[1] = el}
                className="test-video"
                poster="/images/radiant_logo.jpg"
                onClick={() => handlePlayVideo(1)}
                preload="metadata"
              >
                <source src="/videos/video4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying[1] && (
                <div 
                  className="test-play-overlay" 
                  onClick={() => handlePlayVideo(1)}
                >
                  <div className="test-play-circle">
                    <svg className="test-play-icon" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="test-content">
              <h3 className="test-card-title">John's Transformation</h3>
              <p className="test-card-description">
                After attending our retreat, John completely transformed his lifestyle and found inner peace.
              </p>
            </div>
          </div>
          
            <div className="test-card">
            <div className="test-video-container">
              <video
                ref={el => videoRefs.current[2] = el}
                className="test-video"
                poster="/images/radiant_logo.jpg"
                onClick={() => handlePlayVideo(2)}
                preload="metadata"
              >
                <source src="/videos/video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying[2] && (
                <div 
                  className="test-play-overlay" 
                  onClick={() => handlePlayVideo(2)}
                >
                  <div className="test-play-circle">
                    <svg className="test-play-icon" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="test-content">
              <h3 className="test-card-title">John's Transformation</h3>
              <p className="test-card-description">
                After attending our retreat, John completely transformed his lifestyle and found inner peace.
              </p>
            </div>
          </div>
            <div className="test-card">
            <div className="test-video-container">
              <video
                ref={el => videoRefs.current[3] = el}
                className="test-video"
                poster="/images/radiant_logo.jpg"
                onClick={() => handlePlayVideo(3)}
                preload="metadata"
              >
                <source src="/videos/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying[3] && (
                <div 
                  className="test-play-overlay" 
                  onClick={() => handlePlayVideo(3)}
                >
                  <div className="test-play-circle">
                    <svg className="test-play-icon" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="test-content">
              <h3 className="test-card-title">John's Transformation</h3>
              <p className="test-card-description">
                After attending our retreat, John completely transformed his lifestyle and found inner peace.
              </p>
            </div>
          </div>
            <div className="test-card">
            <div className="test-video-container">
              <video
                ref={el => videoRefs.current[4] = el}
                className="test-video"
                poster="/images/radiant_logo.jpg"
                onClick={() => handlePlayVideo(4)}
                preload="metadata"
              >
                <source src="/videos/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying[4] && (
                <div 
                  className="test-play-overlay" 
                  onClick={() => handlePlayVideo(4)}
                >
                  <div className="test-play-circle">
                    <svg className="test-play-icon" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="test-content">
              <h3 className="test-card-title">John's Transformation</h3>
              <p className="test-card-description">
                After attending our retreat, John completely transformed his lifestyle and found inner peace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
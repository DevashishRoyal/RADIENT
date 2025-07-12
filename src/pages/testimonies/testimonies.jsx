import React from 'react';
import './testimonies.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      title: "Inspiring Healing Journey",
      description: "How pranic healing transformed Sarah's chronic pain",
      videoSrc: "./images/Video/video.mp4",
      thumbnail: "./images/Video/video.mp4"
    },
    {
      id: 2,
      title: "Emotional Breakthrough",
      description: "John's story of overcoming anxiety through energy healing",
      videoSrc: "./images/Video/video.mp4",
      thumbnail: "/images/testimonial2.jpg"
    },
    {
      id: 3,
      title: "Spiritual Awakening",
      description: "Maya's path to deeper consciousness with pranic techniques",
      videoSrc: "./images/Video/video.mp4",
      thumbnail: "/images/testimonial3.jpg"
    },
    {
      id: 4,
      title: "Physical Recovery",
      description: "Athlete regains mobility after injury with energy healing",
      videoSrc: "./images/Video/video.mp4",
      thumbnail: "/images/testimonial4.jpg"
    },
    {
      id: 5,
      title: "Family Healing",
      description: "How one family incorporated pranic healing into daily life",
      videoSrc: "./images/Video/video.mp4",
      thumbnail: "/images/testimonial5.jpg"
    },
    {
      id: 6,
      title: "Professional Impact",
      description: "Doctor integrates pranic healing into medical practice",
      videoId: "VIDEO_ID_6",
      thumbnail: "/images/testimonial6.jpg"
    }
  ];

  return (
    <section className="testimonials-section">
      {/* Hero Image Section */}
      <div className="testimonials-hero">
        <img 
          src="/images/testimonies.jpg" 
          alt="Pranic Healing Testimonials" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Transformational Stories</h1>
          <p className="hero-subtitle">Witness the healing journeys of our students and clients</p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="testimonials-container">
        <h2 className="section-title">Video Testimonials</h2>
        <p className="section-description">
          Real experiences from people who have transformed their lives through Pranic Healing
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
             <div className="testimonial-card" key={testimonial.id}>
      <div className="video-wrapper">
        {/* Desktop - Embedded Video from local device */}
        <div className="desktop-video">
          <video
            controls
            title={testimonial.title}
            className="local-video"
          >
            <source src={testimonial.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

                
                {/* Mobile - Thumbnail with Play Button */}
                <div className="mobile-video">
                  <img src={testimonial.thumbnail} alt={testimonial.title} />
                  <div className="play-button">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="testimonial-info">
                <h3>{testimonial.title}</h3>
                <p>{testimonial.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
// TestimonialsSection.jsx
import React from 'react';
import './testimonies.css';

const videoData = [
  { title: 'Inspiring Journey', url: 'https://www.youtube.com/embed/VIDEO_ID_1' },
  { title: 'Customer Review', url: 'https://www.youtube.com/embed/VIDEO_ID_2' },
  { title: 'Success Story', url: 'https://www.youtube.com/embed/VIDEO_ID_3' },
  { title: 'Client Experience', url: 'https://www.youtube.com/embed/VIDEO_ID_4' },
  { title: 'Real Feedback', url: 'https://www.youtube.com/embed/VIDEO_ID_5' },
  { title: 'Behind the Story', url: 'https://www.youtube.com/embed/VIDEO_ID_6' },
  { title: 'Why They Chose Us', url: 'https://www.youtube.com/embed/VIDEO_ID_7' },
  { title: 'Impactful Change', url: 'https://www.youtube.com/embed/VIDEO_ID_8' },
];

const TestimonialsSection = () => {
  return (
<section className="testimonials-section">
  {/* Glowing background blobs */}
  <div className="bg-decorative-shapes"></div>

  {/* Section intro with fade-up animation */}
  <div className="testimonials-header fade-up">
    <img src="/images/testimonies.png" alt="Testimonials" className="header-image" />
    <h2 className="testimonials-title">Testimonial</h2>
  </div>

  {/* Section heading */}
  <h3 className="main-heading fade-up delay-1">Video Testimonials</h3>

  <div className="content-wrapper">
    <div className="videos-wrapper">
      {videoData.map((video, index) => (
        <div className="video-section fade-up delay" style={{ animationDelay: `${index * 0.15}s` }} key={index}>
          <div className="video-card">
            <div className="video-embed-container">
              <iframe
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="video-title">{video.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


  );
};

export default TestimonialsSection;

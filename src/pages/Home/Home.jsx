"use client"

import { useState, useEffect } from "react"
import "./Home.css"

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Welcome to Radiaant",
      subtitle: "Your Journey to Healing Begins Here",
      description: "Discover inner peace and transform your life through our holistic healing approach",
    },
    {
      id: 2,
      title: "Heal • Transform • Grow",
      subtitle: "Ancient Wisdom for Modern Healing",
      description: "Experience the power of traditional healing methods combined with modern understanding",
    },
    {
      id: 3,
      title: "Find Your Inner Light",
      subtitle: "Guided by Compassion",
      description: "Let our experienced masters guide you on your path to emotional and spiritual wellness",
    },
  ]

  const features = [
    {
      title: "Personalized Healing",
      description:
        "Add a little bit of body text that explains your unique approach to panic healing and anxiety management.",
    },
    {
      title: "Expert Guidance",
      description:
        "Add a little bit of body text that describes our qualified professionals and their experience in mental health.",
    },
    {
      title: "Proven Techniques",
      description:
        "Add a little bit of body text that outlines the evidence-based methods we use for lasting recovery.",
    },
  ]

  const testimonials = [
    {
      text: "Add a little bit of body text that shares a client's healing journey and transformation.",
      author: "Client Name",
    },
    {
      text: "Add a little bit of body text that describes how Radiant helped overcome panic attacks.",
      author: "Client Name",
    },
    {
      text: "Add a little bit of body text that expresses gratitude for the healing process and support.",
      author: "Client Name",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="home">
      {/* Image Slider Section */}
      <section className="image-slider">
        <div className="slider-container">
          <div className="slides-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={slide.id} className={`slide ${index === currentSlide ? "active" : ""}`}>
                <div className="slide-content">
                  <div className="slide-text">
                    <h1 className="slide-title gradient-text">{slide.title}</h1>
                    <h2 className="slide-subtitle">{slide.subtitle}</h2>
                    <p className="slide-description">{slide.description}</p>
                  </div>
                  <div className="slide-background">
                    <div className="lotus-animation">
                      <div className="lotus-petal petal-1"></div>
                      <div className="lotus-petal petal-2"></div>
                      <div className="lotus-petal petal-3"></div>
                      <div className="lotus-petal petal-4"></div>
                      <div className="lotus-petal petal-5"></div>
                      <div className="lotus-petal petal-6"></div>
                      <div className="lotus-petal petal-7"></div>
                      <div className="lotus-petal petal-8"></div>
                      <div className="lotus-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn prev-btn" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button className="slider-btn next-btn" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          <div className="chat-widget">
            <button className="chat-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Chat with us
            </button>
          </div>

          <div className="scroll-indicator">
            <div className="scroll-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 13L12 18L17 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* <span>(Scroll down)</span> */}
          </div>
        </div>
      </section>

      {/* Master Section */}
      <section className="master-section section">
        <div className="container">
          <div className="master-content">
            <div className="master-image animate-fadeInLeft">
              <div className="image-frame">
                <div className="master-photo">
                  <div className="photo-placeholder">
                    <h3>Photo of Master</h3>
                    <p>Spiritual Guide & Healer</p>
                  </div>
                </div>
                <div className="image-glow"></div>
              </div>
            </div>

            <div className="master-details animate-fadeInRight">
              <div className="section-badge">
                <span>Meet Our Master</span>
              </div>
              <h2 className="gradient-text">Guiding Light of Healing</h2>
              <div className="master-info">
                <h3>Master [Name]</h3>
                <p className="master-title">Spiritual Healer & Life Transformation Guide</p>

                <div className="master-description">
                  <p>
                    With over [X] years of dedicated practice in ancient healing arts, our master combines traditional
                    wisdom with modern understanding to guide souls on their journey to inner peace and transformation.
                  </p>

                  <p>
                    Specializing in panic healing, anxiety management, and spiritual awakening, our master has helped
                    thousands of individuals discover their inner strength and find lasting peace.
                  </p>
                </div>

                <div className="master-credentials">
                  <div className="credential-item">
                    <div className="credential-icon">🧘</div>
                    <div className="credential-text">
                      <h4>Meditation Master</h4>
                      <p>25+ years of practice</p>
                    </div>
                  </div>

                  <div className="credential-item">
                    <div className="credential-icon">🌸</div>
                    <div className="credential-text">
                      <h4>Healing Arts</h4>
                      <p>Traditional & Modern Techniques</p>
                    </div>
                  </div>

                  <div className="credential-item">
                    <div className="credential-icon">✨</div>
                    <div className="credential-text">
                      <h4>Life Transformation</h4>
                      <p>1000+ Lives Transformed</p>
                    </div>
                  </div>
                </div>

                <div className="master-actions">
                  <button className="btn btn-primary">Book a Session</button>
                  <button className="btn btn-secondary">Learn More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <div className="scroll-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 13L12 18L17 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* <span>(Scroll down)</span> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="section-header">
            <h2>Our Healing Approach</h2>
            <p>Discover how we can help you find peace and overcome panic</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <div className="icon-placeholder"></div>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section section">
        <div className="container">
          <div className="video-content">
            <h2>Gentle Healing Videos</h2>
            <p>Watch our guided sessions and healing techniques</p>

            <div className="video-container">
              <div className="video-placeholder">
                <div className="play-button">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff0000" />
                    <polygon points="10,8 16,12 10,16" fill="white" />
                  </svg>
                </div>
                <p>Gentle healing videos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-header">
            <h2>Healing Stories</h2>
            <p>Read about the transformative journeys of our clients</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-avatar">
                  <div className="avatar-placeholder"></div>
                </div>
                <p>"{testimonial.text}"</p>
                <h4>- {testimonial.author}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

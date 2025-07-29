"use client"

import { useState, useEffect } from "react"
import "./Home.css"

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

const slides = [
    {
      id: 1,
      // title: "Welcome to Radiaant",
      // subtitle: "Your Journey to Healing Begins Here",
      // description: "Discover inner peace and transform your life through our holistic healing approach",
      image: "images/s3.jpg", width: "200", height: "200"
    },
    {
      id: 2,
      // title: "Fueling success through welllness",
      // subtitle: "A corporate initiative",
      // description: "Experience the power of traditional healing methods combined with modern understanding",
      image: "images/s2.jpg", width: "200", height: "200"
    },
    {
      id: 3,
      // title: "Bhutan Pranic Retreat",
      // subtitle: "Beyond the Physical – Healing Through Energy",
      // description: "Let our experienced masters guide you on your path to emotional and spiritual wellness",
      image: "images/s1.jpg", width: "200", height: "200"
    },
      {
      id: 4,
      // title: "Heal, transform, grow",
      // subtitle: "📍Radiaant Pranic Healing Center, Hiranandani Estat",
      // description: "Experience the power of pranic energy to restore balance, vitality, and inner peace.*",
      image: "images/s4.jpg", width: "200", height: "200"
    },
      
  ]

  const features = [
    {
      title: "Personalized Healing",
      description:
        "At Radiaant, we believe that healing is not one-size-fits-all. Our personalized healing programs are tailored to meet your unique emotional, spiritual, and mental health needs.",
      image: "images/images.jpg"
    },
    {
      title: "Expert Guidance",
      description:
        "Our team of experienced healers, therapists, and spiritual mentors brings decades of wisdom and training to support your journey.",
      image: "images/wellness.jpg"
    },
    {
      title: "Proven Techniques",
      description:
        "At Radiaant, we combine time-tested healing methods with modern, science-backed techniques to ensure deep and lasting results.",
      image: "images/spiritual.jpg"
    }
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
        <div
  key={slide.id}
  className={`slide ${index === currentSlide ? "active" : ""}`}
  style={{ backgroundImage: `url(/${slide.image})` }}
>

          <div className="slide-content">
            <div className="slide-text">
              <h1 className="slide-title gradient-text">{slide.title}</h1>
              <h2 className="slide-subtitle">{slide.subtitle}</h2>
              <p className="slide-description">{slide.description}</p>
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
  <a
    href="https://wa.me/919999999999" // Replace with your actual WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="chat-btn"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/733/733585.png" // WhatsApp icon (or use your own local icon)
      alt="WhatsApp"
      className="chat-icon"
    />
    <span className="chat-text">Chat with us</span>
  </a>
</div>


          {/* <div className="scroll-indicator">
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
            <span>(Scroll down)</span>
          </div> */}
        </div>
      </section>

{/* master section */}
<section className="master-section">
  <div className="master-container">
    
    {/* ✅ Centered Title Across Section */}
    <h1 className="main-title">
      The founder of modern Pranic Healing<br />and Arhatic yoga
    </h1>

    <div className="master-image">
      <div className="image-wrapper">
        <img 
          src="/images/bg.png" 
          alt="Mandala Background" 
          className="bg-circle" 
        />
        <img 
          src="/images/master2.jpg" 
          alt="Grand Master Choa Kok Sui" 
          className="master-circle" 
        />
      </div>
    </div>

    <div className="master-content">
      <h2 className="master-name">Grand Master Choa Kok Sui</h2>

      <div className="quote-box">
        <img src="/images/l1.png" alt="Quote Icon" className="quote-icon" />
        <em>
          “Regulate your mind. Do not worry<br />
          excessively about the future. If you<br />
          have done everything that has to be<br />
          done, the future will take care of itself.”
        </em>
      </div>

      <p className="description">
        Grand Master Choa Kok Sui (GMCKS) was a visionary spiritual teacher, scientist, and humanitarian who founded Modern Pranic Healing and Arhatic Yoga. Through years of dedicated research and spiritual practice, he developed a structured, scientific, and highly effective no-touch energy healing system that is now practiced in over 120 countries. <br /><br />
        Beyond healing, Grand Master Choa’s mission was to empower individuals to live more meaningful lives through inner purification, service, and spiritual growth. His legacy lives on through the World Pranic Healing Foundation and the Institute for Inner Studies.
      </p>
    </div>
  </div>
</section>





<section className="pranic-section">
  <div className="pranic-container">
    {/* Title & Description */}
    <div className="pranic-content">
      <h2 className="title">What is Pranic Healing</h2>
      <p className="description">
        Pranic Healing is a modern, fresh, and scientific approach towards energy and healing.
        <strong> Pranic Healing</strong> is a powerful and effective no-touch-no-drug energy healing technique.
        It is a blend of ancient healing methods that were rediscovered, researched and tested for over 20 years with proven success by
        <strong> Grand Master Choa Kok Sui</strong> – the founder of Modern Pranic Healing and Arhatic Yoga.
        Pranic Healing as a science came into existence in 1987.
      </p>
    </div>

    {/* Mandala + Hands */}
    <div className="pranic-image">
      <div className="mandala-circle">
        <img src="/images/pranic_Healing.png" alt="Mandala" className="mandala" />
        <img src="/images/pranic.png" alt="Healing Hands" className="hands" />
      </div>
    </div>
  </div>

  {/* Scroll Icon */}
  <div className="scroll-indicator">
    <span className="arrow">&#x25BC;</span>
    <span className="text">(Scroll down)</span>
  </div>

  {/* Healing Cards */}
  <div className="healing-points">
  <div className="point">
    <img src="/images/pranic1.jpg" alt="Master with aura" />
    <div className="point-text">
      <p>« Master Choa developed an easy-to-learn scientific system which has shown to have positive results on the overall quality of life and well-being of an individual.</p>
    </div>
  </div>
  <div className="point">
    <img src="/images/pranic2.jpg" alt="Energy hand" />
    <div className="point-text">
      <p>« Pranic Healing is based on the fundamental principle that the body is a self-repairing entity that is capable of healing itself. The principle behind pranic healing is transference of energy.</p>
    </div>
  </div>
  <div className="point">
    <img src="/images/pranic3.jpg" alt="Healing light" />
    <div className="point-text">
      <p>« With Pranic Healing, we are assisting the body’s energy system to normalize so that the body can heal itself. If there are blockages in the energy field, the healer removes these; if there is less energy we give some back.</p>
    </div>
  </div>
</div>
</section>






      
      {/* Video Section */}
      <section className="video-section section">
        <div className="container">
          <div className="video-content">
            <h2>Sarika ma’am  Videos</h2>
            <p>Watch our guided sessions and healing techniques</p>

            <div className="video-container" >
              <div className="video-placeholder">
                  <iframe
           src="https://www.youtube.com/embed/7oWnN8F56LE"
           title="Pranic Healing Video"
          // height="432px" width="800px"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen
          ></iframe>
                <p>Gentle healing videos</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="courses-section" id="courses">
  <div className="container">
    <h2 className="section-title">Courses We Offer</h2>
    
    <div className="courses-grid">
      <a href="/courses" className="course-card">
        <div className="course-image-wrapper">
          <img src="/images/Course1.jpg" alt="Prosperity Series" className="course-image" />
        </div>
        <h3 className="course-name">Prosperity Series</h3>
      </a>

      <a href="/courses" className="course-card">
        <div className="course-image-wrapper">
          <img src="/images/Course2.jpg" alt="Healing Series" className="course-image" />
        </div>
        <h3 className="course-name">Healing Series</h3>
      </a>

      <a href="/courses" className="course-card">
        <div className="course-image-wrapper">
          <img src="/images/Course3.jpg" alt="Spirituality Series" className="course-image" />
        </div>
        <h3 className="course-name">Spirituality Series</h3>
      </a>
    </div>
  </div>

  {/* Disclaimer Section */}
  <div className="disclaimer-section">
    <div className="container">
      <div className="disclaimer-content">
        <p className="disclaimer-text">
          * Results may vary from person to person based on individual practice and application of techniques.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      {/* <section className="testimonials section">
        <div className="container">
          <div className="section-header">
            <h2>Courses We Offer</h2>
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
      </section> */}

      {/* <section class="courses-offer">
  <h2 class="section-title">Courses We Offer</h2>
  <div class="course-grid">
    <div class="course-item">
      <img src="prosperity.jpg" alt="Prosperity Series" />
      <p>prosperity series</p>
    </div>
    <div class="course-item">
      <img src="healing.jpg" alt="Healing Series" />
      <p>healing series</p>
    </div>
    <div class="course-item">
      <img src="spirituality.jpg" alt="Spirituality Series" />
      <p>spirituality series</p>
    </div>
  </div>
</section> */}


    </div>
  )
}

export default Home

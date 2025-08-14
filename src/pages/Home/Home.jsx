"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"; // Add this import
import "./Home.css"

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

 const slides = [
       {
      id: 1,
      title: "Welcome to Radiaant Pranic Healing Centre",
      titleStyle: {
        color: "#ffffff",
        fontfamily: "Playfair Display', serif",
        fontSize: "65px",
        textAlign: "center",
        marginLeft: "2%",
        marginRight: "2%",
        marginTop: "-10px",
        textShadow: "3px 3px 6px rgba(171, 161, 161, 0.5)"
      },
      subtitle: "Rooted in Gratitude, Growing in Service",
      subtitleStyle: {
        color: "#ffffff",
        fontfamily: "Playfair Display', serif",
        fontSize: "39px",
        textAlign: "center",
        marginLeft: "20px",
        marginTop: "-20px",
        fontWeight: "300",
        letterSpacing: "2px"
      },
      image: "images/s1.jpg",
      // topLeftText: "New Arrival",
      topLeftStyle: {
        backgroundColor: "#ff6b6b",
        color: "#ffffff",
        fontfamily: "Playfair Display', serif",
      }
    },
    {
      id: 2,
      title: "Empowering Those Who Safeguard Us",
      titleStyle: {
        color: "#ffffff",
        fontFamily: "sans-serif",
        fontSize: "65px",
        textAlign: "Rightr",
        marginLeft: "170px",
        marginRight: "-10",
        marginTop: "30%",
        textShadow: "3px 3px 6px rgba(0,0,0,0.5)"
      },
      subtitle: "A Mumbai crime branch initiative ",
      subtitleStyle: {
        color: "#f8f8f8ff",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "40px",
        textAlign: "center",
        marginLeft: "5px",
        marginTop: "-10px",
        fontWeight: "100",
        letterSpacing: "2px"
      },
      image: "images/s2.jpg",
      // topLeftText: "New Arrival",
      topLeftStyle: {
        backgroundColor: "#ff6b6b",
        color: "#ffffff",
        fontFamily: "'Poppins', sans-serif"
      }
    },
    {
      id: 3,
      title: "Bridging Spirituality and service",
      titleStyle: {
        color: "#ffffffff",
        fontFamily: "sans-serif",
        fontSize: "65px",
        textAlign: "center",
        marginTop: "10px",
        marginLeft: "350px",
        letterSpacing: "3px"
      },
      subtitle: "Beyond the Physical – Healing Through Energy",
      subtitleStyle: {
        color: "#ffffffff",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "35px",
        textAlign: "center",
        marginTop: "-15px",
        fontWeight: "300",
        marginLeft: "320px"
      },
      image: "images/s3.jpg",
      topLeftText: "Retreat",
      topLeftStyle: {
        backgroundColor: "#ffe66d",
        color: "#000000",
        fontFamily: "'Quicksand', sans-serif"
      }
    },
    {
      id: 4,
      title: " Finding calm in the heart of the workplace ",
      titleStyle: {
        color: "#ffffff",
        fontFamily: "sans-serif",
        fontSize: "60px",
        marginLeft: "180px",
        marginRight: "45px",
        marginTop: "1%",
        textShadow: "3px 3px 6px rgba(0,0,0,0.5)"
      },
      subtitle: "A corporate initiative",
      subtitleStyle: {
        color: "#f8f8f8ff",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "40px",
        textAlign: "center",
        marginLeft: "2%",
        marginTop: "-20px",
        fontWeight: "300",
        letterSpacing: "2px"
      },
      image: "images/s4.jpg",
      // topLeftText: "New Arrival",
      topLeftStyle: {
        backgroundColor: "#ff6b6b",
        color: "#ffffff",
        fontFamily: "'Poppins', sans-serif"
      }
    },
    {
      id: 5,
      title: "Empowring minds with the wisdom of energy.",
      titleStyle: {
        color: "#ffffff",
        fontFamily: "sans-serif",
        fontSize: "56px",
        textAlign: "Rightr",
        marginLeft: "12%",
        marginRight: "2%",
        marginTop: "1%",
        textShadow: "3px 3px 6px rgba(0,0,0,0.5)"
      },
      subtitle: "A radiaant Pranic healing workshop ",
      subtitleStyle: {
        color: "#f8f8f8ff",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "40px",
        textAlign: "center",
        marginLeft: "5%",
        marginTop: "-15px",
        fontWeight: "300",
        letterSpacing: "2px"
      },
      image: "images/s5.jpg",
      // topLeftText: "New Arrival",
      topLeftStyle: {
        backgroundColor: "#ff6b6b",
        color: "#ffffff",
        fontFamily: "'Poppins', sans-serif"
      }
    },
    {
      id: 6,
      title: " Nurturing communities through the power of energy",
      titleStyle: {
        color: "#ffffff",
        fontFamily: "sans-serif",
        fontSize: "48px",
        textAlign: "Rightr",
        marginLeft: "10%",
        marginRight: "2%",
        marginTop: "1%",
        textShadow: "3px 3px 6px rgba(0,0,0,0.5)"
      },
      subtitle: "Commenement by the Prime Minister of Bhutan",
      subtitleStyle: {
        color: "#f8f8f8ff",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "30px",
        textAlign: "center",
        marginLeft: "-2%",
        marginTop: "-10px",
        fontWeight: "300",
        letterSpacing: "2px"
      },
      image: "images/s6.jpg",
      // topLeftText: "New Arrival",
      topLeftStyle: {
        backgroundColor: "#ff6b6b",
        color: "#ffffff",
        fontFamily: "'Poppins', sans-serif"
      }
    },
  //   {
  //     id: 7,
  //     title: "Spreading Light, One Soul at a Time.",
  //     titleStyle: {
  //       color: "#ffffff",
  //       fontFamily: "'Playfair Display', serif",
  //       fontSize: "4.5rem",
  //       textAlign: "Rightr",
  //       marginLeft: "18%",
  //       marginRight:"2%",
  //       marginTop: "0%",
  //       textShadow: "3px 3px 6px rgba(0,0,0,0.5)"
  //     },
  //     subtitle: "Commenement by the Prime Minister of Bhutan",
  //     subtitleStyle: {
  //       color: "#f8f8f8ff",
  //       fontFamily: "'Montserrat', sans-serif",
  //       fontSize: "2rem",
  //       textAlign: "center",
  //       marginLeft: "45%",
  //       marginTop: "1%",
  //       fontWeight: "300",
  //       letterSpacing: "2px"
  //     },
  //     image: "images/s7.jpg",
  //     // topLeftText: "New Arrival",
  //     topLeftStyle: {
  //       backgroundColor: "#ff6b6b",
  //       color: "#ffffff",
  //       fontFamily: "'Poppins', sans-serif"
  //     }
  //   },
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
      id: 1,
      title: "A DOCTOR'S EXPERIENCE",
      content: "Dr. Vrinda Raikar, an esteemed eye surgeon had an auto immune disorder and a painful knee...",
      video: "/videos/doctor-testimonial.mp4",
      thumbnail: "/images/doctor-thumb.jpg",
      quote: "La kaci jie instructor to heal me",
      author: "Dr. Vrinda Raikar"
    },
    {
      id: 2,
      title: "WHY ATTEND CLASS?",
      content: "Thousands of people from all walks of life have attended Pranic Healing classes...",
      video: "/videos/class-testimonial.mp4",
      thumbnail: "/images/class-thumb.jpg",
      quote: "Changed my life completely",
      author: "John Smith"
    },
    {
      id: 3,
      title: "ENERGY HEALING TRANSFORMATION",
      content: "After just 3 sessions, my chronic back pain disappeared completely...",
      video: "/videos/energy-testimonial.mp4",
      thumbnail: "/images/energy-thumb.jpg",
      quote: "Miraculous results",
      author: "Sarah Johnson"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
      <section className="image-slider">
        <div className="slider-container">
          <div className="slides-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${index === currentSlide ? "active" : ""}`}
                style={{ backgroundImage: `url(/${slide.image})` }}
              >
                {/* Top Left Tag */}
                {slide.topLeftText && (
                  <div 
                    className="top-left-tag"
                    style={slide.topLeftStyle}
                  >
                    {slide.topLeftText}
                  </div>
                )}

                <div className="slide-content">
                  <h1 className="slide-title" style={slide.titleStyle}>
                    {slide.title}
                  </h1>
                  <h2 className="slide-subtitle" style={slide.subtitleStyle}>
                    {slide.subtitle}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons and dots */}
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
          
          {/* <button className="slider-btn prev-btn" onClick={prevSlide}>
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
          </div> */}

          <div className="chat-widget">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="chat-btn"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
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
  {/* <div className="scroll-indicator">
    <span className="arrow">&#x25BC;</span>
    <span className="text">(Scroll down)</span>
  </div> */}

  {/* Healing Cards */}
  <div className="healing-points">
  <div className="point">
    <img src="/images/pranic1.jpg" alt="Master with aura" />
    <div className="point-text">
      <p>Master Choa developed an easy-to-learn scientific system which has shown to have positive results on the overall quality of life and well-being of an individual.</p>
    </div>
  </div>
  <div className="point">
    <img src="/images/pranic2.jpg" alt="Energy hand" />
    <div className="point-text">
      <p>Pranic Healing is based on the fundamental principle that the body is a self-repairing entity that is capable of healing itself. The principle behind pranic healing is transference of energy.</p>
    </div>
  </div>
  <div className="point">
    <img src="/images/pranic3.jpg" alt="Healing light" />
    <div className="point-text">
      <p>With Pranic Healing, we are assisting the body’s energy system to normalize so that the body can heal itself. If there are blockages in the energy field, the healer removes these; if there is less energy we give some back.</p>
    </div>
  </div>
</div>
</section>






      
      {/* Video Section */}
      <section className="video-section section">
        <div className="container">
          <div className="video-content">
            <h2>Understanding Pranic Healing with Sarika Biwalkar </h2>
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
                {/* <p>Gentle healing videos</p> */}
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
        <div className="course-glow"></div>
        <div className="course-image-wrapper">
          <img src="/images/Course1.jpg" alt="Prosperity Series" className="course-image" />
        </div>
        <h3 className="course-name">Prosperity Series</h3>
      </a>

      <a href="/courses" className="course-card">
        <div className="course-glow"></div>
        <div className="course-image-wrapper">
          <img src="/images/Course2.jpg" alt="Healing Series" className="course-image" />
        </div>
        <h3 className="course-name">Healing Series</h3>
      </a>

      <a href="/courses" className="course-card">
        <div className="course-glow"></div>
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

{/* Testimonials Slider Section */}
      <section className="home-testimonials">
        <div className="container">
          <div className="section-header">
            <h2>LIFE CHANGING EXPERIENCES</h2>
            <p className="subtitle">WELCOME TO THE WORLD OF PRANIC HEALING</p>
            <p className="description">
              Join people from different walks of life, ages, professions, all experience 
              the magic of Pranic Healing.
            </p>
          </div>

          <div className="testimonials-slider">
            <button className="slider-arrow prev" onClick={prevTestimonial}>
              &lt;
            </button>
            
            <div className="slider-track">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}
                >
                  <div className="testimonial-card">
                    <div className="video-container">
                      <video 
                        controls 
                        poster={testimonial.thumbnail}
                        onClick={(e) => e.preventDefault()}
                      >
                        <source src={testimonial.video} type="video/mp4" />
                      </video>
                    </div>
                    <div className="testimonial-content">
                      <h3>{testimonial.title}</h3>
                      <p>{testimonial.content}</p>
                      <div className="quote">
                        "{testimonial.quote}"
                        <span>- {testimonial.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="slider-arrow next" onClick={nextTestimonial}>
              &gt;
            </button>
          </div>

          <div className="view-more">
            <Link to="/testimonials" className="view-more-btn">
              View More Testimonials
            </Link>
          </div>
        </div>
      </section>


    
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

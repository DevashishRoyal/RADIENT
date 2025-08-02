import { useEffect } from 'react';
import './Courses.css';

const CoursesPage = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.course-section');
      elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          el.classList.add('course-animate');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="course-page-container">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="course-hero-container">
          <img 
            src="/images/Course2.jpg" 
            alt="Pranic Healing Courses" 
            className="course-hero-image" 
            loading="eager"
          />
          <div className="course-hero-overlay"></div>
          <div className="course-hero-content">
            <h1 className="course-main-title">COURSES</h1>
            <p className="course-hero-subtitle">Transform your life through energy healing</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="course-intro">
        <div className="container">
          <p className="course-intro-text">
            Pranic Healing offers a comprehensive range of courses designed to help you harness energy for healing, spiritual growth, and prosperity. 
            Each series is carefully structured to provide practical techniques and profound wisdom from Grand Master Choa Kok Sui.
          </p>
        </div>
      </section>

      {/* Healing Series */}
      <section className="course-section course-healing">
        <div className="container">
          <div className="course-header">
            <h2 className="course-section-title">Healing Series</h2>
            <div className="course-section-divider"></div>
            <p className="course-section-subtitle">
              Restore physical, emotional, and spiritual balance through energy healing
            </p>
          </div>

          <div className="course-image-gallery">
            {[1, 2, 3].map((num) => (
              <div key={num} className="course-gallery-item">
                <div className="course-image-container">
                  <img 
                    src={`/images/healing${num}.jpg`} 
                    alt={`Healing ${num}`} 
                    className="course-item-image"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="course-content-grid">
            <div className="course-description-box">
              <div className="course-quote-box">
                <p className="course-quote-text">
                  <em>"Pranic Healing is a bridge to spirituality"</em>
                </p>
                <p className="course-quote-author">– GMCKS</p>
              </div>
              <div className="course-description">
                <p>The Healing Series in Pranic Healing restores physical, emotional, and spiritual balance. Using ancient principles and modern tools, it empowers self-healing and transformation. The Healing Series is a transformative initiative by Pranic Healing that offers individuals a guided path toward physical, emotional, and mental well-being. Whether one is dealing with stress, physical ailments, emotional imbalances, or simply seeking inner peace, the Healing Series provides powerful, step-by-step support.</p>
                <p>At Radiant Pranic Healing Center, we believe that healing is more than recovery—it's transformation from within.</p>
              </div>
            </div>
            
            <div className="course-listing-box">
              <div className="course-listing-header">
                <h3 className="course-listing-title">Available Courses</h3>
                <div className="course-listing-divider"></div>
              </div>
              <ul className="course-list">
                {['Self Pranic Healing', 'Basic Pranic Healing', 'Advanced Pranic Healing', 
                  'Pranic Psychotherapy', 'Pranic Crystal Healing', 'Facial & Body Sculpting', 
                  'Psychic Self Defence'].map((course) => (
                  <li key={course} className="course-list-item">
                    <a href="#" className="course-link">
                      <span className="course-link-icon">→</span>
                      <span className="course-link-text">{course}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Series */}
      <section className="course-section course-spiritual">
        <div className="container">
          <div className="course-header">
            <h2 className="course-section-title">Spiritual Series</h2>
            <div className="course-section-divider"></div>
            <p className="course-section-subtitle">
              Awaken your inner light and connect with higher consciousness
            </p>
          </div>

          <div className="course-image-gallery">
            {[1, 2, 3].map((num) => (
              <div key={num} className="course-gallery-item">
                <div className="course-image-container">
                  <img 
                    src={`/images/spiritual${num}.jpg`} 
                    alt={`Spiritual ${num}`} 
                    className="course-item-image"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="course-content-grid">
            <div className="course-description-box">
              <div className="course-quote-box">
                <p className="course-quote-text">
                  <em>"Spirituality is a way of life. It is not just doing meditation."</em>
                </p>
                <p className="course-quote-author">– GMCKS</p>
              </div>
              <div className="course-description">
                <p>In Pranic Healing, spirituality means conscious awakening. It aligns you with inner light and higher truths—beyond rituals and ego. The Spiritual Series in Pranic Healing is a sacred journey inward—designed for those seeking to strengthen their connection with the soul and higher energies. Through a sequence of guided meditations, teachings, and energy practices, participants learn to awaken their inner light, deepen spiritual awareness, and experience a greater sense of purpose and peace. Rooted in the timeless wisdom of Master Choa Kok Sui, this series is ideal for anyone yearning for clarity, inner stillness, and a more meaningful relationship with the Divine. The Spiritual Series doesn't just uplift—it transforms.</p>
                <p>Discover the soul's divine purpose and live with compassion, service, and love.</p>
              </div>
            </div>
            
            <div className="course-listing-box">
              <div className="course-listing-header">
                <h3 className="course-listing-title">Available Courses</h3>
                <div className="course-listing-divider"></div>
              </div>
              <ul className="course-list">
                {['Achieving Oneness with the Higher Soul', 'Arhatic Yoga Preparatory', 
                  'Om Mani Padme Hum', 'Spiritual Essence of Man', 'Meditation on the Lord\'s Prayer',
                  'Inner Hinduism Techniques', 'Inner Buddhism Techniques', 'Inner Christianity Techniques',
                  'Arhatic Sexual Alchemy', 'Higher Clairvoyance'].map((course) => (
                  <li key={course} className="course-list-item">
                    <a href="#" className="course-link">
                      <span className="course-link-icon">→</span>
                      <span className="course-link-text">{course}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prosperity Series */}
      <section className="course-section course-prosperity">
        <div className="container">
          <div className="course-header">
            <h2 className="course-section-title">Prosperity Series</h2>
            <div className="course-section-divider"></div>
            <p className="course-section-subtitle">
              Attract abundance and success through energy principles
            </p>
          </div>

          <div className="course-image-gallery">
            {[1, 2, 3].map((num) => (
              <div key={num} className="course-gallery-item">
                <div className="course-image-container">
                  <img 
                    src={`/images/prosperity${num}.jpg`} 
                    alt={`Prosperity ${num}`} 
                    className="course-item-image"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="course-content-grid">
            <div className="course-description-box">
              <div className="course-quote-box">
                <p className="course-quote-text">
                  <em>"Prosperity is a result of service and the intelligent application of energy."</em>
                </p>
                <p className="course-quote-author">– GMCKS</p>
              </div>
              <div className="course-description">
                <p>The Prosperity Series is a unique offering from Pranic Healing that focuses on clearing energetic blockages related to wealth, success, and abundance. Through powerful techniques and teachings by Master Choa Kok Sui, participants learn how to harness spiritual principles to attract prosperity, improve finances, and create a more fulfilling life. This series blends energy healing, inner work, and practical wisdom to help individuals align their thoughts and energy with abundance. It's more than financial growth—it's about cultivating a mindset and energy field that naturally draws success.</p>
                <p>Abundance flows when energy is clear, focused, and aligned. Pranic Prosperity teachings guide you to cleanse mental blocks and attract opportunities. Shift inner energy, and manifest material and spiritual wealth with ease.</p>
              </div>
            </div>
            
            <div className="course-listing-box">
              <div className="course-listing-header">
                <h3 className="course-listing-title">Available Courses</h3>
                <div className="course-listing-divider"></div>
              </div>
              <ul className="course-list">
                {['Spiritual Business Management', 'Kriyashakti', 
                  'Success & Energy Techniques', 'Removing Financial Blocks'].map((course) => (
                  <li key={course} className="course-list-item">
                    <a href="#" className="course-link">
                      <span className="course-link-icon">→</span>
                      <span className="course-link-text">{course}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="course-cta">
        <div className="container">
          <h3 className="course-cta-title">Ready to Begin Your Healing Journey?</h3>
          <p className="course-cta-text">
            Explore our courses and discover how Pranic Healing can transform your life
          </p>
          <button className="course-cta-button">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
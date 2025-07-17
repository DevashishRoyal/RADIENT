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
        <div className="course-hero-image-wrapper">
          <img 
            src="/images/Course2.jpg" 
            alt="Pranic Healing Courses" 
            className="course-hero-image" 
            loading="eager"
          />
          <div className="course-hero-overlay" />
          <div className="course-hero-content">
            <h1 className="course-main-title">COURSES</h1>
          </div>
        </div>
      </section>

      {/* Healing Series */}
      <section className="course-section course-healing">
        <div className="course-bg-image" style={{backgroundImage: "url('/images/healing-bg.jpg')"}}></div>
        <h2 className="course-section-title">Healing Series</h2>
        
        <div className="course-image-gallery">
          {[1, 2, 3].map((num) => (
            <div key={num} className="course-gallery-item">
              <img 
                src={`/images/healing${num}.jpg`} 
                alt={`Healing ${num}`} 
                className="course-item-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="course-content-grid">
          <div className="course-quote-box">
            <p className="course-quote-text"><em>"Pranic Healing is a bridge to spirituality"</em></p>
            <p className="course-quote-author">– GMCKS</p>
            <div className="course-description">
              <p>The Healing Series in Pranic Healing restores physical, emotional, and spiritual balance. Using ancient principles and modern tools, it empowers self-healing and transformation.</p>
              <p>At Radiant Pranic Healing Center, we believe that healing is more than recovery—it's transformation from within.</p>
            </div>
          </div>
          
          <div className="course-listing-box">
            <h3 className="course-listing-title">Available Courses</h3>
            <ul className="course-list">
              {['Self Pranic Healing', 'Basic Pranic Healing', 'Advanced Pranic Healing', 
                'Pranic Psychotherapy', 'Pranic Crystal Healing', 'Facial & Body Sculpting', 
                'Psychic Self Defence'].map((course) => (
                <li key={course} className="course-list-item">
                  <a href="#" className="course-link">
                    <span className="course-link-icon">✦</span>
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Spiritual Series */}
      <section className="course-section course-spiritual">
        <div className="course-bg-image" style={{backgroundImage: "url('/images/spiritual-bg.jpg')"}}></div>
        <h2 className="course-section-title">Spiritual Series</h2>
        
        <div className="course-image-gallery">
          {[1, 2, 3].map((num) => (
            <div key={num} className="course-gallery-item">
              <img 
                src={`/images/spiritual${num}.jpg`} 
                alt={`Spiritual ${num}`} 
                className="course-item-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="course-content-grid">
          <div className="course-quote-box">
            <p className="course-quote-text"><em>"Spirituality is a way of life. It is not just doing meditation."</em></p>
            <p className="course-quote-author">– GMCKS</p>
            <div className="course-description">
              <p>In Pranic Healing, spirituality means conscious awakening. It aligns you with inner light and higher truths—beyond rituals and ego.</p>
              <p>Discover the soul's divine purpose and live with compassion, service, and love.</p>
            </div>
          </div>
          
          <div className="course-listing-box">
            <h3 className="course-listing-title">Available Courses</h3>
            <ul className="course-list">
              {['Achieving Oneness with the Higher Soul', 'Arhatic Yoga Preparatory', 
                'Om Mani Padme Hum', 'Spiritual Essence of Man', 'Meditation on the Lord\'s Prayer',
                'Inner Hinduism Techniques', 'Inner Buddhism Techniques', 'Inner Christianity Techniques',
                'Arhatic Sexual Alchemy', 'Higher Clairvoyance'].map((course) => (
                <li key={course} className="course-list-item">
                  <a href="#" className="course-link">
                    <span className="course-link-icon">✦</span>
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Prosperity Series */}
      <section className="course-section course-prosperity">
        <div className="course-bg-image" style={{backgroundImage: "url('/images/prosperity-bg.jpg')"}}></div>
        <h2 className="course-section-title">Prosperity Series</h2>
        
        <div className="course-image-gallery">
          {[1, 2, 3].map((num) => (
            <div key={num} className="course-gallery-item">
              <img 
                src={`/images/prosperity${num}.jpg`} 
                alt={`Prosperity ${num}`} 
                className="course-item-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="course-content-grid">
          <div className="course-quote-box">
            <p className="course-quote-text"><em>"Prosperity is a result of service and the intelligent application of energy."</em></p>
            <p className="course-quote-author">– GMCKS</p>
            <div className="course-description">
              <p>Abundance flows when energy is clear, focused, and aligned. Pranic Prosperity teachings guide you to cleanse mental blocks and attract opportunities.</p>
              <p>Shift inner energy, and manifest material and spiritual wealth with ease.</p>
            </div>
          </div>
          
          <div className="course-listing-box">
            <h3 className="course-listing-title">Available Courses</h3>
            <ul className="course-list">
              {['Spiritual Business Management', 'Kriyashakti', 
                'Success & Energy Techniques', 'Removing Financial Blocks'].map((course) => (
                <li key={course} className="course-list-item">
                  <a href="#" className="course-link">
                    <span className="course-link-icon">✦</span>
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
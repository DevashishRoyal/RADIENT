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


{/* Intro Section - Redesigned */}
<section className="document-intro-section">
  <div className="container">
    <div className="document-intro-content">
      <h2 className="document-intro-heading">PRANIC HEALING COURSES</h2>
      <div className="document-intro-divider"></div>
      <p className="document-intro-text">
        <span className="highlight">Pranic Healing courses</span> go beyond just learning techniques—they bring real transformation into every aspect of life. By understanding and working with energy, individuals experience profound shifts in their physical health, emotional resilience, and mental clarity.  
        <br /><br />
        These teachings provide a deeper awareness of how energy influences thoughts, actions, and overall well-being, empowering individuals to take control of their lives with confidence.
        <br /><br />
        Pranic Healing is not just about fixing problems—it is about creating a life of abundance, health, and harmony. Those who embark on this journey find themselves more attuned to their relationships, careers, and personal aspirations. With each level of learning, they cultivate greater awareness, unlock their potential, and move toward a more meaningful existence.
      </p>
    </div>
  </div>
</section>


      {/* Healing Series */}
<section className="document-style-section">
  <div className="container">
    <div className="document-style-header">
      <h2 className="document-style-title">HEALING SERIES</h2>
      <div className="document-style-divider"></div>
      <p className="document-style-subtitle">
        A ground breaking series of workshops that teach you how to heal yourself & others physically, emotionally & psychologically, using the universal laws of energy.
      </p>
      <p className="document-style-subtitle">
        Never revealed before secrets of advanced healing techniques plus an easy to understand experiential manner of teaching make these classes a must do.
      </p>
    </div>

    <div className="document-style-grid">
      <div className="document-style-image-column">
        <img src="/images/healing2.jpg" alt="Healing Workshop" className="document-style-featured-image"/>
      </div>
      
      <div className="document-style-content-column">
        <div className="document-style-course-list">
          {['Self Pranic Healing', 'Basic Pranic Healing', 'Advanced Pranic Healing', 
            'Pranic Psychotherapy', 'Pranic Crystal Healing', 'Pranic Facial and Body Sculpting', 
            'Psychic Self Defence'].map((course) => (
            <div key={course} className="document-style-course-item">
              <div className="document-style-course-bullet">•</div>
              <div className="document-style-course-name">{course}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* Spiritual Series */}
<section className="document-style-section spiritual-bg">
  <div className="container">
    <div className="document-style-header">
      <h2 className="document-style-title">SPIRITUAL SERIES</h2>
      <div className="document-style-divider"></div>
      <p className="document-style-subtitle">
        Advanced teachings for spiritual development and higher consciousness awakening through ancient energy techniques.
      </p>
      <p className="document-style-subtitle">
        Master the subtle energies that govern spiritual growth and soul evolution.
      </p>
    </div>

    <div className="document-style-grid reversed">
      <div className="document-style-image-column">
        <img src="/images/prosperity3.jpg" alt="Spiritual Workshop" className="document-style-featured-image"/>
      </div>
      
      <div className="document-style-content-column">
        <div className="document-style-course-list">
          {['Achieving Oneness with the Higher Soul', 'Arhatic Yoga Preparatory', 
            'Om Mani Padme Hum', 'Spiritual Essence of Man', 'Meditation on the Lord\'s Prayer',
            'Inner Hinduism Techniques', 'Inner Buddhism Techniques', 'Inner Christianity Techniques',
            'Arhatic Sexual Alchemy', 'Higher Clairvoyance'].map((course) => (
            <div key={course} className="document-style-course-item">
              <div className="document-style-course-bullet">•</div>
              <div className="document-style-course-name">{course}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* Prosperity Series */}
<section className="document-style-section prosperity-bg">
  <div className="container">
    <div className="document-style-header">
      <h2 className="document-style-title">PROSPERITY SERIES</h2>
      <div className="document-style-divider"></div>
      <p className="document-style-subtitle">
        Transform your relationship with abundance using energetic principles that attract wealth and success.
      </p>
      <p className="document-style-subtitle">
        Remove subconscious blocks to prosperity and align with universal abundance flows.
      </p>
    </div>

    <div className="document-style-grid">
      <div className="document-style-image-column">
        <img src="/images/prosperity1.jpg" alt="Prosperity Workshop" className="document-style-featured-image"/>
      </div>
      
      <div className="document-style-content-column">
        <div className="document-style-course-list">
          {['Spiritual Business Management', 'Kriyashakti', 
            'Success & Energy Techniques', 'Removing Financial Blocks'].map((course) => (
            <div key={course} className="document-style-course-item">
              <div className="document-style-course-bullet">•</div>
              <div className="document-style-course-name">{course}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      {/* <section className="course-cta">
        <div className="container">
          <h3 className="course-cta-title">Ready to Begin Your Healing Journey?</h3>
          <p className="course-cta-text">
            Explore our courses and discover how Pranic Healing can transform your life
          </p>
          <button className="course-cta-button">Contact Us</button>
        </div>
      </section> */}
    </div>
  );
};

export default CoursesPage;
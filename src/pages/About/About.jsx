import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  // Animation on scroll effect
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in, .founder-container, .project-card');
      elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          el.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  // Image slider functionality
  useEffect(() => {
    const initSliders = () => {
      document.querySelectorAll('.project-card').forEach((card) => {
        const slider = card.querySelector('.image-slider1');
        const slides = card.querySelectorAll('.slide');
        const prevBtn = card.querySelector('.prev-btn');
        const nextBtn = card.querySelector('.next-btn');
        let currentSlide = 0;
        
        const goToSlide = (slideIndex) => {
          if (slider) {
            slider.style.transform = `translateX(-${slideIndex * 100}%)`;
            currentSlide = slideIndex;
          }
        };
        
        if (prevBtn && nextBtn) {
          prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(currentSlide);
          });
          
          nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            goToSlide(currentSlide);
          });
        }
        
        // Initialize first slide
        if (slider) goToSlide(0);
      });
    };
    
    initSliders();
  }, []);

  // Projects data with multiple images
  const projects = [
    {
      id: 1,
      title: "Wellness at workplace orientation by team Radiaan",
      images: [
        {
          src: "/images/events/event1/Event1.jpeg",
          description: "SM Shetty School Orientation"
        },
        {
          src: "/images/events/event1/Event2.jpeg",
          description: "Parle Tilak school orientation"
        },
        {
          src: "/images/events/event1/Event3.jpeg",
          description: "GP Goenka School orientation for teachers"
        },
        {
          src: "/images/events/event1/Event4.jpeg",
          description: "Orientation for teachers"
        }
      ],
      date: "2023 - Ongoing",
      impact: "500+ Lives Touched",
    },
    {
      id: 2,
      title: "Growth through movement and energy ",
      images: [
       {
          src: "/images/events/event2/event1.jpeg",
          description: "Super Brain Yoga Practice"
        },
        {
          src: "/images/events/event2/event2.jpeg",
          description: "Narayan School A Super Brain Yoga Practice"
        },
        {
          src: "/images/events/event2/event3.jpeg",
          description: "Saraswati School Thane Super Brain Yoga"
        },
      ],
      date: "2022 - 2023",
      impact: "50 Schools Reached",
    },
    {
      id: 3,
      title: "Where Inner Peace Begins",
      images: [
         {
          src: "/images/events/event3/event1.jpeg",
          description: "Healing camp"
        },
        {
          src: "/images/events/event3/event2.jpeg",
          description: "Healing camp at Hiranandani Estate"
        },
        {
          src: "/images/events/event3/event3.jpeg",
          description: "Healing camp"
        },
         {
          src: "/images/events/event3/event4.jpeg",
          description: "Healing camp"
        },
      ],
      date: "2021 - Ongoing",
      impact: "100+ Companies",
    },
    {
      id: 4,
      title: "A Meditation for Every Heart",
      subtitles: "Superbrain Yoga",
      images: [
        {
          src: "/images/events/event4/event1.jpeg",
          description: "Group Twin Hearts meditation"
        },
        {
          src: "/images/events/event4/event2.jpeg",
          description: "Group mediation"
        },
      ],
      date: "2023 - Ongoing",
      impact: "500+ Lives Touched",
    },
    {
      id: 5,
      title: "Bringing Wellness to Every Walk of Life",
      images: [
       {
          src: "/images/events/event5/event1.jpeg",
          description: "Orientation at Buero Veritas."
        },
        {
          src: "/images/events/event5/event2.jpeg",
          description: "Team building exercises during the orientation."
        },
        {
          src: "/images/events/event5/event3.jpeg",
          description: "Interactive session with employees."
        },
         {
          src: "/images/events/event5/event4.jpeg",
          description: "Interactive session with employees."
        },
        {
          src: "/images/events/event5/event5.jpeg",
          description: "Interactive session with employees."
        },
         {
          src: "/images/events/event5/event6.jpeg",
          description: "Interactive session with employees."
        },

      ],
      date: "2022 - 2023",
      impact: "50 Schools Reached",
    },
    {
      id: 6,
      title: "Pranic Healing orientation for Goenka school staff",
      images: [
      {
          src: "/images/events/event6/event1.jpeg",
          description: "Orientation at Buero Veritas."
        },
        {
          src: "/images/events/event6/event2.jpeg",
          description: "Team building exercises during the orientation."
        },
        {
          src: "/images/events/event6/event3.jpeg",
          description: "Interactive session with employees."
        },
         {
          src: "/images/events/event6/event4.jpeg",
          description: "Interactive session with employees."
        },
        {
          src: "/images/events/event6/event5.jpeg",
          description: "Interactive session with employees."
        },
         {
          src: "/images/events/event6/event6.jpeg",
          description: "Interactive session with employees."
        },
        {
          src: "/images/events/event6/event7.jpeg",
          description: "Interactive session with employees."
        },
      ],
      date: "2021 - Ongoing",
      impact: "100+ Companies",
    },
     {
      id: 7,
      title: "Pranic Healing orientation for Goenka school staff",
      images: [
     {
          src: "/images/events/event6/event1.jpeg",
          description: "Orientation at Buero Veritas."
        },
        {
          src: "/images/events/event6/event2.jpeg",
          description: "Team building exercises during the orientation."
        },
        {
          src: "/images/events/event6/event3.jpeg",
          description: "Interactive session with employees."
        },
         {
          src: "/images/events/event6/event4.jpeg",
          description: "Interactive session with employees."
        },
        {
          src: "/images/events/event6/event5.jpeg",
          description: "Interactive session with employees."
        },
         {
          src: "/images/events/event6/event6.jpeg",
          description: "Interactive session with employees."
        },
        {
          src: "/images/events/event6/event7.jpeg",
          description: "Interactive session with employees."
        },
      ],
      date: "2021 - Ongoing",
      impact: "100+ Companies",
    }
  ];

  const events = [
    {
      id: 1,
      title: "Annual Healing Retreat",
      description: "A transformative 3-day retreat focusing on deep healing and spiritual awakening.",
      image: "Event Image",
    },
    {
      id: 2,
      title: "Community Healing Circle",
      description: "Monthly gathering for group healing sessions and sharing experiences.",
      image: "Event Image",
    },
    {
      id: 3,
      title: "Panic Freedom Workshop",
      description: "Intensive workshop teaching practical techniques for overcoming panic attacks.",
      image: "Event Image",
    },
  ];

  const teamMembers = [
    { name: "Add a little bit of body text", role: "Healing Specialist" },
    { name: "Add a little bit of body text", role: "Anxiety Counselor" },
    { name: "Add a little bit of body text", role: "Wellness Coach" },
    { name: "Add a little bit of body text", role: "Panic Recovery Expert" },
    { name: "Add a little bit of body text", role: "Mindfulness Guide" },
    { name: "Add a little bit of body text", role: "Support Coordinator" },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content1">
          <h1 className="hero-title">
            <span className="title-line">Our Instructors</span>
            <span className="title-line"></span>
          </h1>
          <p className="hero-subtitle"></p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founders-section">
        <div className="container">
          <h2 className="section-title">Founder of Radiaant Pranic Healing</h2>
          
          <div className="founder-profile-container">
            <div className="image-name-section">
              <img 
                src="/images/sarika_bilwalkar.jpg" 
                alt="Sarika Biwalkar" 
                className="founder-image"
              />
              <h3 className="founder-name">Sarika Biwalkar</h3>
            </div>

            <div className="contact-box">
              <h4>Contact Information</h4>
              <div className="contact-details">
                <p>📍 103, Oyster CHS, Hiranandani Estate, Thane W</p>
                <p>📞 +91 9819852675</p>
                <p>📧 Radiaant9@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="founder-details">
            <p className="founder-bio">
              With over 12 years of experience in the field of energy healing, Instructor Sarika Biwalkar is a dedicated and compassionate healer committed to transforming lives. She is a Certified Pranic Psychotherapist, Certified Pranic Healer, and Associate Certified Pranic Healer, trained in the powerful teachings of Grand Master Choa Kok Sui.
            </p>

            <div className="details-grid">
              <div className="detail-group">
                <h4>Education</h4>
                <p>Post graduate: M.COM<br/>Specialization: Human Resource</p>
              </div>

              <div className="detail-group">
                <h4>Pranic Healing Education</h4>
                <ul>
                  <li>Pranic Healing Instructor</li>
                  <li>Certified Pranic Psychotherapist</li>
                  <li>Certified Pranic Healer</li>
                  <li>Associate Certified Pranic Healer</li>
                </ul>
              </div>

              <div className="detail-group">
                <h4>Additional Achievements</h4>
                <ul>
                  <li>NLP Practitioner</li>
                  <li>Akashic Record Reader and Trainer</li>
                  <li>Angel and Tarot Card Reader</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Image Sliders */}
      <section className="projects-section">
        <div className="section-header fade-in header-with-bg">
          <h2 className="section-title">Our Events & Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <div className="image-slider1">
                  {project.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="slide">
                      <img src={img.src} alt={project.title} />
                      <div className="slide-description">{img.description}</div>
                    </div>
                  ))}
                </div>
                <div className="image-overlay"></div>
                {project.images.length > 1 && (
                  <div className="slider-controls">
                    <button className="prev-btn">❮</button>
                    <button className="next-btn">❯</button>
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                 <h4>{project.subtitles}</h4>

                {/* <div className="project-meta">
                  {project.date && <span>{project.date}</span>}
                  {project.impact && <span>{project.impact}</span>}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
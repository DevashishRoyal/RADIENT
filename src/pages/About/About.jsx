import React, { useEffect } from 'react';
import './About.css';

const About = () => {
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

  const projects = [
    {
      id: 1,
      title: "Wellness at workplace orientation by team Radiaan",
      description: "Orientation at Buero Veritas.",
      image: "/images/events/event_1.jpg",
      date: "2023 - Ongoing",
      impact: "500+ Lives Touched",
    },
    {
      id: 2,
      title: "Growth Through Movementand Energy",
      description: "Superbrain Yoga at Goenka School.",
      image: "/images/events/event_2.jpg",
      date: "2022 - 2023",
      impact: "50 Schools Reached",
    },
    {
      id: 3,
      title: "Where Inner Peace Begins.",
      description: "Healing camp at Radiaant Center.",
      image: "/images/events/event_3.jpg",
      date: "2021 - Ongoing",
      impact: "100+ Companies",
    },
    {
      id: 4,
      title: "A Meditation for Every Heart",
      description: "Twin Heart meditation every Saturday at 6 .",
      image: "/images/events/event_4.jpg",
      date: "2023 - Ongoing",
      impact: "500+ Lives Touched",
    },
    {
      id: 5,
      title: "Bringing Wellness to Every Walk of Life.",
      description: "Happy Street.",
      image: "/images/events/event_5.jpg",
      date: "2022 - 2023",
      impact: "50 Schools Reached",
    },
    {
      id: 6,
      title: "Pranic Healing orientation for Goenka school staff",
      image: "/images/events/event_6.jpg",
      date: "2021 - Ongoing",
      impact: "100+ Companies",
    },
  ]

  const events = [
    {
      id: 1,
      title: "Annual Healing Retreat",
      description: "A transformative 3-day retreat focusing on deep healing and spiritual awakening.",
      image: "Event Image",
      date: "March 2024",
      location: "Mountain Sanctuary",
    },
    {
      id: 2,
      title: "Community Healing Circle",
      description: "Monthly gathering for group healing sessions and sharing experiences.",
      image: "Event Image",
      date: "Every Month",
      location: "Radiant Center",
    },
    {
      id: 3,
      title: "Panic Freedom Workshop",
      description: "Intensive workshop teaching practical techniques for overcoming panic attacks.",
      image: "Event Image",
      date: "Quarterly",
      location: "Various Locations",
    },
  ]

  const teamMembers = [
    { name: "Add a little bit of body text", role: "Healing Specialist" },
    { name: "Add a little bit of body text", role: "Anxiety Counselor" },
    { name: "Add a little bit of body text", role: "Wellness Coach" },
    { name: "Add a little bit of body text", role: "Panic Recovery Expert" },
    { name: "Add a little bit of body text", role: "Mindfulness Guide" },
    { name: "Add a little bit of body text", role: "Support Coordinator" },
  ]

   return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">About</span>
            <span className="title-line">Radiaant Healing</span>
          </h1>
          <p className="hero-subtitle">Transforming lives through energy healing</p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section">
        <div className="founder-container fade-in">
          <h2 className="section-title">Founder of Radiaant Pranic Healing</h2>
          
          <div className="founder-content">
            <div className="founder-profile">
              <img 
                src="/images/sarika_bilwalkar.jpg" 
                alt="Sarika Biwalkar" 
                className="founder-image"
              />
              <h3 className="founder-name">Sarika Biwalkar</h3>
            </div>

            <div className="founder-details">
              <div className="founder-bio">
                <p>
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

              <div className="contact-box">
                <h4>Contact</h4>
                <p>📍 103, Oyster CHS, Hiranandani Estate, Thane W</p>
                <p>📞 +91 9819852675</p>
                <p>📧 Radiaant9@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Co-Founder Section */}
      <section className="founders-section">
        <div className="founder-container fade-in">
          <h2 className="section-title">Founder of Radiaant Pranic Healing</h2>
          
          <div className="founder-content">
            <div className="founder-profile">
              <img 
                src="/images/sarika_bilwalkar.jpg" 
                alt="Sarika Biwalkar" 
                className="founder-image"
              />
              <h3 className="founder-name">Sarika Biwalkar</h3>
            </div>

            <div className="founder-details">
              <div className="founder-bio">
                <p>
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

              <div className="contact-box">
                <h4>Contact</h4>
                <p>📍 103, Oyster CHS, Hiranandani Estate, Thane W</p>
                <p>📞 +91 9819852675</p>
                <p>📧 Radiaant9@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section className="projects-section">
        <div className="section-header fade-in">
          <h2 className="section-title">Our Events & Projects</h2>
          <p className="section-description">Transforming communities through healing initiatives</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay"></div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-meta">
                  <span>{project.date}</span>
                  <span>{project.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
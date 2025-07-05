import "./About.css"

const About = () => {
  const contentSections = [
    {
      title: "Our Mission",
      description:
        "Add a little bit of body text that explains our commitment to healing and supporting those in need.",
    },
    {
      title: "Our Approach",
      description:
        "Add a little bit of body text that describes our gentle, evidence-based methods for panic recovery.",
    },
  ]

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
      {/* About Hero Section */}
      <section className="about-hero">
  <div className="container">
    <div className="about-hero-content">
      <div className="hero-image">
        <div className="image-placeholder">
          {/* <h3>Our Development</h3>
          <p>Journey of healing and growth</p> */}
        </div>
      </div>
      <div className="hero-text">
        <h1>Our Instructors</h1>
        <p>
         
        </p>
      </div>
    </div>
  </div>
</section>


      {/* About Content Section */}
<div className="about-founders">
  {/* Founder Section */}
  <div className="founder-container">
  <h1 className="founder-title">Founder of Radiaant Pranic healing</h1>

  <div className="founder-content">
    <div className="founder-profile">
      <img 
        src="/images/sarika_bilwalkar.jpg"
        alt="Sarika Biwalkar"
        className="founder-image"
      />
      <h2 className="founder-name">Sarika Biwalkar</h2>
    </div>

    <div className="founder-contact-box">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-info">
        <p>📍 103, Oyster CHS, Hiranandani Estate, Thane W</p>
        <p>📞 +91 9819852675</p>
        <p>📧 Radiaant9@gmail.com</p>
      </div>
    </div>
  </div>

  <div className="founder-bio">
    <p>
      With over 12 years of experience in the field of energy healing, Instructor Sarika Biwalkar is a dedicated and compassionate healer committed to transforming lives. She is a Certified Pranic Psychotherapist, Certified Pranic Healer, and Associate Certified Pranic Healer, trained in the powerful teachings of Grand Master Choa Kok Sui. *know more*
    </p>

    <h3>Education</h3>
    <p>Post graduate: M.COM<br/>Specialization: Human Resource</p>

    <h3>Education in Pranic Healing</h3>
    <ul>
      <li>Pranic Healing Instructor</li>
      <li>Certified Pranic Psychotherapist</li>
      <li>Certified Pranic Healer</li>
      <li>Associate Certified Pranic Healer</li>
      <li>NLP Practitioner</li>
      <li>Akashic Record Reader and Trainer</li>
    </ul>

    <h3>Additional Achievements / Courses</h3>
    <ul>
      <li>Angel and Tarot Card Reader</li>
      <li>Bach Flower Therapist</li>
      <li>Numerologist</li>
    </ul>
  </div>
</div>


  {/* Co-Founder Section */}
  <div className="founder-container">
  <h1 className="founder-title">Founder of Radiaant Pranic healing</h1>

  <div className="founder-content">
    <div className="founder-profile">
      <img 
        src="/images/sarika_bilwalkar.jpg"
        alt="Sarika Biwalkar"
        className="founder-image"
      />
      <h2 className="founder-name">Sarika Biwalkar</h2>
    </div>

    <div className="founder-contact-box">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-info">
        <p>📍 103, Oyster CHS, Hiranandani Estate, Thane W</p>
        <p>📞 +91 9819852675</p>
        <p>📧 Radiaant9@gmail.com</p>
      </div>
    </div>
  </div>

  <div className="founder-bio">
    <p>
      With over 12 years of experience in the field of energy healing, Instructor Sarika Biwalkar is a dedicated and compassionate healer committed to transforming lives. She is a Certified Pranic Psychotherapist, Certified Pranic Healer, and Associate Certified Pranic Healer, trained in the powerful teachings of Grand Master Choa Kok Sui. *know more*
    </p>

    <h3>Education</h3>
    <p>Post graduate: M.COM<br/>Specialization: Human Resource</p>

    <h3>Education in Pranic Healing</h3>
    <ul>
      <li>Pranic Healing Instructor</li>
      <li>Certified Pranic Psychotherapist</li>
      <li>Certified Pranic Healer</li>
      <li>Associate Certified Pranic Healer</li>
      <li>NLP Practitioner</li>
      <li>Akashic Record Reader and Trainer</li>
    </ul>

    <h3>Additional Achievements / Courses</h3>
    <ul>
      <li>Angel and Tarot Card Reader</li>
      <li>Bach Flower Therapist</li>
      <li>Numerologist</li>
    </ul>
  </div>
</div>
</div>


      {/* Projects & Events Section */}
      <section className="projects-events section">
        <div className="container">
          
          {/* <img className="project-event-img" src="/image/sliders/img_jpg"></img> */}
          <div className="section-header">
            <h2 className="gradient-text">Events Worked On</h2>
            {/* <p></p> */}
          </div>
                  </div>

                </section>


          {/* Projects Section */}
          
     <div className="projects-section">
  <div className="subsection-header">
  </div>

  <div className="projects-grid">
    {projects.map((project, index) => (
      <div
        key={project.id}
        className={`project-card animate-fadeInUp`}
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <div className="project-image">
          <div className="image-placeholder">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-overlay">
              <div className="project-icon"></div>
            </div>
          </div>
        </div>
        <div className="project-content">
          <h4>{project.title}</h4>
          <p>{project.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

          {/* Events Section */}
          {/* <div className="events-section">
            <div className="subsection-header">
              <h3>Transformative Events</h3>
              <p>Join us for life-changing experiences and community connection</p>
            </div>

            <div className="events-grid">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className={`event-card animate-fadeInUp`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="event-image">
                    <div className="image-placeholder">
                      <h4>{event.image}</h4>
                      <div className="event-overlay">
                        <div className="event-icon">🎭</div>
                      </div>
                    </div>
                  </div>
                  <div className="event-content">
                    <div className="event-meta">
                      <span className="event-date">{event.date}</span>
                      <span className="event-location">📍 {event.location}</span>
                    </div>
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                    <button className="btn btn-primary">Register Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

      {/* Team Section */}
      {/* <section className="team-section section">
        <div className="container">
          <div className="section-header">
            <h2>Our Healing Team</h2>
            <p>Meet the compassionate professionals dedicated to your wellness journey</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">
                  <div className="avatar-placeholder"></div>
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default About

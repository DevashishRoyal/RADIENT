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
      title: "Healing Hearts Initiative",
      description: "A community outreach program providing free panic healing sessions to underserved communities.",
      image: "Project Image",
      date: "2023 - Ongoing",
      impact: "500+ Lives Touched",
    },
    {
      id: 2,
      title: "Mindfulness in Schools",
      description: "Educational program introducing meditation and anxiety management techniques to students.",
      image: "Project Image",
      date: "2022 - 2023",
      impact: "50 Schools Reached",
    },
    {
      id: 3,
      title: "Corporate Wellness Program",
      description: "Workplace stress management and healing workshops for corporate employees.",
      image: "Project Image",
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
                <h3>Our Development</h3>
                <p>Journey of healing and growth</p>
              </div>
            </div>
            <div className="hero-text">
              <h1>Our Development</h1>
              <p>
                At Radiant, we believe in the power of gentle healing and compassionate care. Our journey began with a
                simple mission: to provide safe, effective support for those experiencing panic and anxiety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content section">
        <div className="container">
          {contentSections.map((section, index) => (
            <div key={index} className={`content-row ${index % 2 === 1 ? "reverse" : ""}`}>
              <div className="content-text">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>
              <div className="content-info">
                <div className="info-box">
                  <h3>Contact Information</h3>
                  <div className="contact-details">
                    <p>📧 hello@radiant-healing.com</p>
                    <p>📞 (555) 123-4567</p>
                    <p>📍 123 Healing Way, Peace City</p>
                    <p>🕒 Mon-Fri: 9AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects & Events Section */}
      <section className="projects-events section">
        <div className="container">
          <div className="section-header">
            <h2 className="gradient-text">Our Projects & Events</h2>
            <p>Discover the impact we're making in communities and the transformative events we host</p>
          </div>

          {/* Projects Section */}
          <div className="projects-section">
            <div className="subsection-header">
              <h3>Healing Projects</h3>
              <p>Community initiatives spreading healing and hope</p>
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
                      <h4>{project.image}</h4>
                      <div className="project-overlay">
                        <div className="project-icon">🌟</div>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="project-meta">
                      <span className="project-date">{project.date}</span>
                      <span className="project-impact">{project.impact}</span>
                    </div>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <button className="btn btn-secondary">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div className="events-section">
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
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
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
      </section>
    </div>
  )
}

export default About

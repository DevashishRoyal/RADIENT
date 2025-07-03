import "./AboutContent.css"

const AboutContent = () => {
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

  return (
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
  )
}

export default AboutContent

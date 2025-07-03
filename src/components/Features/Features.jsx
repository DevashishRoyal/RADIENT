import "./Features.css"

const Features = () => {
  const features = [
    {
      title: "Personalized Healing",
      description:
        "Add a little bit of body text that explains your unique approach to panic healing and anxiety management.",
    },
    {
      title: "Expert Guidance",
      description:
        "Add a little bit of body text that describes our qualified professionals and their experience in mental health.",
    },
    {
      title: "Proven Techniques",
      description:
        "Add a little bit of body text that outlines the evidence-based methods we use for lasting recovery.",
    },
  ]

  return (
    <section className="features section">
      <div className="container">
        <div className="section-header">
          <h2>Our Healing Approach</h2>
          <p>Discover how we can help you find peace and overcome panic</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <div className="icon-placeholder"></div>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

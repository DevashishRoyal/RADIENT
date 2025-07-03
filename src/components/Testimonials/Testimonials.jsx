import "./Testimonials.css"

const Testimonials = () => {
  const testimonials = [
    {
      text: "Add a little bit of body text that shares a client's healing journey and transformation.",
      author: "Client Name",
    },
    {
      text: "Add a little bit of body text that describes how Radiant helped overcome panic attacks.",
      author: "Client Name",
    },
    {
      text: "Add a little bit of body text that expresses gratitude for the healing process and support.",
      author: "Client Name",
    },
  ]

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <h2>Healing Stories</h2>
          <p>Read about the transformative journeys of our clients</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-avatar">
                <div className="avatar-placeholder"></div>
              </div>
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.author}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

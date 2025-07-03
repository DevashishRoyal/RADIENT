import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hello & Welcome to Radiant!</h1>
            <p>
              Your journey to healing and inner peace starts here. We provide compassionate support for panic and
              anxiety management through proven techniques and personalized care.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Chat with us</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <h3>Healing Journey</h3>
              <p>Discover peace within yourself</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

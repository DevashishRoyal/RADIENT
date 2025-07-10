import './Ashram.css';

export default function AshramSection() {
  return (
    <section className="ashram-section">
      {/* Video Background */}
      <div className="ashram-video-wrapper">
        <video autoPlay muted loop className="ashram-video">
          <source src="./images/Ashram.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="ashram-video-overlay">
          <h2 className="ashram-title">Our Ashram</h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="ashram-content-container">
        <div className="ashram-text fade-in-up">
          <h3>GMCKS Arhatic Yoga Ashram</h3>
          <p>
            Nestled in the serene Sahyadri Hills of Mulshi, Maharashtra, the GMCKS Arhatic Yoga Ashram stands as a living legacy of Grand Master Choa Kok Sui’s vision. More than just a physical space, this Ashram is a spiritual home for thousands of practitioners from around the world. Lovingly conceived by GMCKS, it is a sacred retreat where students could deepen their inner practice and experience true transformation.
          </p>
          <p>
            Designed in harmony with the principles of Pranic Feng Shui, every area—from the shrine to the meditation halls, dining area, or living quarters—has been carefully crafted to enhance the flow of energy and support the practitioner’s journey.
          </p>
          <p>
            Spread across nearly sixty acres of pristine land, the ashram offers breathtaking views of lush green valleys, majestic mountain peaks, and the tranquil Mulshi lake. The natural beauty of the landscape, combined with its peaceful atmosphere, makes it an ideal setting for intense spiritual practice and self-reflection.
          </p>
        </div>
        <div className="ashram-image-wrapper zoom-in">
          <img
            src="your-image-url.jpg"
            alt="Ashram"
            className="ashram-image"
          />
        </div>
      </div>
    </section>
  );
}

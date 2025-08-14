import React from 'react';
import './Ashram.css';

const Ashram = () => {
  return (
    <div className="ashram-container">
      {/* Hero Image Section */}
      <section className="ashram-hero">
        <div className="ashram-hero-image-container">
          <img
            src="/images/Ashram.png"
            alt="GMCKS Arhatic Yoga Ashram"
            className="ashram-hero-image"
          />
          <div className="ashram-hero-overlay">
            <div className="ashram-hero-content">
              <h1 className="ashram-title">GMCKS Ashram</h1>
              <p className="ashram-subtitle">A Sacred Sanctuary for Spiritual Transformation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ashram-section">
        <div className="ashram-text">
          <h2>GMCKS Arhatic Yoga Ashram</h2>
          <p>
            Nestled in the serene Sahyadri hills of Mulshi, Maharashtra, the GMCKS Arhatic Yoga Ashram stands as a living legacy of Grand Master Choa Kok Sui's vision. More than just a physical space, this ashram is a spiritual home for thousands of practitioners from around the world. It was lovingly conceived by GMCKS as a sacred retreat where students could deepen their inner practice and experience true transformation.
            Designed in harmony with the principles of Pranic Feng Shui,
            every corner of the ashram-be it the meditation halls, dining area, or living quarters-has been carefully crafted to enhance the flow of energy and support the practitioner's journey.
          </p>
          <p>

            Spread across nearly sixty acres of pristine land, the ashram offers breathtaking views of lush green valleys, majestic mountain peaks, and the tranquil Mulshi lake. The natural beauty of the landscape, combined with its peaceful atmosphere, makes it an ideal setting for intense spiritual practice and self-reflection</p>
          <p>
            The ashram regularly hosts Arhatic Yoga retreats and higher spiritual workshops, drawing students from all walks of life. Its dedicated staff ensure that every visitor's stay is safe, comfortable, and enriching, with nutritious meals prepared fresh daily and a warm, supportive environment that fosters growth on all levels-physical, emotional, mental, and spiritual.
            In essence, the GMCKS Ashram is not just a destination-it's a journey inward. For many, it is a sacred space where silence speaks volumes, healing happens naturally, and the soul finds its way home.</p>

        </div>

        <div className="ashram-video">
          <video
            src="/images/Video/Ashram.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>

        </div>
      </section>
      {/* <section
        className="ashram-hero"
        style={{ paddingBottom: "50px" }}
      >
        <div className="ashram-hero-image-container">
          <div className="overlay">
            <div className="content">
              <div className="flex gap-4 p-4">
                {[...Array(7)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center"
                    style={{ height: "100px", width: "100px" }}
                  >
                    <img
                      src="images/11.jpeg"
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
 {/* <div className="container" style={{ width: "200px", height:"200px" , margin: "20px 20px", padding: "20px", backgroundColor:"black" }}>
     <img src="images/11.jpeg" alt="buyin"/>
  </div> */}
<div className="container" style={{ width: "200px", height:"200px" , margin: "20px 20px 20px 20px", padding: "20px", backgroundColor:"black" }}>
     {/* <img src="images/11.jpeg" alt="buyin"/> */}
  </div>
  <div className="container" style={{ width: "200px", height:"200px" , margin: "-220px 20px 20px 230px", padding: "20px", backgroundColor:"black" }}>
     {/* <img src="images/11.jpeg" alt="buyin"/> */}
  </div>
    <div className="container" style={{ width: "200px", height:"200px" , margin: "-220px 20px 20px 440px", padding: "20px", backgroundColor:"black" }}>
     {/* <img src="images/11.jpeg" alt="buyin"/> */}
  </div>
   <div className="container" style={{ width: "200px", height:"200px" , margin: "-220px 20px 20px 650px", padding: "20px", backgroundColor:"black" }}>
     {/* <img src="images/11.jpeg" alt="buyin"/> */}
  </div>
  <div className="container" style={{ width: "200px", height:"200px" , margin: "-220px 20px 20px 860px", padding: "20px", backgroundColor:"black" }}>
     {/* <img src="images/11.jpeg" alt="buyin"/> */}
  </div>
   <div className="container" style={{ width: "200px", height:"200px" , margin: "-220px 20px 20px 1070px", padding: "20px", backgroundColor:"black" }}>
     {/* <img src="images/11.jpeg" alt="buyin"/> */}
  </div>
   <div className="container" style={{ width: "200px", height:"200px" , margin: "-220px 20px 20px 1280px", padding: "20px", backgroundColor:"black" }}>
     {/* <img src="images/11.jpeg" alt="buyin"/> */}
  </div>
    </div>
  );
};

export default Ashram;
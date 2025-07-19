import React from 'react';
import './research.css';

const ResearchPage = () => {
  return (
    <div className="research-page">
      {/* Research Banner Image */}
      <div className="research-banner">
        <img 
          src="/images/pranic-research-banner.jpg" // Replace with your image path
          alt="Pranic Healing Research"
          className="banner-image"
        />
        <div className="banner-overlay">
          <div className="research-tagline">
            <span className="research-divider">|</span>
            <span className="tagline-text">elevate your knowledge</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="research-content-container">
        <h1 className="research-title">Pranic Perspectives: Knowledge & Research</h1>
        
        <div className="research-content">
          <p className="intro-text">
            This space is dedicated to sharing knowledge, experience, and insight from the world of Pranic Healing. 
            Here, you'll find a collection of thought-provoking articles, inspiring stories, and ongoing research 
            that sheds light on the power of energy in transforming lives.
          </p>
          
          <p className="intro-text">
            Explore topics ranging from the fundamentals of energy healing, meditation techniques, and spiritual growth, 
            to real healing experiences and scientific studies supporting this ancient practice. Whether you're a 
            long-time practitioner, a student of energy work, or someone beginning their healing journey - there's 
            something here for you.
          </p>
          
          <p className="intro-text">
            Use these writings to expand your understanding, spark your curiosity, and deepen your connection to 
            the subtle energies that surround and sustain us.
          </p>
        </div>

       <div className="articles-section">
  <h2 className="articles-title">Articles</h2>
  <div className="articles-grid">
    <a
      href="https://www.instagram.com/p/xyz123/"
      target="_blank"
      rel="noopener noreferrer"
      className="insta-post"
    >
      <img src="/images/Article1.png" alt="Instagram Post" />
      <div className="insta-overlay">
        <svg className="insta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM224,272a16,16,0,1,1,16-16A16,16,0,0,1,224,272Zm124.71-104a32,32,0,1,1-32-32A32,32,0,0,1,348.71,168ZM398.8,80a63.25,63.25,0,0,0-44.81-44.8C321.3,28.58,256.9,24,224,24s-97.3,4.57-130,11.21A63.27,63.27,0,0,0,49.2,80C42.57,112.7,38,177.1,38,210s4.57,97.3,11.21,130a63.27,63.27,0,0,0,44.8,44.8c32.7,6.64,97.1,11.21,130,11.21s97.3-4.57,130-11.21a63.25,63.25,0,0,0,44.8-44.8c6.64-32.7,11.21-97.1,11.21-130S405.44,112.7,398.8,80ZM224,338.13A82.13,82.13,0,1,1,306.13,256,82.21,82.21,0,0,1,224,338.13Z"/>
        </svg>
        <span className="insta-text">View on Instagram</span>
      </div>
    </a>

    {/* Repeat for other posts */}
  </div>
</div>

      </div>
    </div>
  );
};

export default ResearchPage;
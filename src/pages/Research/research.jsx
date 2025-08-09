import React from 'react';
import './research.css';

const ResearchPage = () => {
  return (
    <div className="research-page">
      {/* Research Banner Image */}
      <div className="research-banner">
        <img 
          src="/images/research.png" // Replace with your image path
          alt="Pranic Healing Research"
          className="banner-image"
        />
        <div className="banner-overlay">
          <div className="research-tagline">
            <span className="research-divider">|</span>
            <span className="tagline-text">Elavate your knowledge</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
<div className="research-content-container">
  <div className="research-header">
    <h1 className="research-title">Pranic Perspectives: Knowledge & Research</h1>
    <div className="title-decoration"></div>
  </div>
  
  <div className="research-content">
    <p className="intro-text">
      This space is dedicated to sharing knowledge, experience, and insight from the world of Pranic Healing. 
      Here, you'll find a collection of thought-provoking articles, inspiring stories, and ongoing research 
      that sheds light on the power of energy in transforming lives.
    </p>
    
    <p className="intro-text">
      Explore topics ranging from the fundamentals of energy healing, meditation techniques, and spiritual growth, 
      to real healing experiences and scientific studies supporting this ancient practice.
    </p>
  </div>

  <div className="articles-section">
    <div className="section-header">
      <h2 className="articles-title">Articles</h2>
      <p className="section-subtitle">Explore our latest insights on pranic healing</p>
    </div>
    
    <div className="articles-grid">
      <a
        href="https://www.instagram.com/p/xyz123/"
        target="_blank"
        rel="noopener noreferrer"
        className="article-card"
      >
        <div className="card-image-container">
          <img 
            src="/images/Article1.jpg" 
            alt="Pranic Healing Techniques" 
            className="card-image"
            loading="lazy"
          />
          <div className="card-overlay">
            <div className="card-content">
              <svg className="insta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM224,272a16,16,0,1,1,16-16A16,16,0,0,1,224,272Zm124.71-104a32,32,0,1,1-32-32A32,32,0,0,1,348.71,168ZM398.8,80a63.25,63.25,0,0,0-44.81-44.8C321.3,28.58,256.9,24,224,24s-97.3,4.57-130,11.21A63.27,63.27,0,0,0,49.2,80C42.57,112.7,38,177.1,38,210s4.57,97.3,11.21,130a63.27,63.27,0,0,0,44.8,44.8c32.7,6.64,97.1,11.21,130,11.21s97.3-4.57,130-11.21a63.25,63.25,0,0,0,44.8-44.8c6.64-32.7,11.21-97.1,11.21-130S405.44,112.7,398.8,80ZM224,338.13A82.13,82.13,0,1,1,306.13,256,82.21,82.21,0,0,1,224,338.13Z"/>
              </svg>
              <span className="card-title">A dive into understanding the nature and purpose of healing. How it functions and impacts our life positively</span>
              <span className="card-action">Read Article →</span>
            </div>
          </div>
        </div>
      </a>

      <a
        href="https://www.instagram.com/p/xyz123/"
        target="_blank"
        rel="noopener noreferrer"
        className="article-card"
      >
        <div className="card-image-container">
          <img 
            src="/images/Article2.jpg" 
            alt="Meditation Benefits" 
            className="card-image"
            loading="lazy"
          />
          <div className="card-overlay">
            <div className="card-content">
              <svg className="insta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM224,272a16,16,0,1,1,16-16A16,16,0,0,1,224,272Zm124.71-104a32,32,0,1,1-32-32A32,32,0,0,1,348.71,168ZM398.8,80a63.25,63.25,0,0,0-44.81-44.8C321.3,28.58,256.9,24,224,24s-97.3,4.57-130,11.21A63.27,63.27,0,0,0,49.2,80C42.57,112.7,38,177.1,38,210s4.57,97.3,11.21,130a63.27,63.27,0,0,0,44.8,44.8c32.7,6.64,97.1,11.21,130,11.21s97.3-4.57,130-11.21a63.25,63.25,0,0,0,44.8-44.8c6.64-32.7,11.21-97.1,11.21-130S405.44,112.7,398.8,80ZM224,338.13A82.13,82.13,0,1,1,306.13,256,82.21,82.21,0,0,1,224,338.13Z"/>
              </svg>
              <span className="card-title">Consumed by the stressors and conflicts of modern life? Spend time with us understanding how Pranic Healing helps to deal with them</span>
              <span className="card-action">Read Article →</span>
            </div>
          </div>
        </div>
      </a>

      <a
        href="https://www.instagram.com/p/xyz123/"
        target="_blank"
        rel="noopener noreferrer"
        className="article-card"
      >
        <div className="card-image-container">
          <img 
            src="/images/Article3.jpg" 
            alt="Energy Healing Research" 
            className="card-image"
            loading="lazy"
          />
          <div className="card-overlay">
            <div className="card-content">
              <svg className="insta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM224,272a16,16,0,1,1,16-16A16,16,0,0,1,224,272Zm124.71-104a32,32,0,1,1-32-32A32,32,0,0,1,348.71,168ZM398.8,80a63.25,63.25,0,0,0-44.81-44.8C321.3,28.58,256.9,24,224,24s-97.3,4.57-130,11.21A63.27,63.27,0,0,0,49.2,80C42.57,112.7,38,177.1,38,210s4.57,97.3,11.21,130a63.27,63.27,0,0,0,44.8,44.8c32.7,6.64,97.1,11.21,130,11.21s97.3-4.57,130-11.21a63.25,63.25,0,0,0,44.8-44.8c6.64-32.7,11.21-97.1,11.21-130S405.44,112.7,398.8,80ZM224,338.13A82.13,82.13,0,1,1,306.13,256,82.21,82.21,0,0,1,224,338.13Z"/>
              </svg>
              <span className="card-title">Wondering how to best utilise your healing and witness an impactful result? Here are few tips that may help you!</span>
              <span className="card-action">Read Article →</span>
            </div>
          </div>
        </div>
      </a>

      <a
        href="https://www.instagram.com/p/xyz123/"
        target="_blank"
        rel="noopener noreferrer"
        className="article-card"
      >
        <div className="card-image-container">
          <img 
            src="/images/Article4.jpg" 
            alt="Case Studies" 
            className="card-image"
            loading="lazy"
          />
          <div className="card-overlay">
            <div className="card-content">
              <svg className="insta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM224,272a16,16,0,1,1,16-16A16,16,0,0,1,224,272Zm124.71-104a32,32,0,1,1-32-32A32,32,0,0,1,348.71,168ZM398.8,80a63.25,63.25,0,0,0-44.81-44.8C321.3,28.58,256.9,24,224,24s-97.3,4.57-130,11.21A63.27,63.27,0,0,0,49.2,80C42.57,112.7,38,177.1,38,210s4.57,97.3,11.21,130a63.27,63.27,0,0,0,44.8,44.8c32.7,6.64,97.1,11.21,130,11.21s97.3-4.57,130-11.21a63.25,63.25,0,0,0,44.8-44.8c6.64-32.7,11.21-97.1,11.21-130S405.44,112.7,398.8,80ZM224,338.13A82.13,82.13,0,1,1,306.13,256,82.21,82.21,0,0,1,224,338.13Z"/>
              </svg>
              <span className="card-title">Spending time to dig into the evidence and Science that backs up the beliefs of Pranic Healing. Understanding the journey of energy through our body with a scientific lense</span>
              <span className="card-action">Read Article →</span>
            </div>
          </div>
        </div>
      </a>

      <a
        href="https://www.instagram.com/p/xyz123/"
        target="_blank"
        rel="noopener noreferrer"
        className="article-card"
      >
        <div className="card-image-container">
          <img 
            src="/images/Article5.jpg" 
            alt="Energy Healing Research" 
            className="card-image"
            loading="lazy"
          />
          <div className="card-overlay">
            <div className="card-content">
              <svg className="insta-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM224,272a16,16,0,1,1,16-16A16,16,0,0,1,224,272Zm124.71-104a32,32,0,1,1-32-32A32,32,0,0,1,348.71,168ZM398.8,80a63.25,63.25,0,0,0-44.81-44.8C321.3,28.58,256.9,24,224,24s-97.3,4.57-130,11.21A63.27,63.27,0,0,0,49.2,80C42.57,112.7,38,177.1,38,210s4.57,97.3,11.21,130a63.27,63.27,0,0,0,44.8,44.8c32.7,6.64,97.1,11.21,130,11.21s97.3-4.57,130-11.21a63.25,63.25,0,0,0,44.8-44.8c6.64-32.7,11.21-97.1,11.21-130S405.44,112.7,398.8,80ZM224,338.13A82.13,82.13,0,1,1,306.13,256,82.21,82.21,0,0,1,224,338.13Z"/>
              </svg>
              <span className="card-title">How does salt bath positively impact us</span>
              <span className="card-action">Read Article →</span>
            </div>
          </div>
        </div>
      </a>

    </div>
    
    <div className="view-more-container">
      <a href="#" className="view-more-btn">View All Articles</a>
    </div>
  </div>

      </div>
    </div>
  );
};

export default ResearchPage;
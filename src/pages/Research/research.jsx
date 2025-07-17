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

        {/* Articles Section */}
        <div className="articles-section">
          <h2 className="articles-title">Articles</h2>
          <ul className="articles-list">
           <li className="article-item">
              <div className="article-bullet"></div>
              <span>A path to understanding the energy and purpose of healing through "Pranic Guardianship" and how it affects our lives positively.</span>
            </li>
            <li className="article-item">
              <div className="article-bullet"></div>
              <span>Combining ancient stressors and conflicts with modern wisdom - exploring how Pranic Healing helps deal with daily challenges.</span>
            </li>
             <li className="article-item">
              <div className="article-bullet"></div>
              <span>Wondering how to best utilise your healing and witness an impactful result? Here are few tips that may help you!</span>
            </li>
             <li className="article-item">
              <div className="article-bullet"></div>
              <span>Spending time to dig into the evidence and Science that backs up the beliefs of Pranic Healing. Understanding the journey of energy through our body with a scientific lense</span>
            </li>
             <li className="article-item">
              <div className="article-bullet"></div>
              <span>How does salt bath positively impact us</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
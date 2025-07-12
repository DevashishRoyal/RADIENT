// ResearchPage.jsx
import React from 'react';
import './research.css';

const ResearchPage = () => {
  return (
    <div className="research-page">
      {/* Hero Banner - Matching your site's style */}
      <div className="research-hero">
        <img 
          src="/images/research-hero.jpg" 
          alt="Pranic Healing Research" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>The Importance of Healing</h1>
          <p>Scientific Perspectives on Pranic Energy Research</p>
        </div>
      </div>

      {/* Main Research Content */}
      <div className="research-container">
        {/* Research Introduction */}
        <section className="research-intro">
          <div className="intro-image">
            <img src="/images/research-image1.jpg" alt="Energy healing research" />
          </div>
          <div className="intro-text">
            <h2>Advancing the Science of Energy Healing</h2>
            <p>
              Our research initiatives bridge ancient wisdom with modern science to validate 
              the effectiveness of pranic healing techniques. Through rigorous studies and 
              clinical trials, we're documenting the measurable impacts of energy healing.
            </p>
          </div>
        </section>

        {/* Key Research Areas */}
        <section className="research-areas">
          <h2>Our Research Focus Areas</h2>
          <div className="area-cards">
            <div className="area-card">
              <img src="/images/research-area1.jpg" alt="Biofield research" />
              <h3>Biofield Measurements</h3>
              <p>
                Using GDV and other technologies to quantify changes in the human 
                energy field before and after pranic healing sessions.
              </p>
            </div>
            
            <div className="area-card">
              <img src="/images/research-area2.jpg" alt="Clinical study" />
              <h3>Clinical Applications</h3>
              <p>
                Documenting effects on chronic pain, stress reduction, and recovery 
                times in hospital settings.
              </p>
            </div>
            
            <div className="area-card">
              <img src="/images/research-area3.jpg" alt="Brain research" />
              <h3>Neurophysiological Effects</h3>
              <p>
                Studying brain wave patterns and neurological responses during 
                energy healing treatments.
              </p>
            </div>
          </div>
        </section>

        {/* Published Findings */}
        <section className="research-findings">
          <h2>Published Research Findings</h2>
          <div className="finding-cards">
            <div className="finding-card">
              <div className="finding-image">
                <img src="/images/research-paper1.jpg" alt="Research publication" />
              </div>
              <div className="finding-details">
                <h3>"Pranic Healing for Chronic Pain Management"</h3>
                <p className="meta">Journal of Alternative Medicine • 2023</p>
                <p>
                  Randomized controlled trial showing 62% of participants experienced 
                  significant pain reduction after 4 weeks of pranic healing sessions.
                </p>
              </div>
            </div>
            
            <div className="finding-card">
              <div className="finding-image">
                <img src="/images/research-paper2.jpg" alt="Research publication" />
              </div>
              <div className="finding-details">
                <h3>"Energy Field Changes Post-Treatment"</h3>
                <p className="meta">Energy Medicine Review • 2022</p>
                <p>
                  GDV measurements showed consistent patterns of energy field 
                  normalization after pranic healing interventions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Methodology */}
        <section className="research-methods">
          <h2>Our Research Methodology</h2>
          <div className="method-steps">
            <div className="method-step">
              <div className="step-number">1</div>
              <img src="/images/method1.jpg" alt="Research design" />
              <h3>Study Design</h3>
              <p>
                Developing controlled studies with treatment and placebo groups 
                following scientific protocols.
              </p>
            </div>
            
            <div className="method-step">
              <div className="step-number">2</div>
              <img src="/images/method2.jpg" alt="Data collection" />
              <h3>Data Collection</h3>
              <p>
                Using both quantitative biometric measurements and qualitative 
                participant feedback.
              </p>
            </div>
            
            <div className="method-step">
              <div className="step-number">3</div>
              <img src="/images/method3.jpg" alt="Analysis" />
              <h3>Analysis & Publication</h3>
              <p>
                Rigorous statistical analysis and peer-reviewed publication 
                of results.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <section className="research-cta">
        <div className="cta-content">
          <h2>Join Our Research Community</h2>
          <p>
            Participate in ongoing studies or collaborate with our research team 
            to advance the science of energy healing.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
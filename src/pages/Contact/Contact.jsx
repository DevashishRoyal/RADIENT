import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const DonationsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <div className="donations-page">
      {/* Hero Banner - Full Width */}
      <motion.div 
        className="donations-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-overlay">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Support Our Mission
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Your contribution helps spread healing and wisdom
          </motion.p>
        </div>
      </motion.div>

      {/* Quote Section */}
      <motion.section 
        className="quote-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.blockquote variants={itemVariants}>
          "It is in giving that we receive."
        </motion.blockquote>
        <motion.p variants={itemVariants} className="quote-author">
          - Grand Master Choa Kok Sui
        </motion.p>
      </motion.section>

      {/* Impact Section - Full Width */}
      <motion.section 
        className="impact-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="impact-content">
          <motion.h2 variants={itemVariants}>Your Donation Makes a Difference</motion.h2>
          <motion.div className="impact-grid" variants={containerVariants}>
            <motion.div className="impact-card" variants={itemVariants}>
              <div className="icon-box">💙</div>
              <h3>Healing Initiatives</h3>
              <p>Support free healing clinics for underprivileged communities</p>
            </motion.div>
            <motion.div className="impact-card" variants={itemVariants}>
              <div className="icon-box">📚</div>
              <h3>Education</h3>
              <p>Fund spiritual education programs and scholarships</p>
            </motion.div>
            <motion.div className="impact-card" variants={itemVariants}>
              <div className="icon-box">🍲</div>
              <h3>Food Relief</h3>
              <p>Provide nutritious meals to those in need</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Donation Options - Full Width */}
      <motion.section 
        className="donation-options"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Ways to Contribute</motion.h2>
        <div className="options-grid">
          <motion.div className="option-card" variants={itemVariants}>
            <h3>One-Time Donation</h3>
            <p>Make a single contribution to support our work</p>
            <button className="donate-btn">Donate Now</button>
          </motion.div>
          <motion.div className="option-card" variants={itemVariants}>
            <h3>Monthly Giving</h3>
            <p>Sustained support for long-term impact</p>
            <button className="donate-btn">Become a Monthly Donor</button>
          </motion.div>
          <motion.div className="option-card" variants={itemVariants}>
            <h3>Sponsor a Program</h3>
            <p>Fully fund a specific initiative or workshop</p>
            <button className="donate-btn">Learn More</button>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section 
        className="testimonial-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="testimonial-content">
          <motion.h2 variants={itemVariants}>Donor Stories</motion.h2>
          <motion.div className="testimonial-card" variants={itemVariants}>
            <p className="testimonial-text">
              "Contributing to Pranic Healing has been transformative not just for those we help, 
              but for my own spiritual growth. Seeing the impact firsthand is deeply rewarding."
            </p>
            <p className="testimonial-author">- Priya M., Monthly Donor since 2018</p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section - Full Width */}
      <motion.section 
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="cta-content" variants={itemVariants}>
          <h2>Ready to Make an Impact?</h2>
          <p>Your generosity helps heal bodies, minds, and souls</p>
          <div className="cta-buttons">
            <button className="primary-btn">Donate Now</button>
            <button className="secondary-btn">Contact Us</button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default DonationsPage;
import React, { useState, useEffect } from 'react';
import './Contribution.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Contribution = () => {
  const [formData, setFormData] = useState({
    name: '',
    docType: 'PAN Number',
    mobile: '',
    email: '',
    panNumber: '',
    amount: '',
    frequency: 'One Time',
    duration: '1 Year',
    donationDate: '5th',
    donationArea: 'Medical Assistance'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sample images for slider - replace with your actual images
  const sliderImages = [
    'images/Contribution/Contribution1.png',
    'images/Contribution/Contribution2.png',
    'images/Contribution/Contribution3.png',
    'images/Contribution/Contribution2.png',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    fade: true
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Validate mobile number if that's the field being changed
    if (name === 'mobile') {
      // Only allow numbers and limit to 10 digits
      const validatedValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: validatedValue }));
      
      // Clear error if validation passes
      if (validatedValue.length === 10) {
        setErrors(prev => ({ ...prev, mobile: '' }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (formData.mobile.length !== 10) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.amount) {
      newErrors.amount = 'Amount is required';
    } else if (isNaN(formData.amount)) {
      newErrors.amount = 'Please enter a valid number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Save to Google Sheets
      const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'; // Replace with your Google Apps Script URL
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        
        // Prepare WhatsApp message
        const message = `New Donation Submission:\n\n` +
          `Name: ${formData.name}\n` +
          `Document Type: ${formData.docType}\n` +
          `Mobile: ${formData.mobile}\n` +
          `Email: ${formData.email}\n` +
          `PAN: ${formData.panNumber}\n` +
          `Amount: ₹${formData.amount}\n` +
          `Frequency: ${formData.frequency}\n` +
          `Duration: ${formData.frequency === 'Monthly' ? formData.duration : 'N/A'}\n` +
          `Donation Date: ${formData.frequency === 'Monthly' ? formData.donationDate : 'N/A'}\n` +
          `Area: ${formData.donationArea}`;
        
        const whatsappUrl = `https://wa.me/919765569760?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            docType: 'PAN Number',
            mobile: '',
            email: '',
            panNumber: '',
            amount: '',
            frequency: 'One Time',
            duration: '1 Year',
            donationDate: '5th',
            donationArea: 'Medical Assistance'
          });
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert('There was an error submitting your donation. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cont-container">
      {/* Hero Image Slider Section */}
      <div className="cont-hero">
        <Slider {...sliderSettings} className="cont-hero-slider">
          {sliderImages.map((img, index) => (
            <div key={index} className="cont-slide">
              <img 
                src={img}
                alt={`Donation Slide ${index + 1}`}
                className="cont-hero-image"
              />
              <div className="cont-hero-overlay">
                <h1 className="cont-title">CONTRIBUTION</h1>
                <p className="cont-subtitle">Educational medical food for hungry</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="cont-content-wrapper">
        {/* Quote */}
        <div className="cont-quote-section">
          <blockquote className="cont-quote">
            "It is in giving that we receive."
            <span className="cont-quote-author">- Grand Master Choa Kok Sui</span>
          </blockquote>
        </div>
        
        {/* Heading */}
        <h2 className="cont-heading">Give Light. Give Hope.</h2>
        
        {/* Main Text */}
        <div className="cont-text">
          <p>There are many lives waiting to be touched—and your support can be the light that brings hope. Every contribution, no matter how small, creates a ripple of change.</p>
          <p>At Radiant Pranic Healing, we believe that true service begins with compassion — and healing is a right, not a privilege. Through free healing sessions, wellness camps, food distribution drives, and emotional support programs, we strive to reach those who need it most — regardless of their means.</p>
          <p>Your donation empowers us to continue this work. It helps us offer healing to the sick, peace to the anxious, and hope to those who feel forgotten. Every rupee you give becomes a channel of love, care, and transformation.</p>
          <p>Whether it's a one-time contribution or a monthly pledge, your support fuels our mission — to heal, to serve, and to uplift.</p>
        </div>
        
        {/* Closing Line */}
        <p className="cont-closing">🙏 <em>Donate now. Be the hand that heals. Be the heart that gives.</em></p>
      </div>

      {/* Enhanced Donation Form Section */}
      <div className="donate-section">
        <div className="donate-container">
          <h2 className="donate-title">Make a Difference</h2>
          <p className="donate-subtitle">Your support helps us continue our mission</p>
          
          {submitSuccess && (
            <div className="success-message">
              Thank you for your donation! A confirmation has been sent.
            </div>
          )}
          
          <form className="donate-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>YOUR NAME <span className="required">*</span></label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name" 
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label>DOCUMENT TYPE</label>
                <select 
                  name="docType"
                  value={formData.docType}
                  onChange={handleChange}
                >
                  <option>PAN Number</option>
                  <option>Aadhar Card</option>
                  <option>Passport</option>
                  <option>Voter ID</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>MOBILE NUMBER <span className="required">*</span></label>
                <div className="input-with-prefix">
                  <span className="prefix">+91</span>
                  <input 
                    type="tel" 
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="9876543210" 
                    maxLength="10"
                    className={errors.mobile ? 'error' : ''}
                  />
                </div>
                {errors.mobile && <span className="error-message">{errors.mobile}</span>}
              </div>
              
              <div className="form-group">
                <label>EMAIL ADDRESS <span className="required">*</span></label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com" 
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              {formData.docType === 'PAN Number' && (
                <div className="form-group">
                  <label>PAN NUMBER</label>
                  <input 
                    type="text" 
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleChange}
                    placeholder="ABCDE1234F" 
                    maxLength="10"
                    pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                    title="Please enter a valid PAN (e.g., ABCDE1234F)"
                  />
                </div>
              )}
              
              <div className="form-group">
                <label>DONATION AMOUNT (₹) <span className="required">*</span></label>
                <input 
                  type="number" 
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="Enter Amount" 
                  min="1"
                  className={errors.amount ? 'error' : ''}
                />
                {errors.amount && <span className="error-message">{errors.amount}</span>}
              </div>
            </div>
            
            <div className="form-section">
              <label>PAYMENT FREQUENCY</label>
              <div className="toggle-buttons">
                <button 
                  type="button" 
                  className={formData.frequency === 'One Time' ? 'active' : ''}
                  onClick={() => setFormData({...formData, frequency: 'One Time'})}
                >
                  One Time
                </button>
                <button 
                  type="button" 
                  className={formData.frequency === 'Monthly' ? 'active' : ''}
                  onClick={() => setFormData({...formData, frequency: 'Monthly'})}
                >
                  Monthly
                </button>
              </div>
            </div>
            
            {formData.frequency === 'Monthly' && (
              <>
                <div className="form-group">
                  <label>DURATION</label>
                  <select 
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                  >
                    <option>1 Year</option>
                    <option>3 Years</option>
                    <option>6 Months</option>
                    <option>Until Cancelled</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>PREFERRED DONATION DATE</label>
                  <div className="option-buttons">
                    {['5th', '10th', '15th', '20th', '25th'].map(date => (
                      <button
                        key={date}
                        type="button"
                        className={formData.donationDate === date ? 'active' : ''}
                        onClick={() => setFormData({...formData, donationDate: date})}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
            
            <div className="form-group">
              <label>PREFERRED AREA OF DONATION</label>
              <select 
                name="donationArea"
                value={formData.donationArea}
                onChange={handleChange}
              >
                <option>Medical Assistance</option>
                <option>Food Distribution</option>
                <option>Educational Programs</option>
                <option>Healing Sessions</option>
                <option>Where Most Needed</option>
              </select>
            </div>
            
            <div className="form-footer">
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="spinner"></span>
                ) : (
                  <>
                    <span className="btn-icon">💛</span> Donate Now
                  </>
                )}
              </button>
              <p className="form-note">
                Your donation details will be saved securely and shared via WhatsApp.
                <br />
                <span className="required">*</span> indicates required fields
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contribution;
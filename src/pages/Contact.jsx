import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus({
      submitted: true,
      success: false,
      message: 'Sending your message...'
    });
    
    try {
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/myzenrrr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message! We will be in touch soon.'
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    }
  };
  
  return (
    <div className="page">
      <h1 className="page-title">Contact</h1>
      
      <div className="content-section intro-section">
        <p>
          Ready to discuss your next event or have questions about our services? 
          Fill out the form below, and we'll get back to you as soon as possible.
        </p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-section">
            <h2>Get In Touch</h2>
            <p>Whether you're planning a special event, need catering services, or just want to learn more about what we offer, we're here to help.</p>
          </div>
          
          <div className="info-section">
            <h3>Location</h3>
            <p>Baku, AZ</p>
          </div>
          
          <div className="info-section">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9am - 6pm<br />
            Saturday: 10am - 4pm<br />
            Sunday: 10am - 2pm </p>
          </div>
          
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="social-icon">Instagram</i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="social-icon">Facebook</i>
            </a>
          </div>
        </div>
        
        <div className="contact-form-container">
          {formStatus.submitted && formStatus.success ? (
            <div className="success-message">
              <h3>Message Sent!</h3>
              <p>{formStatus.message}</p>
              <button 
                className="send-another-btn" 
                onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              
              <button type="submit" className="submit-btn" disabled={formStatus.submitted && !formStatus.success}>
                {formStatus.submitted && !formStatus.success ? 'Sending...' : 'Send Message'}
              </button>
              
              {formStatus.submitted && !formStatus.success && (
                <p className="form-status-message">{formStatus.message}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
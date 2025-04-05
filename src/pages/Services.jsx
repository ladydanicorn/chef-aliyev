import React from 'react';
import './Services.css';

export default function Services() {
  // Services offered
  const services = [
    {
      id: 1,
      title: 'Private Dining Experiences',
      icon: '🍽️',
      description: 'Exclusive in-home dining experiences tailored to your preferences. From intimate dinners for two to special celebrations with friends and family, enjoy restaurant-quality cuisine in the comfort of your own space.',
      features: [
        'Customized menu planning',
        'Grocery shopping and ingredient sourcing',
        'Full preparation and cooking in your kitchen',
        'Professional table setting and presentation',
        'Complete cleanup after service',
        'Available for special occasions, date nights, or regular meal services'
      ]
    },
    {
      id: 2,
      title: 'Event Catering',
      icon: '🎉',
      description: 'Elevate your gatherings with exceptional food that leaves a lasting impression. Whether it\'s a corporate event, wedding, or family celebration, our catering services bring creative, delicious cuisine to your special occasion.',
      features: [
        'Custom menus designed around your event',
        'Flexible service styles: buffet, family-style, or plated courses',
        'Coordination with venues and event planners',
        'Professional service staff available',
        'Catering for events of all sizes throughout Baku',
        'Seasonal and locally-sourced ingredients'
      ]
    },
    {
      id: 3,
      title: 'Culinary Consulting',
      icon: '📋',
      description: 'Expert guidance for food businesses looking to enhance their offerings, streamline operations, or develop new concepts. With experience across various culinary environments, we provide valuable insights to help your business thrive.',
      features: [
        'Menu development and refinement',
        'Kitchen workflow optimization',
        'Ingredient sourcing and vendor relationships',
        'Staff training and skill development',
        'Food cost analysis and control',
        'Concept development for new restaurants or food products'
      ]
    },
    {
      id: 4,
      title: 'Cooking Classes',
      icon: '👨‍🍳',
      description: 'Learn professional techniques and expand your culinary skills with personalized cooking classes. Perfect for individuals, couples, or groups who want to enhance their knowledge and confidence in the kitchen.',
      features: [
        'Customized lessons based on skill level and interests',
        'Hands-on instruction with professional techniques',
        'Focus on local Azerbaijani cuisine or international specialties',
        'Private lessons or group workshops available',
        'Ingredient selection and knife skills',
        'Recipe development and menu planning guidance'
      ]
    }
  ];
  
  return (
    <div className="page">
      <h1 className="page-title">Services</h1>
      
      <div className="content-section intro-section">
        <p>
          Based in Baku, Azerbaijan, I offer a range of culinary services designed to bring exceptional 
          food experiences to your home, business, or event. Each service is personalized to meet your 
          specific needs and preferences, with a focus on quality, creativity, and attention to detail.
        </p>
      </div>
      
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-header">
              <span className="service-icon">{service.icon}</span>
              <h2 className="service-title">{service.title}</h2>
            </div>
            
            <p className="service-description">{service.description}</p>
            
            <h3 className="features-title">What's Included:</h3>
            <ul className="service-features">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="content-section cta-section">
        <h2>Ready to elevate your culinary experience?</h2>
        <p>
          Each service is customized to your specific needs and preferences. 
          Contact me to discuss how I can help create memorable food experiences for your next occasion.
        </p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </div>
    </div>
  );
}
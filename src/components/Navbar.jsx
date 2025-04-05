import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      
      <ul className={isMenuOpen ? 'active' : ''}>
        <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
        <li><Link to="/services" onClick={closeMenu}>SERVICES</Link></li>
        <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
        <li><Link to="/events" onClick={closeMenu}>EVENTS</Link></li>
        <li><Link to="/gallery" onClick={closeMenu}>GALLERY</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
      </ul>
    </nav>
  );
}
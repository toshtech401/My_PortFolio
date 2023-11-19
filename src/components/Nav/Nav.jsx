import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <h3>Olatech</h3>

        <div className="menu-toggle" onClick={toggleMobileMenu}>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`} />
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a href="">Home</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Projects</a>
          </li>
          <li><a href="">Resume</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">Testimonials</a></li>
        </ul>
      </nav> 
    </div>
  )
}

export default Nav
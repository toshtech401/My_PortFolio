import React, { useEffect, useState } from 'react'
import './Nav.css'
import { MdOutlineMenu } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import {Link} from 'react-scroll'


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
          <button className='buuu'>
            {
              mobileMenuOpen ? <LiaTimesSolid /> : <MdOutlineMenu />
            }
          </button>
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="features" smooth={true} duration={500}>
              Features
            </Link>
          </li>
          <li>
            <Link to='projects' smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to='resume' smooth={true} duration={500}> 
              Resume
            </Link>
          </li>
          <li>
            <Link to='testimonials' smooth={true} duration={500}>
              Testimonials
            </Link>
          </li>
        </ul>
      </nav> 
    </div>
  )
}

export default Nav
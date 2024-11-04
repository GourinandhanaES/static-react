import React, { useState } from 'react';
import './Navbar.css';
import gymImage from '../images/gym_logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img className="logo" src={gymImage} alt="Gym logo" />
      <ul className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
        <li className='scroll'><a href="#services">Services</a></li>
        <li className='scroll'><a href="#programs">Membership</a></li>
        <li className='scroll'><a href="#locations">Location</a></li>
        <li className='scroll'><a href="#contact">Contact</a></li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
      </div>
    </nav>
  );
};

export default Navbar;



import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Rhythm</div>
      <ul className={isOpen ? `${styles.active}` : ''}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/faq">Tips</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/main">Try It!</Link></li>
      </ul>
      <div className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} onClick={toggleNavbar}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;

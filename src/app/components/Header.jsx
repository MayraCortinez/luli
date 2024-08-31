
import { useState } from 'react';
import styles from '../styles/components/header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="logo.png" alt="" />
      </div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/zuzzuu-logo.svg" alt="Zuzzuu Logo" className="logo" />
      </div>
      
      <button className="mobile-menu-button" onClick={toggleMenu}>
        ☰
      </button>
      
      <div className={`nav-container ${isMenuOpen ? 'active' : ''}`}>
        <nav className="nav-menu">
          <ul>
            <li><a href="/#" className="nav-link">ANASAYFA</a></li>
            <li><a href="/#" className="nav-link">GÖREVLER</a></li>
            <li><a href="/#" className="nav-link">ÖDÜL MERKEZİ</a></li>
          </ul>
        </nav>
        <button className="profile-button">PROFİLİM</button>
      </div>
    </header>
  );
}

export default Header;
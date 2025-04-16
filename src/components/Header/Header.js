import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/zuzzuu-logo.svg" alt="Zuzzuu Logo" className="logo" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="/#" className="nav-link">ANASAYFA</a></li>
          <li><a href="/#" className="nav-link">GÖREVLER</a></li>
          <li><a href="/#" className="nav-link">ÖDÜL MERKEZİ</a></li>
        </ul>
      </nav>
      <button className="profile-button">PROFİLİM</button>
    </header>
  );
}

export default Header;
// src/components/UserPoints/UserPointsSection.js
import React from 'react';
import './UserPointsSection.css';

function UserPointsSection() {
  return (
    <section className="points-section">
      <div className="coins-background"></div>
      <div className="points-content">
        <h2 className="points-title">Toplam Puanın</h2>
        <div className="points-display">
          <div className="coin-icon">
            <img src="/images/z-coin.svg" alt="Z Coin" />
          </div>
          <div className="xp-amount">2.500 XP</div>
        </div>
        <UserProfile />
      </div>
    </section>
  );
}

function UserProfile() {
  return (
    <div className="user-profile">
      <img src="/images/profile-avatar.svg" alt="User Avatar" className="user-avatar" />
      <div className="user-info">
        <div className="user-name">Ahmet Özdemir</div>
        <div className="user-level-container">
          <img src="/images/silver-medal.svg" alt="Silver Member" className="level-icon" />
          <div className="user-level">Gümüş Üye</div>
        </div>
      </div>
    </div>
  );
}

export default UserPointsSection;
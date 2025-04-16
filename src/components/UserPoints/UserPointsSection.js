import React, { useState, useEffect } from 'react';
import './UserPointsSection.css';
import { fetchUserPoints } from '../../services/api';

function UserPointsSection() {
  const [userData, setUserData] = useState({
    id: 1,
    username: "Ahmet Özdemir",
    points: 2500,
    level: "Gümüş Üye"
  });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API'den kullanıcı verilerini çek
    const loadUserData = async () => {
      setLoading(true);
      const data = await fetchUserPoints("Ahmet Özdemir");
      if (data) {
        setUserData(data);
      }
      setLoading(false);
    };
    
    loadUserData();
  }, []);

  return (
    <section className="points-section">
      <div className="coins-background"></div>
      <div className="points-content">
        <h2 className="points-title">Toplam Puanın</h2>
        {loading ? (
          <div>Yükleniyor...</div>
        ) : (
          <>
            <div className="points-display">
              <div className="coin-icon">
                <img src="/images/z-coin.svg" alt="Z Coin" />
              </div>
              <div className="xp-amount">{userData.points.toLocaleString()} XP</div>
            </div>
            <UserProfile username={userData.username} level={userData.level} />
          </>
        )}
      </div>
    </section>
  );
}

function UserProfile({ username, level }) {
  return (
    <div className="user-profile">
      <img src="/images/profile-avatar.svg" alt="User Avatar" className="user-avatar" />
      <div className="user-info">
        <div className="user-name">{username}</div>
        <div className="user-level-container">
          <img 
            src={`/images/${level.toLowerCase().includes('altın') ? 'gold' : level.toLowerCase().includes('gümüş') ? 'silver' : 'bronze'}-medal.svg`} 
            alt={level} 
            className="level-icon" 
          />
          <div className="user-level">{level}</div>
        </div>
      </div>
    </div>
  );
}

export default UserPointsSection;
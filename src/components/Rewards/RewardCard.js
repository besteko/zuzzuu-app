// src/components/Rewards/RewardCard.js
import React from 'react';
import './RewardCard.css';

function RewardCard({ reward }) {
  return (
    <div className="reward-card">
      <div className="reward-image-container">
        <img src={reward.image} alt={reward.title} className="reward-image" />
      </div>
      <div className="reward-info">
        <h3 className="reward-title">{reward.title}</h3>
        <div className="reward-points">
          <img src="/images/z-coin.svg" alt="Z Coin" className="reward-coin" />
          <span>{reward.points.toLocaleString()} XP</span>
        </div>
      </div>
    </div>
  );
}

export default RewardCard;
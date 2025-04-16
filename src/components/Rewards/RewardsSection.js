// src/components/Rewards/RewardsSection.js
import React from 'react';
import RewardCard from './RewardCard';
import './RewardsSection.css';

function RewardsSection() {
  const rewards = [
    {
      id: 1,
      title: 'İlk alışverişte %10 İndirim',
      points: 1000,
      image: '/images/sale.svg'
    },
    {
      id: 2,
      title: 'iPhone 256GB Telefon',
      points: 10000,
      image: '/images/iphone.svg'
    },
    {
      id: 3,
      title: 'Macbook Air Bilgisayar',
      points: 7500,
      image: '/images/macbook.svg'
    },
    {
      id: 4,
      title: 'Playstation 5 Oyun Konsolu',
      points: 5000,
      image: '/images/ps5.svg'
    }
  ];

  return (
    <section className="rewards-section">
      <div className="section-header">
        <h2 className="section-title">Ödül Merkezi</h2>
        <button className="view-all-button">Tümünü Gör</button>
      </div>
      <div className="rewards-grid">
        {rewards.map(reward => (
          <RewardCard key={reward.id} reward={reward} />
        ))}
      </div>
    </section>
  );
}

export default RewardsSection;
// src/components/Tasks/TaskCard.js
import React from 'react';
import './TaskCard.css';

function TaskCard({ task }) {
  return (
    <div className="task-card">
      <div className="task-coin">
        <img src="/images/z-coin.svg" alt="Z Coin" />
        <span className="task-points">{task.points} XP</span>
      </div>
      <h3 className="task-title">{task.title}</h3>
      <div className="progress-container">
        <div className="progress-bar-wrapper">
          <div 
            className="progress-bar" 
            style={{ width: `${task.progress}%` }}
          ></div>
        </div>
        <div className="task-progress-text">{task.completed} / {task.total}</div>
      </div>
    </div>
  );
}

export default TaskCard;
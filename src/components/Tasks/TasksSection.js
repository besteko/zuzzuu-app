// src/components/Tasks/TasksSection.js
import React from 'react';
import TaskCard from './TaskCard';
import './TasksSection.css';

function TasksSection() {
  const tasks = [
    { 
      id: 1, 
      title: 'Aylık Alışveriş Hedefi', 
      points: 500, 
      progress: 50, 
      completed: 2, 
      total: 4 
    },
    { 
      id: 2, 
      title: 'Günlük Check-in', 
      points: 100, 
      progress: 57, 
      completed: 4, 
      total: 7 
    },
    { 
      id: 3, 
      title: 'Hoşgeldin Görevi', 
      points: 500, 
      progress: 100, 
      completed: 1, 
      total: 1 
    },
    { 
      id: 4, 
      title: 'E-Posta Doğrula', 
      points: 50, 
      progress: 0, 
      completed: 0, 
      total: 1 
    },
  ];

  return (
    <section className="tasks-section">
      <div className="section-header">
        <h2 className="section-title">Görevleri Keşfet</h2>
        <button className="view-all-button">Tümünü Gör</button>
      </div>
      <div className="tasks-grid">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}

export default TasksSection;
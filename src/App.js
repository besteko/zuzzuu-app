import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import UserPointsSection from './components/UserPoints/UserPointsSection';
import TasksSection from './components/Tasks/TasksSection';
import RewardsSection from './components/Rewards/RewardsSection';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <UserPointsSection />
        <TasksSection />
        <RewardsSection />
      </main>
    </div>
  );
}

export default App;
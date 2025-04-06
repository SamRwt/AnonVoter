import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import VotePage from './pages/VotePage';

function App() {
  // TODO isLoggedIn;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<VotePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/vote" element={<VotePage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import IntroductionPage from './IntroductionPage';
import QuizPage from './QuizPage';
import PersonalityTypes from './PersonalityTypes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/personality" element={<PersonalityTypes />} />
      </Routes>
    </div>
  );
}

export default App;

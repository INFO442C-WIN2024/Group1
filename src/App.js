import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import IntroductionPage from './IntroductionPage';
import QuizPage from './QuizPage';
import PersonalityTypes from './PersonalityTypes';
import AboutPage from './AboutPage';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/personality" element={<PersonalityTypes />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './App.css';

const IntroductionPage = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="intro-container">
      <div className="title">FinFin</div>
      <div className="subtitle">Find out your financial personality!</div>
      <Link to="/quiz" className="nav-quiz">Quiz!</Link>
      <Link to="/personality" className="nav-personality">Personality Types</Link>
      <div className="svg-container">
        <div className="svg-wrapper">
          <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0C15.6 15.4727 4.83333 21.7803 0 23C6.4 12.5455 4.66667 3.31061 3 0H20Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="10" y1="0" x2="10" y2="23" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.85"/>
                <stop offset="1" stopColor="white" stopOpacity="0.95"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="svg-bg"></div>
      </div>
      <div className="start-button-container" onClick={handleStartQuiz}>
        <div className="start-button-bg"></div>
        <div className="start-button-text">Start!</div>
      </div>
      <div className="icon-container">
        <img src="https://placehold.co/56x56" alt="icon" />
      </div>
    </div>
  );
};

export default IntroductionPage;

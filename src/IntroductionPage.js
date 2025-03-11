import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './App.css';


import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';
import image7 from './images/7.png';
import image8 from './images/8.png';


const IntroductionPage = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(prevIndex => (prevIndex + 1) % images.length);
    }, 800); // 0.8s

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="intro-container">
      <div className="title">FinFin</div>
      <div className="subtitle">Find out your financial personality!</div>
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
        <img src={images[currentImage]} alt="icon" />
      </div>
    </div>
  );
};

export default IntroductionPage;

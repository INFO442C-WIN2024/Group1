import React from 'react';
import './App.css';

const IntroductionPage = () => {
  const handleStartQuiz = () => {
    window.location.href = 'https://info442c-win2024.github.io/Group1/quiz';
  };

  return (
    <div className="intro-page">
      <div className="intro-content">
        <h1>Welcome to the Ultimate Financial Habit Quiz!</h1>
        <p>
          Ever wondered what your money habits say about you? Are you a cautious saver, a strategic planner, or maybe an opportunistic investor? 
          Dive into our fun, engaging quiz and discover your unique financial personality!
        </p>
        <p>
          Our quiz is designed with thought-provoking questions and surprising insights to help you understand your financial style.
          Whether you're looking to refine your spending habits or boost your investment strategy, there’s something interesting here for everyone.
        </p>
        <p>
          Get ready to embark on a journey of self-discovery – your wallet might just thank you for it!
        </p>
        {/* 添加 Start Quiz 按钮 */}
        <button className="start-quiz-button" onClick={handleStartQuiz}>
          Start Quiz
        </button>
      </div>
      <div className="intro-images">
        <img src="https://www.pfgprivatewealth.com/wp-content/uploads/2019/10/financial-planning.jpg" alt="Image 1" />
      </div>
    </div>
  );
};

export default IntroductionPage;

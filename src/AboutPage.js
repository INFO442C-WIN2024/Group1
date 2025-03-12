import React from 'react';
import './App.css';

const AboutPage = () => {
  return (
    <div className="page-container">
      <div className="content-area">
        <div className="about-container">
          <div className="about-icon">
          </div>
          
          <h1>About Fin Fin</h1>
          
          <p>
            Do you often pay attention to spending habits? Actually, your money habits have a personality—and it's probably a little wild. This quiz helps you discover your Financial Spirit Animal, so you can laugh at your spending style and learn how to improve it.
          </p>
          
          <p>
            We will use different animals to represent your financial personality, because finance should be fun, not boring. And let's be honest—picturing yourself as a budgeting squirrel or a splurging raccoon just makes sense.
          </p>
          
          <span className="emoji">💸 🦊 🐿️ 🦝</span>
          
          <p>
            Take the quiz and meet your money animal! Our fun, quick assessment will match you with your financial spirit animal and give you personalized tips to improve your relationship with money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
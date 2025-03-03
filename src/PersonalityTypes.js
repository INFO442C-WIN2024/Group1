import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const IntroductionPage = () => {
  return (
    <div className="intro-container">
      {/* 顶部导航 */}
      <Link to="/quiz" className="nav-quiz">Quiz!</Link>
      <Link to="/personality" className="nav-personality">Personality Types</Link>

      {/* 右侧图标组 */}
      <div className="icon icon-1">
        <div className="icon-bg"></div>
        <img src="https://placehold.co/57x57" alt="icon1" />
      </div>
      <div className="icon icon-2">
        <div className="icon-bg"></div>
        <img src="https://placehold.co/57x57" alt="icon2" />
      </div>
      <div className="icon icon-3">
        <div className="icon-bg"></div>
        <img src="https://placehold.co/57x57" alt="icon3" />
      </div>
      <div className="icon icon-4">
        <div className="icon-bg"></div>
        <img src="https://placehold.co/58x58" alt="icon4" />
      </div>
      <div className="icon icon-5">
        <div className="icon-bg"></div>
        <img src="https://placehold.co/57x57" alt="icon5" />
      </div>
      <div className="icon icon-6">
        <div className="icon-bg"></div>
        <img src="https://placehold.co/58x58" alt="icon6" />
      </div>
      <div className="icon icon-7">
        <div className="icon-bg"></div>
        <img src="https://placehold.co/57x57" alt="icon7" />
      </div>
      <div className="icon icon-8">
        <div className="icon-bg"></div>
        <img src="https://placehold.co/57x57" alt="icon8" />
      </div>

      {/* 白色详情框 */}
      <div className="detail-container"></div>

      {/* 详情框内文字 */}
      <div className="personality-name">Penguin</div>
      <div className="personality-subtitle">Debt Fighter</div>
      <div className="section-title whoami">Who am I?</div>
      <div className="description">
        Penguins waddle through life with the weight of their colony on their backs—just like you and your student loans. First priority? Paying off debt.
      </div>
      <div className="section-title strength">Strength</div>
      <div className="strength-description">
        Responsible, disciplined, probably has an airtight repayment plan and knows their credit score by heart.
      </div>
      <div className="section-title weakness">Weakness</div>
      <div className="weakness-description">
        So focused on paying off debt that they forget life exists outside of financial survival mode.
      </div>

      {/* 白框内主要图片 */}
      <img className="detail-image" src="https://placehold.co/177x177" alt="Penguin" />
    </div>
  );
};

export default IntroductionPage;

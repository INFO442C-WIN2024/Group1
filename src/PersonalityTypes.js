import React from 'react';
import './App.css';

const personalityData = [
  {
    type: 'Ant',
    title: 'The Super Planner',
    description: "You're like an ant—you work hard and always plan ahead. You save little by little to build a strong financial foundation.",
  },
  {
    type: 'Owl',
    title: 'The Wise Thinker',
    description: "You analyze every move and make decisions thoughtfully. Like an owl, you keep a careful watch over your finances.",
  },
  {
    type: 'Bear',
    title: 'The Safety-First Type',
    description: "Security is your top priority. Just like a bear hibernates to stay safe, you build a solid reserve for unexpected times.",
  },
  {
    type: 'Dolphin',
    title: 'The Fun-Lover',
    description: "You love to enjoy life and spend on experiences. Like a playful dolphin, you know how to balance fun with financial awareness.",
  },
  {
    type: 'Squirrel',
    title: 'The Saver',
    description: "You’re always stashing away money for a rainy day—just like a squirrel gathering acorns for winter.",
  },
  {
    type: 'Fox',
    title: 'The Clever Risk-Taker',
    description: "Quick-witted and agile, you’re ready to seize opportunities. Like a fox, you take calculated risks to maximize your returns.",
  }
];

const PersonalityTypes = () => {
  return (
    <div className="personality-page">
      <h2 className="personality-header">Explore Your Financial Personality</h2>
      <p className="personality-subheader">
        Discover which personality type matches your money habits.
      </p>
      <div className="personality-grid">
        {personalityData.map((item) => (
          <div key={item.type} className="personality-card">
            <div className="personality-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalityTypes;

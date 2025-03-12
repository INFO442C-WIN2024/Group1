import React, { useState, useEffect } from 'react';
import { questions, quizResultDescriptions } from './data';
import { useNavigate } from 'react-router-dom';
import './QuizPage.css';

import squirrelImg from './images/Squirrel.png';
import penguinImg from './images/Penguin.png';
import owlImg from './images/Owl.png';
import foxImg from './images/Fox.png';
import raccoonImg from './images/Raccoon.png';
import cheetahImg from './images/Cheetah.png';
import goldenRetrieverImg from './images/GoldenRetriever.png';
import capybaraImg from './images/Capybara.png';

// Animal image mapping
const animalImages = {
  Squirrel: squirrelImg,
  Penguin: penguinImg,
  Owl: owlImg,
  Fox: foxImg,
  Raccoon: raccoonImg,
  Cheetah: cheetahImg,
  'Golden Retriever': goldenRetrieverImg,
  Capybara: capybaraImg,
};
const allImagesArray = Object.values(animalImages);

const QuizPage = () => {
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [stage, setStage] = useState('quiz');

  // Loading animation states
  const [ellipsisCount, setEllipsisCount] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(0);
  const [randomLoadingImg, setRandomLoadingImg] = useState(allImagesArray[0]);
  const [finalAnimal, setFinalAnimal] = useState(null);

  // Handle option selection
  const handleOptionClick = (questionId, optionIndex) => {
    const selectedOptions = answers[questionId] || [];
    if (selectedOptions.includes(optionIndex)) {
      const newSelection = selectedOptions.filter((i) => i !== optionIndex);
      setAnswers({ ...answers, [questionId]: newSelection });
    } else {
      if (selectedOptions.length < 2) {
        setAnswers({ ...answers, [questionId]: [...selectedOptions, optionIndex] });
      } else {
        alert('You can select at most 2 options for this question.');
      }
    }
  };

  // Go to next question
  const goToNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (!answers[currentQuestion.id] || answers[currentQuestion.id].length === 0) {
      alert("Please select at least one option before moving to the next question.");
      return;
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Go to previous question
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Submit quiz
  const handleSubmit = () => {
    // Check all questions have at least one selection
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const selected = answers[q.id] || [];
      if (selected.length === 0) {
        alert(`Please select at least one option for question ${i + 1}`);
        return;
      }
    }

    // Calculate scores
    const scores = {
      Squirrel: 0,
      Penguin: 0,
      Owl: 0,
      Fox: 0,
      Raccoon: 0,
      Cheetah: 0,
      'Golden Retriever': 0,
      Capybara: 0,
    };

    questions.forEach((question) => {
      const selectedIndices = answers[question.id] || [];
      selectedIndices.forEach((idx) => {
        const selectedOption = question.options[idx];
        for (let animal in selectedOption.score) {
          scores[animal] += selectedOption.score[animal];
        }
      });
    });

    // Find highest score
    let computedFinalAnimal = null;
    let highestScore = -Infinity;
    for (const animal of Object.keys(scores)) {
      if (scores[animal] > highestScore) {
        highestScore = scores[animal];
        computedFinalAnimal = animal;
      }
    }
    setFinalAnimal(computedFinalAnimal);
    setResult(quizResultDescriptions[computedFinalAnimal]);
    setStage('loading');
    setEllipsisCount(0);
    setImageOpacity(0);
  };

  // Loading stage animation
  useEffect(() => {
    if (stage === 'loading') {
      const ellipsisTimer = setInterval(() => {
        setEllipsisCount((c) => (c < 3 ? c + 1 : 0));
      }, 500);

      const flashingTimer = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * allImagesArray.length);
        setRandomLoadingImg(allImagesArray[randomIndex]);
      }, 200);

      const fadeTimer = setTimeout(() => {
        setImageOpacity(1);
      }, 1000);

      const loadingTimer = setTimeout(() => {
        clearInterval(ellipsisTimer);
        clearInterval(flashingTimer);
        setStage('result');
      }, 3000);

      return () => {
        clearInterval(ellipsisTimer);
        clearInterval(flashingTimer);
        clearTimeout(loadingTimer);
        clearTimeout(fadeTimer);
      };
    }
  }, [stage]);

  // Retake quiz
  const handleRetake = () => {
    setAnswers({});
    setResult(null);
    setStage('quiz');
    setCurrentQuestionIndex(0);
  };

  // Go to personality details
  const handleLearnMore = () => {
    navigate('/personality');
  };

  const totalQuestions = questions.length;
  const question = questions[currentQuestionIndex];
  const isSelected = (idx) => (answers[question.id] || []).includes(idx);
  const finalAnimalImg = animalImages[finalAnimal] || penguinImg;

  // Format text for result page
  const formatText = (text) => {
    if (!text) return null;
    const str = Array.isArray(text) ? text.join('\n') : text;
    return str.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  // Loading stage
  if (stage === 'loading') {
    const dots = '.'.repeat(ellipsisCount);
    return (
      <div className="loading-screen">
        <div className="loading-title">You are a{dots}</div>
        <div className="loading-image-container" style={{ opacity: imageOpacity }}>
          <img
            src={randomLoadingImg}
            alt="animal"
            className="loading-image"
          />
        </div>
      </div>
    );
  }

  // Result stage
  if (stage === 'result' && result) {
    return (
      <div className="result-page">
        <div className="result-card">
          <div className="result-header">
            <h1 className="result-title">{result.title}</h1>
            <h3 className="result-subtitle">{result.subtitle}</h3>
            <img src={finalAnimalImg} alt={result.title} className="result-animal-image" />
          </div>
          <div className="result-content">
            <h2 className="result-section-title">Who am I?</h2>
            <p className="result-text">{formatText(result.intro)}</p>
            <h2 className="result-section-title">Strength</h2>
            <p className="result-text">{formatText(result.strengths)}</p>
            <h2 className="result-section-title">Weakness</h2>
            <p className="result-text">{formatText(result.weaknesses)}</p>
            <h2 className="result-section-title">Ways to Improve</h2>
            <p className="result-text">{formatText(result.waysToImprove)}</p>
          </div>
        </div>
        <div className="result-buttons">
          <button onClick={handleLearnMore} className="result-button-back">See other types</button>
          <button onClick={handleRetake} className="result-button-next">Try again?</button>
        </div>
      </div>
    );
  }

  // Quiz stage
  return (
    <div className="quiz-container">
      <div className="question-number">
        <div className="circle-background"></div>
        <div className="circle-border"></div>
        <div className="question-number-text">#{currentQuestionIndex + 1}</div>
      </div>

      <div className="question-text">{question.question}</div>

      <div className="options-container">
        {question.options.map((opt, idx) => (
          <div
            key={idx}
            className={`option-box ${isSelected(idx) ? 'selected-option' : ''}`}
            onClick={() => handleOptionClick(question.id, idx)}
          >
            <div className="option-bg"></div>
            <div className="option-text" dangerouslySetInnerHTML={{ __html: opt.option }} />
          </div>
        ))}
      </div>

      <div className="navigation-buttons">
        {currentQuestionIndex > 0 && (
          <div className="back-button" onClick={goToPreviousQuestion}>
            <div className="back-bg"></div>
            <div className="back-text">Back</div>
          </div>
        )}

        {currentQuestionIndex < totalQuestions - 1 ? (
          <div className="next-button" onClick={goToNextQuestion}>
            <div className="next-bg"></div>
            <div className="next-text">Next</div>
          </div>
        ) : (
          <div className="next-button" onClick={handleSubmit}>
            <div className="next-bg"></div>
            <div className="next-text">Submit</div>
          </div>
        )}
      </div>

      <div className="progress-container">
        <div className="progress-line">
          <svg width="100%" height="11" viewBox="0 0 970 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 5.5H969.5" stroke="black" strokeWidth="10" />
          </svg>
        </div>

        <div className="progress-circles">
          {Array.from({ length: totalQuestions }).map((_, idx) => {
            const isActive = idx === currentQuestionIndex;
            return (
              <div key={idx} className={`progress-circle ${isActive ? 'active' : ''}`}>
                {isActive ? (
                  <>
                    <div className="progress-inner-black"></div>
                    <div className="progress-inner-yellow"></div>
                    <div className="progress-circle-text">{idx + 1}</div>
                  </>
                ) : (
                  <>
                    <div className="progress-inner-blue"></div>
                    <div className="progress-circle-text">{idx + 1}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
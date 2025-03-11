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

  // “You are a...”
  const [ellipsisCount, setEllipsisCount] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(0);

  const [randomLoadingImg, setRandomLoadingImg] = useState(allImagesArray[0]);

  const [finalAnimal, setFinalAnimal] = useState(null);

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

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const selected = answers[q.id] || [];
      if (selected.length === 0) {
        alert(`Please select at least one option for question ${i + 1}`);
        return;
      }
    }

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

  const handleRetake = () => {
    setAnswers({});
    setResult(null);
    setStage('quiz');
    setCurrentQuestionIndex(0);
  };

  const handleLearnMore = () => {
    navigate('/personality');
  };

  const totalQuestions = questions.length;
  const question = questions[currentQuestionIndex];
  const hasFiveOptions = question.options.length === 5;
  const shiftDown = hasFiveOptions ? 110 : 0;
  const isSelected = (idx) => (answers[question.id] || []).includes(idx);
  const getOptionClass = (idx) => {
    if (idx === 0) return 'option-box option-box-1';
    if (idx === 1) return 'option-box option-box-2';
    if (idx === 2) return 'option-box option-box-3';
    if (idx === 3) return 'option-box option-box-4';
    if (idx === 4) return 'option-box option-box-5';
    return 'option-box option-box-1';
  };

  const finalAnimalImg = animalImages[finalAnimal] || penguinImg;

  if (stage === 'loading') {
    const dots = '.'.repeat(ellipsisCount);
    return (
      <div
        style={{
          width: '1280px',
          height: '936px',
          background: '#0057FF',
          paddingTop: '128px',
          paddingBottom: '341px',
          paddingLeft: '120px',
          paddingRight: '120px',
          display: 'inline-flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '1040px',
            height: '212px',
            textAlign: 'center',
            color: 'white',
            fontSize: '128px',
            fontFamily: 'rl-aqva, sans-serif',
            fontWeight: 900,
            wordWrap: 'break-word',
          }}
        >
          You are a{dots}
        </div>
        <div
          style={{
            width: '254px',
            height: '254px',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'inline-flex',
            transition: 'opacity 1s',
            opacity: imageOpacity,
          }}
        >
          <img
            style={{ width: '254px', height: '254px' }}
            src={randomLoadingImg}
            alt="animal"
          />
        </div>
      </div>
    );
  }

  const formatText = (text) => {
    if (!text) return null;
    // 如果 text 为数组，则先用换行符拼接成字符串
    const str = Array.isArray(text) ? text.join('\n') : text;
    return str.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  if (stage === 'result' && result) {
    return (
      <div style={{ width: '1280px', background: '#0057FF', padding: '40px', boxSizing: 'border-box',marginTop: 100 }}>
        <div style={{ 
          background: '#CFF1FF', 
          border: '10px solid black', 
          borderRadius: '30px', 
          margin: '20px 350px', 
          width: '650px', 
          padding: '20px',
          boxSizing: 'border-box',
          color: 'black'  // 整体文字颜色为黑色
        }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ margin: '10px 0', fontFamily: 'rl-aqva, sans-serif', color: 'black' }}>{result.title}</h1>
            <h3 style={{ margin: '10px 0', fontFamily: 'rl-aqva, sans-serif', color: 'black' }}>{result.subtitle}</h3>
            <img src={finalAnimalImg} alt={result.title} style={{ width: '177px', height: '177px' }}/>
          </div>
          <div style={{ marginTop: '20px', fontFamily: 'Red Rose, sans-serif', color: 'black' }}>
            <h2 style={{ fontWeight: 900, fontFamily: 'rl-aqva, sans-serif' }}>Who am I?</h2>
            <p style={{ fontWeight: 700 }}>{formatText(result.intro)}</p>
            <h2 style={{ fontWeight: 900, fontFamily: 'rl-aqva, sans-serif' }}>Strength</h2>
            <p style={{ fontWeight: 700 }}>{formatText(result.strengths)}</p>
            <h2 style={{ fontWeight: 900, fontFamily: 'rl-aqva, sans-serif' }}>Weakness</h2>
            <p style={{ fontWeight: 700 }}>{formatText(result.weaknesses)}</p>
            <h2 style={{ fontWeight: 900, fontFamily: 'rl-aqva, sans-serif' }}>Ways to Improve</h2>
            <p style={{ fontWeight: 700 }}>{formatText(result.waysToImprove)}</p>
          </div>
        </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', marginLeft:150 }}>
          <button onClick={handleLearnMore} className="result-button-back">See other types</button>
          <button onClick={handleRetake} className="result-button-next">Try again?</button>
          </div>
      </div>
    );
  }

  // test
  return (
    <div className="quiz-wrapper">
      <div className="quiz-page-container" style={{ minHeight: 850 + shiftDown }}>
        <div className="question-number-container">
          <div className="circle-background"></div>
          <div className="circle-border"></div>
          <div className="question-number-text">#{currentQuestionIndex + 1}</div>
        </div>
        <div className="question-text">{question.question}</div>
        {question.options.map((opt, idx) => {
          const classes = getOptionClass(idx);
          const selectedClass = isSelected(idx) ? ' selected-option' : '';
          return (
            <div
              key={idx}
              className={classes + selectedClass}
              onClick={() => handleOptionClick(question.id, idx)}
            >
              <div className="option-bg"></div>
              <div className="option-text" dangerouslySetInnerHTML={{ __html: opt.option }} />
            </div>
          );
        })}
        {currentQuestionIndex > 0 && (
          <div className="back-button" style={{ top: 536 + shiftDown }} onClick={goToPreviousQuestion}>
            <div className="back-bg"></div>
            <div className="back-text">Back</div>
          </div>
        )}
        {currentQuestionIndex < totalQuestions - 1 ? (
          <div className="next-button" style={{ top: 537 + shiftDown }} onClick={goToNextQuestion}>
            <div className="next-bg"></div>
            <div className="next-text">Next</div>
          </div>
        ) : (
          <div className="next-button" style={{ top: 537 + shiftDown }} onClick={handleSubmit}>
            <div className="next-bg"></div>
            <div className="next-text">Submit</div>
          </div>
        )}
        <div className="progress-line" style={{ top: 689.5 + shiftDown }}>
          <svg width="970" height="11" viewBox="0 0 970 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 5.5H969.5" stroke="black" strokeWidth="10" />
          </svg>
        </div>
        {Array.from({ length: totalQuestions }).map((_, idx) => {
          const circleClass = `progress-circle circle-${idx + 1}`;
          const isActive = idx === currentQuestionIndex;
          return (
            <div key={idx} className={circleClass} style={{ top: 652 + shiftDown }}>
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
  );
};

export default QuizPage;

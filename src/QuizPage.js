import React, { useState } from 'react';
import { questions, quizResultDescriptions } from './data';
import { useNavigate } from 'react-router-dom';
import './App.css';

const QuizPage = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // answers[questionId] = [optionIndex1, optionIndex2, ...]
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  // 倒计时相关
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [countdown, setCountdown] = useState(3);

  // 处理点击选项逻辑
  const handleOptionClick = (questionId, optionIndex) => {
    const selectedOptions = answers[questionId] || [];

    // 如果该选项已被选中，则再次点击取消选中
    if (selectedOptions.includes(optionIndex)) {
      const newSelection = selectedOptions.filter((i) => i !== optionIndex);
      setAnswers({ ...answers, [questionId]: newSelection });
    } else {
      // 如果未选中，先检查是否已经 2 项
      if (selectedOptions.length < 2) {
        setAnswers({
          ...answers,
          [questionId]: [...selectedOptions, optionIndex],
        });
      } else {
        alert('You can select at most 2 options for this question.');
      }
    }
  };

  // 分页：每次前进或后退 2 题
  const goToNextQuestion = () => {
    if (currentQuestionIndex + 2 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 2);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex - 2 >= 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 2);
    }
  };

  // 开始倒计时
  const startCountdown = (finalResult) => {
    setIsCountingDown(true);
    setCountdown(3);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsCountingDown(false);
          setResult(finalResult);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 提交逻辑
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1) 检查是否每题至少选 1 个
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const selected = answers[q.id] || [];
      if (selected.length === 0) {
        alert(`Please select at least one option for question ${i + 1}`);
        return;
      }
    }

    // 2) 计算分数
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

    // 3) 找到最高分；并列则取最先出现的
    let finalAnimal = null;
    let highestScore = -Infinity;
    for (const animal of Object.keys(scores)) {
      if (scores[animal] > highestScore) {
        highestScore = scores[animal];
        finalAnimal = animal;
      }
    }

    const finalResult = quizResultDescriptions[finalAnimal];
    startCountdown(finalResult);
  };

  // 重做测验
  const handleRetake = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResult(null);
  };

  // 跳转到金融人格详情页
  const handleLearnMore = () => {
    navigate('/personality');
  };

  // 当前页面的两道题
  const currentQuestions = questions.slice(currentQuestionIndex, currentQuestionIndex + 2);

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <h2>Ultimate Financial Personality Quiz – The Internet Animal Edition</h2>
        <p>Answer a few fun questions to reveal your unique financial habits in the most brutally honest way possible.</p>
      </div>

      {/* 问卷部分（结果未生成时） */}
      {!result && (
        <form onSubmit={handleSubmit} className="quiz-form">
          <div className="question-pair">
            {currentQuestions.map((question, idx) => (
              <div className="question-card" key={question.id}>
                <div className="question-number-container">
                  <div className="circle-background"></div>
                  <div className="circle-border"></div>
                  <div className="question-number-text">
                    #{currentQuestionIndex + idx + 1}
                  </div>
                </div>
                <div className="question-text">{question.question}</div>
                <div className="options-grid">
                  {question.options.map((option, index) => {
                    // 判断该选项是否被选中
                    const isSelected = answers[question.id]?.includes(index);

                    return (
                      <div
                        key={index}
                        className={`option-box ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleOptionClick(question.id, index)}
                      >
                        {option.option}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="nav-buttons">
            {currentQuestionIndex > 0 && (
              <button
                type="button"
                className="nav-btn"
                onClick={goToPreviousQuestion}
              >
                ← Previous
              </button>
            )}
            {currentQuestionIndex + 2 < questions.length ? (
              <button
                type="button"
                className="nav-btn"
                onClick={goToNextQuestion}
              >
                Next →
              </button>
            ) : (
              <button type="submit" className="submit-btn">
                Submit Quiz
              </button>
            )}
          </div>
        </form>
      )}

      {/* 倒计时遮罩层 */}
      {isCountingDown && (
        <div className="countdown-overlay">
          <div className="countdown-modal">
            <h3>Waiting for your result...</h3>
            <div className="countdown-number">{countdown}</div>
          </div>
        </div>
      )}

      {/* 结果展示 */}
      {result && !isCountingDown && (
        <div className="result-container">
          <h3>{result.title}</h3>
          <p>{result.intro}</p>
          <div className="result-section">
            <h4>Strengths:</h4>
            <div className="result-text">
              {result.strengths.map((strength, i) => (
                <p key={i}>{strength}</p>
              ))}
            </div>
          </div>
          <div className="result-section">
            <h4>Weaknesses:</h4>
            <div className="result-text">
              {result.weaknesses.map((weakness, i) => (
                <p key={i}>{weakness}</p>
              ))}
            </div>
          </div>
          <div className="result-section">
            <h4>Ways to Improve:</h4>
            <div className="result-text">
              {result.waysToImprove.map((tip, i) => (
                <p key={i}>{tip}</p>
              ))}
            </div>
          </div>
          <div className="post-result-buttons">
            <button
              type="button"
              className="nav-btn"
              style={{ marginRight: '15px' }}
              onClick={handleRetake}
            >
              Retake the Quiz
            </button>
            <button type="button" className="nav-btn" onClick={handleLearnMore}>
              Learn More Financial Personality
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;

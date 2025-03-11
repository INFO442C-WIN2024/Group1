// QuizPage.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuizPage from './QuizPage';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

global.alert = jest.fn();

describe('QuizPage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders QuizPage without errors and shows first question', () => {
    render(
      <BrowserRouter>
        <QuizPage />
      </BrowserRouter>
    );
    const questionText = screen.getByText((content, element) => {
      return content.includes("What do you do when you get paid?");
    });
    expect(questionText).toBeInTheDocument();
  });

  test('clicking "Next" without selecting an option triggers alert', () => {
    render(
      <BrowserRouter>
        <QuizPage />
      </BrowserRouter>
    );
    const nextButton = screen.getByText(/Next/i);
    fireEvent.click(nextButton);
    expect(global.alert).toHaveBeenCalledWith(
      "Please select at least one option before moving to the next question."
    );
  });

  test('clicking an option adds selected-option class', () => {
    render(
      <BrowserRouter>
        <QuizPage />
      </BrowserRouter>
    );
    const optionElement = screen.getByText(/Save and invest like a responsible adult/i);
    fireEvent.click(optionElement);
    expect(optionElement.parentElement).toHaveClass("selected-option");
  });
});

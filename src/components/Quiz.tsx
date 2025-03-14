
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import quizData from '@/data/quizData';
import Question from './Question';
import Result from './Result';

interface QuizProps {
  onRestart: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onRestart }) => {
  // State to store the randomized questions for this quiz session
  const [randomizedQuestions, setRandomizedQuestions] = useState<typeof quizData>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // Function to shuffle questions
  const shuffleQuestions = useCallback(() => {
    // Create a copy of the quiz data to shuffle
    const shuffled = [...quizData]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10) // Ensure we only take 10 questions
      .map((q, idx) => ({ ...q, id: idx + 1 })); // Reassign IDs to be sequential
    
    setRandomizedQuestions(shuffled);
    // Reset answers array to match the number of questions
    setAnswers(Array(shuffled.length).fill(null));
  }, []);

  // Initialize quiz with shuffled questions
  useEffect(() => {
    shuffleQuestions();
  }, [shuffleQuestions]);

  // Calculate the score when the quiz is completed
  useEffect(() => {
    if (quizComplete && randomizedQuestions.length > 0) {
      let correctAnswers = 0;
      answers.forEach((answer, index) => {
        if (answer === randomizedQuestions[index].correctAnswer) {
          correctAnswers++;
        }
      });
      setScore(correctAnswers);
    }
  }, [quizComplete, answers, randomizedQuestions]);

  // Handle answer selection
  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setAnswers(newAnswers);
    setShowResult(true);
    setTimerActive(true);
  };

  // Auto-advance to the next question after showing the result
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timerActive && showResult) {
      timer = setTimeout(() => {
        if (currentQuestionIndex < randomizedQuestions.length - 1) {
          setCurrentQuestionIndex(prevIndex => prevIndex + 1);
          setShowResult(false);
        } else {
          setQuizComplete(true);
        }
        setTimerActive(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [timerActive, showResult, currentQuestionIndex, randomizedQuestions.length]);

  // Handle next question button click
  const handleNextQuestion = () => {
    if (currentQuestionIndex < randomizedQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  // Handle restart with new random questions
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setQuizComplete(false);
    setTimerActive(false);
    shuffleQuestions();
    onRestart(); // Call the parent's onRestart function
  };

  if (quizComplete) {
    return <Result score={score} totalQuestions={randomizedQuestions.length} onRestart={handleRestart} />;
  }

  // If questions haven't loaded yet, show a loading state
  if (randomizedQuestions.length === 0) {
    return <div>Loading questions...</div>;
  }

  return (
    <div className="space-y-8">
      <AnimatePresence mode="wait">
        <Question
          key={currentQuestionIndex}
          question={randomizedQuestions[currentQuestionIndex]}
          currentAnswer={answers[currentQuestionIndex]}
          setAnswer={handleAnswer}
          showResult={showResult}
        />
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-between items-center pt-4"
      >
        {/* Progress Bar */}
        <div className="w-full max-w-md bg-gray-200 h-1.5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-stripe-blue"
            initial={{ width: `${(currentQuestionIndex / randomizedQuestions.length) * 100}%` }}
            animate={{ width: `${((currentQuestionIndex + (showResult ? 1 : 0)) / randomizedQuestions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {showResult && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={handleNextQuestion}
            className="btn-primary ml-4 whitespace-nowrap flex items-center gap-2"
          >
            {currentQuestionIndex < randomizedQuestions.length - 1 ? (
              <>
                Next
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </>
            ) : (
              <>
                See Results
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </>
            )}
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default Quiz;

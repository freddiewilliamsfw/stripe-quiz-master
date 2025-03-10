
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { QuizQuestion } from '@/data/quizData';

interface QuestionProps {
  question: QuizQuestion;
  currentAnswer: number | null;
  setAnswer: (index: number) => void;
  showResult: boolean;
}

const Question: React.FC<QuestionProps> = ({ 
  question, 
  currentAnswer, 
  setAnswer, 
  showResult 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xs uppercase tracking-wider text-stripe-blue font-medium"
        >
          Question {question.id} of 10
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-semibold text-gray-900 leading-tight"
        >
          {question.question}
        </motion.h2>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-3 pt-2"
      >
        {question.options.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className={cn(
              "quiz-option",
              currentAnswer === index && "selected",
              showResult && index === question.correctAnswer && "correct",
              showResult && currentAnswer === index && currentAnswer !== question.correctAnswer && "incorrect",
            )}
            onClick={() => !showResult && setAnswer(index)}
          >
            <div className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center mr-3 border text-sm font-medium transition-colors",
              currentAnswer === index 
                ? "bg-stripe-blue text-white border-stripe-blue" 
                : "border-gray-300 text-gray-500",
              showResult && index === question.correctAnswer && "bg-green-500 border-green-500 text-white",
              showResult && currentAnswer === index && currentAnswer !== question.correctAnswer && "bg-red-500 border-red-500 text-white"
            )}>
              {String.fromCharCode(65 + index)}
            </div>
            <span className="text-gray-800">{option}</span>
          </motion.div>
        ))}
      </motion.div>

      {showResult && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-4"
        >
          <h3 className="font-medium text-blue-800 mb-1">Explanation:</h3>
          <p className="text-blue-900">{question.explanation}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Question;

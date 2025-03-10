
import React from 'react';
import { motion } from 'framer-motion';

interface ResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let message = "Perfect! You're a Stripe expert!";
  let messageDetail = "You clearly know Stripe's products inside and out.";
  
  if (percentage < 100 && percentage >= 80) {
    message = "Excellent! You know Stripe very well!";
    messageDetail = "You have a strong understanding of Stripe's product ecosystem.";
  } else if (percentage < 80 && percentage >= 60) {
    message = "Good job! You have solid Stripe knowledge.";
    messageDetail = "You're familiar with most of Stripe's core offerings.";
  } else if (percentage < 60 && percentage >= 40) {
    message = "Not bad! You know some Stripe basics.";
    messageDetail = "You might want to explore more of Stripe's product documentation.";
  } else if (percentage < 40) {
    message = "Time to learn more about Stripe!";
    messageDetail = "Check out Stripe's documentation to discover their full range of products.";
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center space-y-8 py-8"
    >
      <div className="space-y-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm uppercase tracking-wider text-stripe-blue font-medium"
        >
          Quiz Complete
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Your Score: {score}/{totalQuestions}
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative w-48 h-48 mx-auto"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#F3F4F6"
              strokeWidth="8"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#635BFF"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={Math.PI * 2 * 45}
              strokeDashoffset={Math.PI * 2 * 45 * (1 - percentage / 100)}
              transform="rotate(-90 50 50)"
              initial={{ strokeDashoffset: Math.PI * 2 * 45 }}
              animate={{ strokeDashoffset: Math.PI * 2 * 45 * (1 - percentage / 100) }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute text-4xl font-bold text-gray-900">{percentage}%</div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="space-y-1 max-w-md mx-auto"
      >
        <h2 className="text-xl font-semibold text-gray-900">{message}</h2>
        <p className="text-gray-500">{messageDetail}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button 
          onClick={onRestart}
          className="btn-primary mx-auto flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Restart Quiz
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Result;

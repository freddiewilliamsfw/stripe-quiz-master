
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Quiz from '@/components/Quiz';

const Index = () => {
  const [started, setStarted] = useState(false);

  const startQuiz = () => {
    setStarted(true);
  };

  const restartQuiz = () => {
    setStarted(false);
    // Small delay before restarting to allow animations
    setTimeout(() => {
      setStarted(true);
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 quiz-container flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {!started ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center space-y-8 py-12"
            >
              <div className="mx-auto max-w-md">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative h-20 mb-6"
                >
                  <svg 
                    viewBox="0 0 60 25" 
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="#635BFF"
                  >
                    <path d="M59.64 14.28h-8.06v-1.4h8.06v1.4zm-28.24-1.4v8.33c0 3.2-2.73 4.46-5.6 4.46-1.54 0-3.07-.34-3.75-1.4l1.75-.8c.46.34 1.2.68 2.13.68 1.87 0 3.2-.68 3.2-2.53v-1.4c-.7.8-1.76 1.4-3.07 1.4-2.32 0-4.32-1.87-4.32-4.92 0-2.94 2-4.93 4.32-4.93 1.32 0 2.38.6 3.07 1.4v-1.2h2.27v.9zm-28.7 0v8.33c0 3.2-2.74 4.46-5.6 4.46-1.54 0-3.07-.34-3.77-1.4l1.75-.8c.47.34 1.22.68 2.13.68 1.87 0 3.2-.68 3.2-2.53v-1.4c-.7.8-1.75 1.4-3.07 1.4-2.32 0-4.32-1.87-4.32-4.92 0-2.94 2-4.93 4.33-4.93 1.33 0 2.36.6 3.06 1.4v-1.2h2.28v.9zm-13 4c0 1.88-1.3 2.8-2.6 2.8-1.4 0-2.26-.93-2.26-2.26 0-1.6 1.2-2.27 2.8-2.27.47 0 .93.07 1.33.13v1.6h.74zm28.68 0c0 1.88-1.3 2.8-2.6 2.8-1.4 0-2.27-.93-2.27-2.26 0-1.6 1.2-2.27 2.8-2.27.47 0 .93.07 1.33.13v1.6h.74zm-14.07-5.13c-1.54 0-2.53 1.26-2.53 2.93 0 1.6 1 2.92 2.53 2.92.93 0 1.6-.4 2-1.08v-3.77c-.4-.6-1.07-1-2-1zm-27.06-6.55c.6-.27 1.14-.53 1.87-.53 1.87 0 2.2 1.4 2.2 3.2v.27h-1.34c-2.53 0-4.12 1.13-4.12 3.4 0 2 1.4 3.06 3.33 3.06 1.34 0 2.27-.6 2.8-1.53.08 1 .8 1.47 1.8 1.47.34 0 .67-.07 1.07-.2v-1.34c-.13.07-.33.07-.47.07-.33 0-.66-.13-.66-.67v-4.45c0-2.67-1.33-4.4-4.18-4.4-1.13 0-2.14.27-3.2.67l.8 1.98h.1zm44.65 11.68c0 1.88-1.27 2.8-2.6 2.8-1.4 0-2.26-.93-2.26-2.26 0-1.6 1.2-2.27 2.8-2.27.47 0 .94.07 1.34.13v1.6h.73zm1.08-11.42v17.85h-2.27v-1.2c-.7.8-1.74 1.4-3.07 1.4-2.33 0-4.33-1.87-4.33-4.92 0-2.94 2-4.93 4.33-4.93 1.33 0 2.37.6 3.07 1.4V5.48h2.27zm-8.6 0v17.85H16.4V5.48h2.27zm-27 15.82c-.67.4-1.34.53-2 .53-.94 0-1.4-.4-1.4-1.2 0-.94.93-1.26 2-1.26h1.4v1.93zm10.95-7.9c-.93 0-1.87.33-2.33 1.07v1.86c.47.73 1.4 1.07 2.34 1.07 1.6 0 2.46-1.2 2.46-2 0-.94-.8-2-2.47-2zm44.05 7.9c-.66.4-1.33.53-2 .53-.93 0-1.4-.4-1.4-1.2 0-.94.94-1.26 2-1.26h1.4v1.93zm-53.84-5.67c-.48-.4-1.34-1-2.47-1-1.67 0-3 1.4-3 3 0 1.66 1.33 3 3 3 1.13 0 2-.54 2.47-1v.73h2.26V2.47h-2.26v8.06z"></path>
                  </svg>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -right-1 -top-1 bg-stripe-blue text-white text-xs font-bold py-1 px-2 rounded-md"
                  >
                    QUIZ
                  </motion.div>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-bold text-gray-900 leading-tight"
                >
                  Test Your Knowledge of Stripe Products
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 text-xl text-gray-500"
                >
                  10 questions to challenge what you know about Stripe's ecosystem of payment products
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col space-y-4 items-center"
              >
                <button
                  onClick={startQuiz}
                  className="btn-primary text-lg py-3 px-8"
                >
                  Start Quiz
                </button>
                <p className="text-sm text-gray-500">No login required • Learn about Stripe as you go</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="glass-card p-6 max-w-lg mx-auto"
              >
                <h2 className="text-lg font-semibold mb-3">What you'll learn</h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stripe-blue mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Stripe's core payment processing products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stripe-blue mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Specialized solutions like Connect, Billing, and Terminal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stripe-blue mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>How Stripe's innovative products work together</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-6 md:p-8"
            >
              <Quiz onRestart={restartQuiz} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <footer className="py-6 text-center text-sm text-gray-500">
        <p>Stripe Quiz • Not affiliated with Stripe Inc. • Built with Lovable</p>
      </footer>
    </div>
  );
};

export default Index;

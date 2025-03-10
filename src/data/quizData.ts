
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "Which Stripe API version format is used for all requests?",
    options: [
      "YYYY-MM-DD",
      "vYYYY-MM-DD",
      "YYYY/MM/DD",
      "v.YYYY.MM.DD"
    ],
    correctAnswer: 0,
    explanation: "Stripe API versions use the format YYYY-MM-DD. When you make a request, Stripe recommends pinning to a specific date-based version rather than using the latest version."
  },
  {
    id: 2,
    question: "Which of these is NOT a valid Stripe.js integration pattern?",
    options: [
      "Elements",
      "Checkout",
      "Direct API integration",
      "Payment Links"
    ],
    correctAnswer: 3,
    explanation: "Payment Links is a no-code solution, not a Stripe.js integration pattern. The valid patterns are Elements (for custom UIs), Checkout (for pre-built forms), and Direct API integration (for non-web platforms)."
  },
  {
    id: 3,
    question: "What's the main distinction between Stripe Checkout and Stripe Elements?",
    options: [
      "Checkout is for one-time payments, Elements is for subscriptions",
      "Checkout is pre-built and hosted by Stripe, Elements lets you build custom UI components",
      "Checkout is for web, Elements is for mobile apps",
      "Checkout supports cards only, Elements supports alternative payment methods"
    ],
    correctAnswer: 1,
    explanation: "Stripe Checkout provides a pre-built, Stripe-hosted payment page, while Elements gives you building blocks to create your own custom payment forms with Stripe's JavaScript library."
  },
  {
    id: 4,
    question: "Which Stripe product enables creating custom ledgers for real-time financial reporting?",
    options: [
      "Stripe Sigma",
      "Stripe Terminal",
      "Stripe Treasury",
      "Stripe Financial Connections"
    ],
    correctAnswer: 2,
    explanation: "Stripe Treasury provides embedded banking capabilities, including the ability to create custom ledgers for financial reporting and reconciliation."
  },
  {
    id: 5,
    question: "In Stripe's payment processing flow, what happens during the 'authorization' step?",
    options: [
      "Money is transferred from customer to merchant",
      "The bank confirms that the customer has sufficient funds",
      "The customer approves the payment method for future use",
      "Stripe verifies the merchant's identity"
    ],
    correctAnswer: 1,
    explanation: "During authorization, the card issuer or bank checks if the customer has sufficient funds and holds them for the transaction, without actually transferring the money yet."
  },
  {
    id: 6,
    question: "What is the function of Stripe's idempotency keys?",
    options: [
      "To authenticate API requests",
      "To encrypt sensitive payment data",
      "To prevent duplicate transactions when retrying requests",
      "To identify unique customers across multiple platforms"
    ],
    correctAnswer: 2,
    explanation: "Idempotency keys ensure that API requests can be retried without accidentally performing the same operation twice, which is critical for preventing duplicate charges when network issues occur."
  },
  {
    id: 7,
    question: "Which of these payment methods does Stripe Checkout NOT support natively?",
    options: [
      "Apple Pay",
      "SEPA Direct Debit",
      "Western Union",
      "Alipay"
    ],
    correctAnswer: 2,
    explanation: "Stripe Checkout does not natively support Western Union. It supports many digital payment methods including cards, Apple Pay, Google Pay, Alipay, and SEPA Direct Debit among others."
  },
  {
    id: 8,
    question: "What is a Payment Intent in Stripe's API?",
    options: [
      "A customer's saved payment method",
      "A tracker for the lifecycle of the payment process",
      "A webhook notification about payment status",
      "A subscription billing schedule"
    ],
    correctAnswer: 1,
    explanation: "A Payment Intent tracks the lifecycle of a customer payment from initial creation through the entire checkout process, handling any required authentication steps and eventual payment completion."
  },
  {
    id: 9,
    question: "Which Stripe product allows developers to verify user identities with document uploads?",
    options: [
      "Stripe Connect",
      "Stripe Identity",
      "Stripe Radar",
      "Stripe Atlas"
    ],
    correctAnswer: 1,
    explanation: "Stripe Identity offers ID verification capabilities, allowing businesses to verify users' identities by collecting and verifying their government-issued ID documents and matching selfies."
  },
  {
    id: 10,
    question: "What can Stripe Tax automatically determine for merchants?",
    options: [
      "Business expense categorization for accounting",
      "Tax filing deadlines across jurisdictions", 
      "Tax rates, registration requirements, and filing obligations",
      "Payroll tax requirements for employees"
    ],
    correctAnswer: 2,
    explanation: "Stripe Tax helps businesses calculate, collect, and report accurate taxes by automatically determining tax rates based on customer location and product type, along with handling registration requirements and filing obligations."
  }
];

export default quizData;


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
    question: "What is Stripe's primary payment processing model?",
    options: [
      "Flat monthly fee",
      "Pay-per-use with percentage + fixed fee",
      "Annual licensing fee",
      "Subscription tiers based on transaction volume"
    ],
    correctAnswer: 1,
    explanation: "Stripe primarily charges on a per-transaction basis with a percentage plus a fixed fee (e.g., 2.9% + $0.30 for online transactions in the US)."
  },
  {
    id: 2,
    question: "Which Stripe product allows businesses to create customizable checkout experiences?",
    options: [
      "Stripe Terminal",
      "Stripe Connect",
      "Stripe Elements",
      "Stripe Atlas"
    ],
    correctAnswer: 2,
    explanation: "Stripe Elements provides customizable UI components that allow developers to create their own branded checkout experiences while still leveraging Stripe's security and functionality."
  },
  {
    id: 3,
    question: "What is Stripe Radar?",
    options: [
      "A point-of-sale hardware device",
      "A fraud prevention and detection system",
      "A customer analytics dashboard",
      "A payment dispute resolution service"
    ],
    correctAnswer: 1,
    explanation: "Stripe Radar is a fraud prevention system that uses machine learning to identify and block fraudulent transactions before they occur."
  },
  {
    id: 4,
    question: "Which Stripe product is designed specifically for marketplaces and platforms to facilitate payments between businesses and their users?",
    options: [
      "Stripe Billing",
      "Stripe Connect",
      "Stripe Terminal",
      "Stripe Checkout"
    ],
    correctAnswer: 1,
    explanation: "Stripe Connect allows platforms and marketplaces to facilitate payments between businesses and their customers or service providers, handling the complexity of multi-party payments."
  },
  {
    id: 5,
    question: "What is Stripe Identity used for?",
    options: [
      "Employee authentication within Stripe Dashboard",
      "ID verification for high-risk transactions",
      "Creating digital identities for cryptocurrency transactions",
      "Managing user profiles in Stripe's database"
    ],
    correctAnswer: 1,
    explanation: "Stripe Identity provides ID verification tools that help businesses verify their customers' identities, reducing fraud and complying with regulations like KYC (Know Your Customer)."
  },
  {
    id: 6,
    question: "Which Stripe feature allows for recurring billing and subscription management?",
    options: [
      "Stripe Checkout",
      "Stripe Connect",
      "Stripe Billing",
      "Stripe Payments"
    ],
    correctAnswer: 2,
    explanation: "Stripe Billing provides tools for subscription management, recurring billing, invoicing, and managing free trials and promotional periods."
  },
  {
    id: 7,
    question: "What is Stripe Terminal?",
    options: [
      "A command-line interface for developers",
      "An in-person payment solution with physical card readers",
      "A virtual terminal for manually entering card details",
      "A code editor for Stripe integrations"
    ],
    correctAnswer: 1,
    explanation: "Stripe Terminal is Stripe's in-person payment solution that includes physical card readers and SDKs, allowing businesses to accept in-person payments with the same integration as their online payments."
  },
  {
    id: 8,
    question: "Which Stripe product allows businesses to issue virtual and physical cards?",
    options: [
      "Stripe Capital",
      "Stripe Treasury",
      "Stripe Issuing",
      "Stripe Atlas"
    ],
    correctAnswer: 2,
    explanation: "Stripe Issuing enables businesses to create, distribute, and manage virtual and physical cards for employees, contractors, or programmatic spending."
  },
  {
    id: 9,
    question: "What functionality does Stripe Climate provide?",
    options: [
      "Carbon offset purchases for businesses",
      "Environmental impact monitoring for transactions",
      "Renewable energy credits for Stripe data centers",
      "Weather-based pricing optimization"
    ],
    correctAnswer: 0,
    explanation: "Stripe Climate allows businesses to direct a portion of their revenue to carbon removal technologies, helping to combat climate change."
  },
  {
    id: 10,
    question: "What is Stripe Atlas primarily designed to help with?",
    options: [
      "Tax compliance and reporting",
      "Global expansion and localization",
      "Business incorporation and setup",
      "Customer relationship management"
    ],
    correctAnswer: 2,
    explanation: "Stripe Atlas helps entrepreneurs form a company by handling the legal complexity of incorporation, setting up a business bank account, and providing tools and guidance for running an internet business."
  }
];

export default quizData;

import React, { useState } from 'react';

const faqs = [
  {
    question: "How quickly can I get started with APIForge?",
    answer: "You can sign up and make your first API call in under 5 minutes. Our quickstart guides cover all major languages and frameworks, and our auto-generated SDKs handle client setup automatically."
  },
  {
    question: "What protocols does the API Gateway support?",
    answer: "APIForge supports REST, GraphQL, gRPC, and WebSocket protocols. You can mix and match protocols across your API surface and the gateway handles routing, transformation, and load balancing for all of them."
  },
  {
    question: "How does pricing scale with API volume?",
    answer: "Our pricing is based on API calls per month with generous free tier limits. You only pay for what you use, and volume discounts kick in automatically as you scale. There are no hidden fees for features like rate limiting or analytics."
  },
  {
    question: "Can I migrate my existing APIs to APIForge?",
    answer: "Yes. APIForge supports OpenAPI and GraphQL schema imports, so you can point our gateway at your existing endpoints and start adding features immediately. Most teams complete migration in less than a day."
  },
  {
    question: "What kind of support do you offer?",
    answer: "Free tier includes community support via Discord and forums. Growth plans get email support with 24-hour response time. Scale plans include dedicated Slack channels, a named solutions engineer, and 1-hour response SLA for critical issues."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="py-6 border-b border-gray-200 dark:border-gray-800">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          {question}
        </span>
        <span className={`ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-200 dark:bg-gray-800 dark:text-gray-400 ${
          isOpen ? 'rotate-45' : ''
        }`}>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12" />
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pt-4 text-gray-600 dark:text-gray-400">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">
            FAQ
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about APIForge and our API infrastructure platform.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
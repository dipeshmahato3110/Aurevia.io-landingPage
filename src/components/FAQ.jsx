import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What is Luminar's lead scoring system?",
    answer: "Luminar uses AI-powered algorithms to analyze and score leads based on multiple factors including behavior patterns, engagement levels, and demographic data. This helps you prioritize the most promising leads for better conversion rates."
  },
  {
    question: "How does the 14-day free trial work?",
    answer: "The trial gives you full access to all features of your selected plan for 14 days. No credit card is required to start, and you can cancel anytime during the trial period. After 14 days, you'll only be billed if you choose to continue."
  },
  {
    question: "Can I integrate Luminar with my existing CRM?",
    answer: "Yes, Luminar seamlessly integrates with major CRM platforms including Salesforce, HubSpot, and Pipedrive. Our API also allows for custom integrations with other systems your team might be using."
  },
  {
    question: "Is there a limit to the number of leads I can track?",
    answer: "Lead limits vary by plan. The Basic plan includes up to 500 leads, Starter up to 1,000, Professional up to 10,000, and Enterprise offers unlimited leads. You can upgrade your plan at any time as your needs grow."
  },

];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Frequently Asked Questions
          </h2>
          <p className="text-white text-lg">
          Get quick answers to the most common questions about our platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full bg-gray-900 border border-gray-200 rounded-lg p-6 text-left hover:border-blue-500 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-white transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

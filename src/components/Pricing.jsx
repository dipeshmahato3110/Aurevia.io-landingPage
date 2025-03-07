import { motion } from 'framer-motion';
import { useState } from 'react';

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Free for everyone",
    features: [
      "10 members",
      "2 teams",
      "Up to 100 leads",
      "Lifetime support"
    ]
  },
  {
    name: "Pro",
    price: "20",
    description: "Perfect for agencies",
    features: [
      "50 members",
      "10 teams",
      "Up to 1000 leads",
      "Lifetime support"
    ]
  },
  {
    name: "Enterprise",
    price: "42",
    description: "Perfect for companies",
    features: [
      "Unlimited members",
      "Unlimited teams",
      "Unlimited leads",
      "Lifetime support"
    ]
  }
];

const Pricing = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Pro plan is default active

  return (
    <section id="pricing" className="py-24 bg-black">
            <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple Pricing for Every Team
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs, whether you're just starting out or scaling your business. 
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {plans.map((plan, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative cursor-pointer ${
                  isActive 
                    ? "bg-gradient-to-b from-[#FFA861] via-[#C78BC1] to-[#7B6BE6] z-10 transform md:-translate-y-4 scale-110 h-75" 
                    : "bg-gray-900 z-0 hover:scale-105"
                } p-8 rounded-xl border ${
                  isActive 
                    ? "border-blue-500 shadow-3xl shadow-purple-500/20" 
                    : "border-gray-800 shadow-4xl"
                } transition-all duration-200`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute top-6 right-6">
                  <span className="text-3xl font-bold text-white">${plan.price}</span>
                  <span className="text-white ml-1">/mo</span>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className={`${isActive ? "text-blue-100" : "text-gray-400"}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center ${
                      isActive ? "text-blue-50" : "text-gray-100"
                    }`}>
                      <svg
                        className={`w-10 h-5 ${
                          isActive ? "text-blue-300" : "text-green-500"
                        } mr-3`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 ${
                  isActive 
                    ? "bg-white  text-blue-600 hover:bg-blue-50" 
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                } rounded-lg font-semibold transition-colors duration-200`}>
                  Get Started
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
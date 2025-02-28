import { motion } from 'framer-motion';

const plans = [
  {
    name: "free",
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
    name: "Starter",
    price: "15",
    description: "Perfect for inpetendent sellers",
    features: [
      "20 members",
      "5 teams",
      "Up to 500 leads",
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
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Simple Pricing for Every Team
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
          Choose the plan that fits your needs, whether you’re just starting out or scaling your business. 
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="relative bg-black p-6 rounded-xl border border-gray-200 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute top-6 right-6">
                <span className="text-3xl font-bold text-white">${plan.price}</span>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-white">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-white">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
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

              <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
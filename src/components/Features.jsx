import { motion } from 'framer-motion';

const featuresList = [
  {
    title: "AI-Enhanced Insights",
    description: "Leverage artificial intelligence to analyze and extract valuable insights from your user data.",
    icon: "🤖"
  },
  {
    title: "Multi-Platform Integration",
    description: "Seamlessly connect with Twitter, Telegram, and email platforms for comprehensive data gathering.",
    icon: "🔄"
  },
  {
    title: "Revenue Optimization",
    description: "Convert leads more effectively with data-driven strategies and automated workflows.",
    icon: "📈"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Powerful Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your business with our cutting-edge tools and features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4 bg-gray-800 w-16 h-16 rounded-xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
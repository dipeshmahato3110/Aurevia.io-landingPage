import { motion } from 'framer-motion';


const featuresList = [
  {
    title: "Advanced Communication",
    description: "Efficient, real-time messaging systems streamline communication between teams and clients, reducing delays and boosting productivity.",
    icon: "💬"
  },
  {
    title: "Premium Assets",
    description: "Access exclusive, high-quality resources that empower your team to perform at its best, without distractions or frustrating delays.",
    icon: "📋"
  },
  {
    title: "Acquire New Customers",
    description: "Attract new clients by offering personalized, seamless experiences, designed to improve engagement and long-term loyalty.",
    icon: "👤"
  },
  {
    title: "Seamless Integrations",
    description: "Easily connect your tools and platforms to create a unified workflow that eliminates data silos and enhances efficiency.",
    icon: "➡️"
  },
  {
    title: "Real-time Analytics",
    description: "Stay informed with instant data updates that allow you to make proactive decisions and optimize your business strategies on the go.",
    icon: "📊"
  },
  {
    title: "Customizable Workflows",
    description: "Adapt your task management process with flexible workflows that align with your team’s unique needs, ensuring maximum productivity.",
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
          <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Transform Your Task Process
          </h4>
          <p className="text-gray-400 max-w-2xl mx-auto">
          This might involve personally identifying the user, suggesting tailored item <br />suggestions, or recalling prior tastes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black-300 p-6 rounded-2xl border border-white-300  transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-3xl mb-4  w-8 h-8 rounded-xl flex items-center justify-center">
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
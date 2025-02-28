import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          className="text-4xl text-white md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Turn leads into revenue, fast.
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Unveil insights enhanced by AI from previously gathered user emails 
          and domains. Now also enriched with Twitter & Telegram.
        </motion.p>
        
        <motion.button 
          className="bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium
                     hover:bg-gray-800 transition-colors transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get template
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
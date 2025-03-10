import { motion } from 'framer-motion';

const Transform = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#081c24] via-[#005f3f] to-[#b5563c] rounded-2xl p-12 md:p-28">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white font-inter">
                Ready to Transform Your Workflow?
              </h2>
              
              <p className="text-blue-100 text-lg font-inter">
              Start your journey today with a free trial and experience the difference firsthand.
              </p>

              <div className="pt-4">
                <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-full text-base font-semibold transition-colors duration-200 flex items-center justify-center gap-2 mx-auto">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z font-inter" />
                  </svg>
                  Get template
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transform;

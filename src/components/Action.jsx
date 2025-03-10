import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Action = () => {
  const images = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop"
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start min-h-[1200px]">
          {/* Left Content - Fixed */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white  font-inter">
              Streamline Your Workflow
              </h2>
              <p className="text-gray-400 text-lg font-inter">
              Maximize productivity with our intuitive software. Effortlessly manage tasks, automate repetitive processes, and keep your team aligned with real-time updates and insights.
              </p>
            </motion.div>
          </div>

          {/* Right Images - Scrolling */}
          <div ref={containerRef} className="space-y-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700/50">
                  <img 
                    src={image}
                    alt={`Dashboard Preview ${index + 1}`}
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;
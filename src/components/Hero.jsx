import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4'
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
  },
  {
    image: 'https://images.unsplash.com/photo-1682686580950-960d1d513532'
  }
];

export default function ImageCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    const lastIndex = cards.length - 1;
    const prev = currentIndex === 0 ? lastIndex : currentIndex - 1;
    const next = currentIndex === lastIndex ? 0 : currentIndex + 1;
    return [prev, currentIndex, next];
  };

  return (

    <div className="pt-32 pb-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-inter font-bold mb-6 bg-gradient-to-r from-[#FFA861] via-[#C78BC1] to-[#7B6BE6] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Turn leads into revenue, fast.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-inter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Unveil insights enhanced by AI from previously gathered user emails
          and domains. Now also enriched with Twitter & Telegram.
        </motion.p>

        <motion.button
          className="bg-[#EAA879] text-black px-8 py-4 rounded-full text-lg font-medium 
                   hover:bg-[#e09565] transition-colors transform hover:scale-105 font-inter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get template
        </motion.button>
      </div>

      <div className="relative h-[600px] flex items-center justify-center">
        {getVisibleCards().map((cardIndex, position) => {
          const card = cards[cardIndex];
          const isCenter = position === 1;

          return (
            <div
              key={cardIndex}
              className={`absolute transition-all duration-500 ease-in-out ${position === 0 ? '-translate-x-[calc(100%-2rem)] scale-90 opacity-70' :
                position === 1 ? 'z-20 scale-110' :
                  'translate-x-[calc(100%-2rem)] scale-90 opacity-70'
                }`}
            >
              <div
                className={`relative overflow-hidden rounded-2xl cursor-pointer
                  ${isCenter ? 'w-[400px]' : 'w-[350px]'}`}
              >
                {/* Image Container */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={card.image}
                    alt="Scenic view"
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent
                  ${isCenter ? 'opacity-100' : 'opacity-70'} transition-opacity duration-500`} />
              </div>
            </div>
          );
        })}

        {/* Navigation Dots */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </div>
    </div >
  );
}
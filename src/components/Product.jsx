import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Product = () => {
  const features = [
    {
      title: "Smart Lead Scoring",
      description: "AI-powered algorithms rank leads based on likelihood to convert, helping you focus on high-value prospects.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      showButtons: true
    },
    {
      title: "Automated Workflows",
      description: "Create intelligent automation sequences for lead nurturing and engagement tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    },
    {
      title: "Data Enrichment",
      description: "Automatically enrich leads with data from multiple sources including social media and business databases.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop"
    },
    {
      title: "Predictive Analytics",
      description: "Use machine learning to predict customer behavior and identify trends before they emerge.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    }
  ];

  // Refs for each feature section
  const featureRefs = features.map(() => useRef(null));
  // Check if each feature is in view
  const featuresInView = featureRefs.map(ref => useInView(ref, { margin: "-100px" }));

  // Function to determine which image to show
  const getCurrentImageIndex = () => {
    const inViewIndex = featuresInView.findIndex(isInView => isInView);
    return inViewIndex >= 0 ? inViewIndex : 0;
  };

  return (
    <section id="product" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start min-h-[1200px]">
          {/* Left Column - Fixed Demo */}
          <div className="lg:sticky lg:top-32">
            <div className=" h-[250px] max-w-[600px]">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: getCurrentImageIndex() === index ? 1 : 0,
                    transition: { duration: 0.5 }
                  }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full  object-cover rounded-lg"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-100/20 to-transparent" /> */}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <motion.div className="space-y-8">
            <div>
              <motion.span
                className="text-blue-500 font-semibold mb-2 block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                POWERFUL FEATURES
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Everything you need to succeed
              </h2>
              <p className="text-gray-400 text-lg">
                Our comprehensive suite of tools helps you manage, analyze, and optimize your lead generation process.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-48">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  ref={featureRefs[index]}
                  className=" p-6 rounded-xl  transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="space-y-4">
                    <h3 className="text-white font-semibold text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>

                    {feature.showButtons && (
                      <div className="space-y-6">
                        {/* Content Type Buttons */}
                        <div className="flex flex-wrap gap-3">
                          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center gap-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                            </svg>
                            Text
                          </button>
                          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center gap-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a3 3 0 006 0V7a1 1 0 112 0v4a5 5 0 01-10 0V7a5 5 0 0110 0v4a7 7 0 11-14 0V7a7 7 0 0114 0v4a1 1 0 11-2 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                            </svg>
                            File
                          </button>
                          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center gap-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                            </svg>
                            Video
                          </button>
                          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center gap-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                            </svg>
                            Link
                          </button>
                        </div>

                        {/* Get Template Button */}
                        <button className="w-full sm:w-auto px-8 py-4 bg-gray-900 hover:from-blue-700 hover:to-blue-800 text-white rounded-full flex items-center justify-center text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                          Get Template
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Product;
import { motion } from 'framer-motion';

const testimonials = [
  {
    content: '"I recently implemented this software in our workflow, and it’s been transformative. The intuitive interface and powerful automation have saved us so much time. Its a must-have for any growing business"',
    author: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
  },
  {
    content: '"This system streamlined our operations like never before. The user-friendly design, combined with its reliability, made it a breeze for our team to adopt. Highly recommended for anyone seeking efficiency."',
    author: 'Michael Chen',
    role: 'Sales Manager',
    company: 'GrowthLabs',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    content: '"The software has exceeded all expectations. From speed to accuracy, it handles tasks seamlessly and offers detailed insights that help us make better decisions. Its an invaluable tool for any business."',
    author: 'Emily Rodriguez',
    role: 'Growth Lead',
    company: 'ScaleUp Inc',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 space-y-30">
          <button className="px-8 py-4 font-inter bg-gray-900 hover:bg-blue-700 text-white rounded-full text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
          Client testimonials
          </button>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-inter">
          People rave about us, and there's a good reason.
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl font-inter">
          Peruse the testimonials of our contented clientele regarding our goods/services.  <br />
          We delight in offering top-notch customer assistance and cherish their response.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
            >
              <p className="text-gray-300 mb-6 leading-relaxed font-inter">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <p className="text-white font-semibold font-inter">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm font-inter">{testimonial.role}</p>
                  <p className="text-blue-500 text-sm font-inter">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
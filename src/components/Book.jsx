import React from 'react';
import { useNavigate } from 'react-router-dom';

const Book = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 px-4 max-w-4xl mx-auto">
      <button 
        onClick={() => navigate('/')}
        className="mb-8 text-gray-400 hover:text-white transition-colors"
      >
        ← Back to Home
      </button>
      
      <div className="bg-black/20 backdrop-blur-lg rounded-3xl border border-white/10 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Book a Call</h1>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
            />
          </div>
          
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-2">
              Preferred Time
            </label>
            <select
              id="time"
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
            >
              <option value="">Select a time</option>
              <option value="9:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message (Optional)
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
              placeholder="Tell us what you'd like to discuss..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Schedule Call
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;
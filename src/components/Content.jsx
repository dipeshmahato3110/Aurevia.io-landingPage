import React from "react";
import Image from "../assets/dashboard1.jpg";


const Content = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6">

      {/* Hero Content */}
      <div className="flex items-center mt-20 w-full max-w-7xl">
        {/* Left Side - Image */}
        <div className="flex-1">
          <img src={Image} alt="Dashboard" className="w-full rounded-lg shadow-lg" />
        </div>

        {/* Right Side - Text */}

        <div className="flex-1 text-left pl-10 relative space-y-8">
         
            {/* <div className="overflow-hidden">
              <div className="logo-container animate-scroll">
                <div className="text-gray-400 text-xl font-semibold">escence</div>
                <div className="text-gray-400 text-xl font-semibold">Capsule</div>
                <div className="text-gray-400 text-xl font-semibold">Acme Corp</div>
                <div className="text-gray-400 text-xl font-semibold">escence</div>
                <div className="text-gray-400 text-xl font-semibold">Capsule</div>
                <div className="text-gray-400 text-xl font-semibold">Acme Corp</div>
              </div>
            </div>
           */}

          {/* Content Section */}

          <div className="lg:pl-10">

            <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-2 font-inter">
              It's not about conserving moments,{" "}
              <span className="text-gray-400 font-inter">it's about ensuring they're never squandered.</span>
            </h3>

            <button className="mt-8 bg-white text-black rounded-full px-6 py-3 font-medium hover:bg-gray-200 transition font-inter">
              Get template
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Content;

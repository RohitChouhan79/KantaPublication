import React from "react";

const Slogan = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 md:p-10 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-500 shadow-2xl rounded-3xl border border-gray-200 mx-auto w-full max-w-7xl mt-7">
      {/* Logo Section */}
      <div className="transform transition-transform duration-300 hover:scale-110 mb-6 md:mb-0 flex justify-center md:justify-start">
        <img
          src="/logo.png"
          alt="Company Logo"
          className="w-32 h-32 md:w-56 md:h-56 object-cover"
        />
      </div>

      {/* Slogan Section */}
      <div className="text-center md:text-left max-w-lg space-y-6 mt-6 md:mt-0">
        <blockquote className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-serif leading-snug space-y-2">
          <p className="block text-indigo-600 font-extrabold text-4xl md:text-5xl transform transition duration-300 ease-in-out hover:text-indigo-800">
            यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः ।
          </p>
        </blockquote>
        <p className="text-gray-800 text-base md:text-lg lg:text-xl font-medium">
          <span className="px-6 py-3 md:px-8 md:py-4 bg-white rounded-3xl inline-block shadow-xl transform transition-all duration-300 ease-in-out hover:bg-yellow-300 hover:scale-105 hover:shadow-2xl font-semibold text-lg md:text-xl text-gray-900">
            Where women are worshiped, there lives the Gods.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Slogan;

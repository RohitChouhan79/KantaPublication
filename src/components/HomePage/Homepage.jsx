import React from "react";

const Homepage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-200 flex flex-col items-center justify-center px-6 py-12 border-b-4 border-red-400">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div
          className="text-center md:text-left md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-extrabold leading-tight text-gray-900">
            <span className="text-[#F07347] hover:text-[#F07347] transition-all duration-300">
              Kanta Publication
            </span>
          </h1>

          {/* Paragraph with animation */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mt-4 leading-relaxed font-sans font-medium tracking-normal transition-all duration-500 ease-in-out transform hover:scale-105 hover:translate-x-2">
            is a leading publication house with a passion for preserving{" "}
            <span className="text-blue-700 font-bold">
              Indian culture
            </span>{" "}
            and traditions through writings.
          </p>

          {/* Button Section */}
          <div className="mt-6 md:mt-8">
            <a
              href="/about"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
            >
              Learn More About Us
            </a>
          </div>
        </div>

        {/* Image Section with hover effect */}
        <div
          className="md:w-1/2 w-full mt-8 md:mt-0"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img
            src="/Book.jpeg"
            alt="Featured book from Kanta Publication"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover transition-transform duration-500 transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

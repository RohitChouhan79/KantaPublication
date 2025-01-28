import React from "react";

const Invite = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-100 to-gray-200">
      {/* First Section with Full Width */}
      <div
        className="bg-gradient-to-r from-purple-500 to-purple-700 p-8 rounded-xl shadow-lg mb-8 w-full transition-transform duration-300 hover:scale-105"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-md text-center">
          We invite interested people to research, learn, and write with us
          about India’s culture, manuscripts, treaties, traditions, and more.
        </h1>
        <p
          className="text-lg md:text-xl lg:text-2xl font-sans text-gray-200 font-medium text-center"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Write and Publish with Us
        </p>
      </div>

      {/* Second Section with Image and Content */}
      <div
        className="bg-white p-8 rounded-xl shadow-xl mb-8 w-full transition-shadow duration-300 hover:shadow-2xl"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          {/* First Image */}
          <img
            src="/intro.jpg"
            alt="Representation of our mission"
            className="mb-4 md:mb-0 md:w-60 rounded-lg shadow-md md:mr-8 transform transition-transform duration-300 hover:scale-105"
          />

          {/* Content */}
          <div className="md:ml-8 w-full md:w-3/5">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl  text-center              font-serif font-bold text-gray-900 mb-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Introducing Ourselves
            </h2>
            <p className="text-lg md:text-lg lg:text-xl font-sans text-gray-800 mb-6 mx-auto max-w-xl leading-relaxed">
              We aim to establish{" "}
              <span className="text-blue-600 font-bold">ancient knowledge</span>{" "}
              as the beam of the new generation, inspiring their focus on
              knowledge, ethics, and{" "}
              <span className="text-blue-600 font-bold">self-determination</span>
              , away from distraction.
            </p>

            {/* Button */}
            <div
              className="w-full flex justify-center"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-110">
                Link to About
              </button>
            </div>
          </div>

          {/* Second Image */}
          <img
            src="/intro.jpg"
            alt="Representation of our mission"
            className="hidden md:block md:w-60 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Invite;

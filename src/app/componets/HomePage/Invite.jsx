import React from 'react';

const Invite = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-gray-100 via-white to-gray-100 bg-cover bg-center" style={{ backgroundImage: 'url(/your-background-image.jpg)' }}>
      {/* Invite Text Section */}
      <div className="text-center mb-8 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4 drop-shadow-lg">
          We invite interested people to research, learn and write with us
          about India’s culture, manuscripts, treaties, tradition, and everything.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-medium">
          Write and Publish with Us
        </p>
      </div>

      {/* Introduction Section */}
      <div className="bg-white p-6 rounded-lg shadow-xl mb-8 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Introducing Ourselves
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          We are going to establish ancient knowledge as the beam of the new
          generation so that their eagerness will be towards knowledge, ethics,
          and self-determination, away from distraction.
        </p>
      </div>

      {/* Button Section */}
      <div className="mt-4 md:mt-6 lg:mt-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Link to About
        </button>
      </div>
    </div>
  );
};

export default Invite;

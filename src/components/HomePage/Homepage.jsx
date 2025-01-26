import React from 'react';

const Homepage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-5 ">
      {/* Heading Section */}
      <div className="md:w-1/2 text-center ">
        <h1 className="text-2xl md:text-5xl font-extrabold leading-tight font-serif">
          <span className="text-blue-600">Kanta Publication</span> <span className='text-gray-800 text-xl'>is a leading publication
          house is here
          with a passion for preserving Indian culture and traditions through
          writings.
          </span>
        </h1>

        {/* Button Section */}
        <div className="mt-4 md:mt-6 lg:mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
            Link to About
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src="/Book.jpeg"
          alt="Book"
          className="w-full max-w-2xl h-auto rounded-2xl shadow-2xl"
        />


      </div>





    </div>
  );
};

export default Homepage;

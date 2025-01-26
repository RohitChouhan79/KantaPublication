import React from 'react';

const Invite = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-gray-100 via-white to-gray-100 bg-cover bg-center" style={{ backgroundImage: 'url(/your-background-image.jpg)' }}>
      
      {/* First Section with Full Width */}
      <div className="bg-purple-700 p-8 rounded-lg shadow-xl mb-8 w-full">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg text-center">
          We invite interested people to research, learn, and write with us
          about India’s culture,  manuscripts, treaties, tradition, and everything.
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 font-semibold text-center">
          Write and Publish with Us
        </p>
      </div>

    {/* Second Section with Image and Content */}
{/* Second Section with Image and Content */}
<div className="bg-orange-400 p-8 rounded-lg shadow-xl mb-8 w-full">
  <div className="flex flex-col md:flex-row items-center text-center md:text-left">
    {/* Image with padding for smaller screens */}
    <img src="/intro.jpg" alt="" className="mb-4 md:mb-0 md:w-60 rounded-lg shadow-md md:mr-8" />
    
    {/* Content container with margin adjustments */}
    <div className="md:ml-8">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        Introducing Ourselves
      </h2>
      <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 mx-auto md:mx-0 max-w-xl">
        We are going to establish ancient knowledge as the beam of the new
        generation so that their eagerness will be towards knowledge, ethics,
        and self-determination, away from distraction.
      </p>

      {/* Button Section inside the orange section */}
      <div className="w-full flex justify-start">
        <button className="bg-orange-500 hover:bg-orange-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Link to About
        </button>
      </div>
    </div>
  </div>
</div>



    </div>
  );
};

export default Invite;

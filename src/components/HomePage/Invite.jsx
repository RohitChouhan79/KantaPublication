import React from "react";

const Invite = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 border-b-4 border-red-400  "
     
    >
      {/* First Section with Full Width */}
      <div
        className="bg-purple-700 p-8 rounded-lg shadow-xl mb-8 w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg text-center transition-transform duration-500 ease-in-out hover:scale-105">
          We invite interested people to research, learn, and write with us
          about India’s culture, manuscripts, treaties, tradition, and everything.
        </h1>
        <p
          className="text-lg md:text-xl lg:text-2xl text-gray-200 font-semibold text-center transition-opacity duration-500 ease-in-out hover:opacity-80"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Write and Publish with Us
        </p>
      </div>

      {/* Second Section with Image and Content */}
      <div
        className="bg-orange-400 p-8 rounded-lg shadow-xl mb-8 w-full"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          {/* Image with padding for smaller screens */}
          <img
            src="/intro.jpg"
            alt="Representation of our mission"
            className="mb-4 md:mb-0 md:w-60 rounded-lg shadow-md md:mr-8 transform transition-transform duration-500 hover:scale-105"
          />

          {/* Content container with margin adjustments */}
          <div className="md:ml-8 w-full md:w-3/5">
          <h2
  className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4"
  data-aos="zoom-in"
  data-aos-delay="300"
>
  Introducing Ourselves
</h2>
<p
  className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed mb-6 mx-auto md:mx-0 max-w-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-2"

>
  We are going to establish <span className="text-blue-600 font-bold">ancient knowledge</span> 
  as the beam of the new generation so that their eagerness will be towards knowledge, 
  ethics, and <span className="text-blue-600 font-bold">self-determination</span>, 
  away from distraction.
</p>


            {/* Button Section inside the orange section */}
            <div
              className="w-full flex justify-start"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <button className="bg-orange-500 hover:bg-orange-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
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

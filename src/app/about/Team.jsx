import React from 'react';

const Team = () => {
  return (
    <>
      {/* Team Section */}
      <section className="p-6 sm:p-12 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-800 text-center mb-8 sm:mb-12 tracking-wide">
          Meet Our Team
        </h2>

        <div className="space-y-10 sm:space-y-12 m-4 sm:m-8 p-4 sm:p-5">
          {/* Director Section */}
          <div className="flex flex-col items-center sm:items-start md:flex-row bg-white shadow-lg rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <img
              src="/IMG-20250126-WA0009.jpg"
              alt="Director"
              className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover shadow-md mb-4 sm:mb-6 md:mb-0 md:mr-6"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-2 sm:mb-4">
                Director
              </h3>
              <p className="text-sm sm:text-lg font-medium text-gray-800 leading-relaxed">
                <strong className="text-blue-800">Ishita Pateriya:</strong> She
                is an artist, poet, and writer. She is always eager to explore
                new things in various fields and has a calm personality.
              </p>
            </div>
          </div>

          {/* CEO Section */}
          <div className="flex flex-col items-center sm:items-start md:flex-row bg-white shadow-lg rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2 sm:mb-4">
                Chief Executive Officer
              </h3>
              <p className="text-sm sm:text-lg font-medium text-gray-800 leading-relaxed">
                <strong className="text-blue-800">Shreya Pateriya:</strong> She
                is an architect and artist deeply interested in India’s ancient
                beauty and loves exploring diverse areas. She is also the author
                of our first book.
              </p>
            </div>
            <img
              src="/IMG-20250126-WA0009.jpg"
              alt="CEO"
              className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover shadow-md mb-4 sm:mb-6 md:mb-0 md:ml-6"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

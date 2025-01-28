import React from "react";
import { Feather, BookOpen } from "lucide-react";

const Team = () => {
  return (
    <section className="p-6 sm:p-12 bg-gradient-to-r ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-black text-center mb-8 sm:mb-12 tracking-wide relative">
          <span className="relative z-10">Meet Our Team</span>
          <Feather className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-24 h-24 -z-10" />
        </h2>

        <div className="space-y-12 sm:space-y-16">
          {/* Director Section */}
          <div className="flex flex-col items-center sm:items-start md:flex-row bg-white bg-opacity-80 shadow-lg rounded-3xl p-8 sm:p-10 hover:shadow-2xl hover:bg-opacity-100 transition-all duration-300">
            <div className="relative mb-6 md:mb-0 md:mr-8">
              <img
                src="/IMG-20250126-WA0009.jpg"
                alt="Director"
                className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover shadow-md"
              />
              <div className="absolute -bottom-2 -right-2 bg-amber-400 text-white p-2 rounded-full">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-amber-900 mb-3 sm:mb-4">Director</h3>
              <p className="text-lg sm:text-xl font-medium text-amber-800 leading-relaxed">
                <strong className="text-orange-700">Ishita Pateriya:</strong> She is an artist, poet, and writer. She is always eager to explore new things in various fields and has a calm personality.
              </p>
            </div>
          </div>

          {/* CEO Section */}
          <div className="flex flex-col items-center sm:items-start md:flex-row-reverse bg-white bg-opacity-80 shadow-lg rounded-3xl p-8 sm:p-10 hover:shadow-2xl hover:bg-opacity-100 transition-all duration-300">
            <div className="relative mb-6 md:mb-0 md:ml-8">
              <img
                src="/IMG-20250126-WA0009.jpg"
                alt="CEO"
                className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover shadow-md"
              />
              <div className="absolute -bottom-2 -left-2 bg-amber-400 text-white p-2 rounded-full">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-amber-900 mb-3 sm:mb-4">
                Chief Executive Officer
              </h3>
              <p className="text-lg sm:text-xl font-medium text-amber-800 leading-relaxed">
                <strong className="text-orange-700">Shreya Pateriya:</strong> She is an architect and artist deeply interested in India's ancient beauty and loves exploring diverse areas. She is also the author of our first book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

const Publication = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Kanta Publication Header Section */}
        <section className="text-center mb-16">
  <h1 className="text-5xl sm:text-6xl font-serif font-extrabold text-teal-700 mb-6 hover:text-teal-500 transition duration-300">
    Kanta Publication
  </h1>
  <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-serif">
    Preserving wisdom, inspiring generations, and illuminating the path to knowledge through the art of book publishing.
  </p>
</section>

{/* About Us Section */}
<div className="mt-16 bg-gradient-to-r from-teal-50 via-white to-teal-50 rounded-2xl shadow-lg p-10 hover:shadow-xl transition duration-300">
  <h2 className="text-4xl font-serif font-bold text-teal-700 mb-8 underline decoration-teal-500 decoration-4">
    About Us
  </h2>
  <p className="text-lg text-gray-700 font-serif leading-relaxed mb-6">
    Kanta Publication house is driven by a passion for preserving Indian culture and traditions through the written word.
  </p>
  <p className="text-lg text-gray-700 font-serif leading-relaxed mb-6">
    Our primary objective is to encourage elder people to share their traditional experiences and knowledge, ensuring
    their values and insights are preserved for future generations.
  </p>
  <p className="text-lg text-gray-700 font-serif leading-relaxed mb-6">
    Additionally, we focus on publishing works that explore themes using traditional manuscripts and ancient treaties to
    address modern challenges. For example, our first book, <span className="text-teal-700 font-bold">
      "Units of Measurements through Ancient Treaties"
    </span>, delves into how ancient structures, wells, and musical instruments were measured with precision.
  </p>
  <p className="text-lg text-gray-700 font-serif leading-relaxed">
    At Kanta Publication, we aspire to contribute to India's journey toward becoming a "Vishwa Guru," where knowledge and
    education foster peace and enlightenment across the globe.
  </p>
</div>


        {/* Grid Layout for Publication Information */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Legacy Section */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border-t-8 border-indigo-600 hover:shadow-2xl transition duration-300">
            <div className="p-8">
              <h2 className="text-3xl font-serif font-bold text-indigo-900 mb-4">Our Legacy</h2>
              <p className="text-indigo-800 text-lg font-serif">
                We are dedicated to bringing alive the knowledge of our senior citizens, connecting the younger generation with ancient wisdom through the timeless medium of books. Our mission is to see Bharat as a Vishva-Guru, inspiring professionals to use ancient knowledge to create innovative solutions.
              </p>
            </div>
          </div>

          {/* Chapters Section */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border-t-8 border-indigo-600 hover:shadow-2xl transition duration-300">
            <div className="p-8">
              <h2 className="text-3xl font-serif font-bold text-indigo-900 mb-4">Our Chapters</h2>
              <ul className="space-y-4">
                {[
                  "Curating wisdom from our elders",
                  "Bridging generations through literature",
                  "Elevating Bharat's literary heritage",
                  "Inspiring innovation rooted in tradition",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-indigo-800 hover:text-indigo-600 transition duration-300"
                  >
                    <svg
                      className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <span className="text-lg font-serif">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Explore Collection Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg shadow-xl p-10 text-center hover:shadow-2xl transition duration-300">
          <h2 className="text-3xl font-serif font-bold mb-6">Explore Our Collection</h2>
          <p className="text-lg mb-6 font-serif">
            Dive into our vast library of knowledge, where ancient wisdom meets modern insight.
          </p>
          <button className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-indigo-200 transition duration-300 font-serif text-lg">
            Browse Our Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publication;

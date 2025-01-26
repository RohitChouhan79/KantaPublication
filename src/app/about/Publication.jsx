const Publication = () => {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Kanta Publication Header Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-indigo-900 mb-6 hover:text-indigo-700 transition duration-300">
              Kanta Publication
            </h1>
            <p className="text-xl sm:text-2xl text-indigo-800 leading-relaxed max-w-4xl mx-auto font-serif">
              Preserving wisdom, inspiring generations, and illuminating the path to knowledge through the art of book
              publishing.
            </p>
          </section>
  
          {/* Grid Layout for Publication Information */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Legacy Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-8 border-indigo-600 hover:shadow-2xl transition duration-300">
              <div className="p-8">
                <h2 className="text-3xl font-serif font-bold text-indigo-900 mb-4">Our Legacy</h2>
                <p className="text-indigo-800 text-lg font-serif">
                  We are dedicated to bringing alive the knowledge of our senior citizens, connecting the younger
                  generation with ancient wisdom through the timeless medium of books. Our mission is to see Bharat as a
                  Vishva-Guru, inspiring professionals to use ancient knowledge to create innovative solutions.
                </p>
              </div>
            </div>
  
            {/* Chapters Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-8 border-indigo-600 hover:shadow-2xl transition duration-300">
              <div className="p-8">
                <h2 className="text-3xl font-serif font-bold text-indigo-900 mb-4">Our Chapters</h2>
                <ul className="space-y-4">
                  {[
                    "Curating wisdom from our elders",
                    "Bridging generations through literature",
                    "Elevating Bharat's literary heritage",
                    "Inspiring innovation rooted in tradition",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-indigo-800 hover:text-indigo-600 transition duration-300">
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
          <div className="mt-16 bg-indigo-100 rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition duration-300">
            <h2 className="text-3xl font-serif font-bold text-indigo-900 mb-4">Explore Our Collection</h2>
            <p className="text-xl text-indigo-800 mb-6 font-serif">
              Dive into our vast library of knowledge, where ancient wisdom meets modern insight.
            </p>
            <button className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 font-serif text-lg">
              Browse Our Books
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Publication;
  
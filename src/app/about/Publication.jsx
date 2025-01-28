import { BookOpen, Users, Globe, Lightbulb } from "lucide-react";

const Publication = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-serif font-extrabold text-gray-800 mb-6">
            Kanta Publication
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed font-serif italic text-gray-600 mb-6">
            Preserving Indian culture and traditions through the art of writing
          </p>
        </header>

        {/* Main Content */}
        <main>
          {/* About Section */}
          <section className="mb-16 rounded-xl shadow-xl p-10 bg-white">
            <p className="text-lg sm:text-xl font-serif leading-relaxed text-gray-700 mb-6">
              Kanta Publication House is dedicated to preserving Indian culture
              and traditions through the written word.
            </p>
            <p className="text-lg sm:text-xl font-serif leading-relaxed text-gray-700 mb-6">
              Our primary objective is to encourage older generations to
              document their experiences and knowledge, ensuring that their
              values live on for future generations.
            </p>
            <p className="text-lg sm:text-xl font-serif leading-relaxed text-gray-700 mb-6">
              We focus on themes from ancient manuscripts and treaties, aiming
              to use timeless wisdom to solve modern challenges.
            </p>
            <p className="text-lg sm:text-xl font-serif leading-relaxed text-gray-700 mb-6">
              For example, our first publication,{' '}
              <span className="font-bold text-gray-900">
                "Units of Measurement through Ancient Treaties"
              </span>,
              explores how ancient temples and wells were built with remarkable
              precision, highlighting the methods our ancestors used to tackle
              challenges still relevant today.
            </p>
            <p className="text-lg sm:text-xl font-serif leading-relaxed text-gray-700 mb-6">
              Our vision is to contribute to India’s journey as a "Vishwa Guru,"
              sharing the wisdom once spread across the world and promoting
              global peace through education and enlightenment.
            </p>
          </section>

          {/* Features Section */}
          <section className="mb-16 rounded-xl shadow-xl p-10 bg-white">
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-gray-800 mb-8 text-center underline">
              About Us
            </h2>
            <ul className="space-y-8">
              {[
                {
                  icon: BookOpen,
                  text: "Bringing alive the knowledge of our senior citizens",
                },
                {
                  icon: Users,
                  text: "Connecting the young generation with ancient wisdom",
                },
                {
                  icon: Globe,
                  text: "Dreaming of India as Vishwa-Guru",
                },
                {
                  icon: Lightbulb,
                  text: "Using ancient knowledge to innovate and create",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start rounded-lg p-6 shadow-lg bg-gray-100 hover:bg-gray-200 transition"
                >
                  <item.icon className="w-12 h-12 mr-4 flex-shrink-0 text-gray-700" />
                  <span className="text-xl sm:text-2xl font-serif font-semibold leading-relaxed text-gray-800">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Publication;

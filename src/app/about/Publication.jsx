import { BookOpen, Users, Globe, Lightbulb } from "lucide-react";

const Publication = () => {
  return (
    <div className="min-h-screen py-12 px-6 bg-gray-50 flex justify-center">
      <div className="max-w-3xl w-full">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">Kanta Publication</h1>
          <p className="text-lg sm:text-xl text-gray-600 italic mt-4">
            Preserving Indian culture and traditions through the art of writing
          </p>
        </header>

        {/* About Section */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-10">
          <p className="text-lg text-gray-700 mb-4">
            Kanta Publication House is dedicated to preserving Indian culture and traditions through the written word.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our primary objective is to encourage older generations to document their experiences and knowledge, ensuring that their values live on for future generations.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We focus on themes from ancient manuscripts and treaties, aiming to use timeless wisdom to solve modern challenges.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our first publication, <span className="font-bold">"Units of Measurement through Ancient Treaties"</span>, explores how ancient temples and wells were built with remarkable precision, highlighting the methods our ancestors used to tackle challenges still relevant today.
          </p>
          <p className="text-lg text-gray-700">
            Our vision is to contribute to India’s journey as a "Vishwa Guru," sharing the wisdom once spread across the world and promoting global peace through education and enlightenment.
          </p>
        </section>

        {/* Features Section */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6 underline">About Us</h2>
          <ul className="space-y-6">
            {[{
              icon: BookOpen,
              text: "Bringing alive the knowledge of our senior citizens",
            }, {
              icon: Users,
              text: "Connecting the young generation with ancient wisdom",
            }, {
              icon: Globe,
              text: "Dreaming of India as Vishwa-Guru",
            }, {
              icon: Lightbulb,
              text: "Using ancient knowledge to innovate and create",
            }].map((item, index) => (
              <li key={index} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
                <item.icon className="w-10 h-10 text-gray-700 mr-4" />
                <span className="text-lg text-gray-800 font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Publication;

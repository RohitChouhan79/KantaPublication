'use client';

import { BookOpen, Users, Globe, Lightbulb } from 'lucide-react';

export default function Publication() {
  return (
    <div className="min-h-screen bg-white">
      {/* Orange Banner */}
      <div className="w-full bg-[#F7A034] py-16 mb-8">
        <h1 className="text-center text-[3.5rem] font-serif text-black">About Us</h1>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-serif mb-8">Kanta Publication</h2>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <p>
                Kanta Publication House is dedicated to preserving Indian culture and traditions through the written
                word. Our primary objective is to encourage older generations to document their experiences and
                knowledge.
              </p>
              <p>
                We focus on themes from ancient manuscripts and treaties, aiming to use timeless wisdom to solve modern
                challenges.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Our first publication, <span className="font-semibold">"Units of Measurement through Ancient Treaties"</span>,
                explores how ancient temples and wells were built with remarkable precision.
              </p>
              <p>
                Our vision is to contribute to India's journey as a "Vishwa Guru," sharing the wisdom once spread across
                the world.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              { icon: <BookOpen className="w-8 h-8 text-gray-700 shrink-0" />, text: "Bringing alive the knowledge of our senior citizens" },
              { icon: <Users className="w-8 h-8 text-gray-700 shrink-0" />, text: "Connecting the young generation with ancient wisdom" },
              { icon: <Globe className="w-8 h-8 text-gray-700 shrink-0" />, text: "Dreaming of India as Vishwa-Guru" },
              { icon: <Lightbulb className="w-8 h-8 text-gray-700 shrink-0" />, text: "Using ancient knowledge to innovate and create" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                {item.icon}
                <p className="text-gray-800 m-0">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

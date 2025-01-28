import React from "react";

const Slogan = () => {
  return (
    <div className="flex flex-col md:flex-row p-10 md:p-16 shadow-2xl mx-auto w-full max-w-9xl mt-10">
      {/* Logo Section */}
      <div className="mb-8 md:mb-0 flex justify-center md:justify-start">
        <img
          src="/logo.png"
          alt="Company Logo"
          className="w-40 h-40 md:w-64 md:h-64 object-cover"
        />
      </div>

      {/* Slogan Section */}
      <div className="text-center md:text-left max-w-lg space-y-8 mt-8 md:mt-0">
        <blockquote className="text-4xl md:text-5xl lg:text-6xl font-serif leading-snug space-y-4">
          <p className="blockfont-extrabold">
            यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः ।
          </p>
        </blockquote>
        <p className="text-xl md:text-lg lg:text-xl font-medium">
        <span className="px-12 py-5 inline-block font-semibold text-3xl md:text-3xl text-gray-900">
  Where women are worshiped, there lives the Gods.
</span>

        </p>
      </div>
    </div>
  );
};

export default Slogan;

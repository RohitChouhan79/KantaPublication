import React from "react";

const WriteandPublish = () => {
  return (
    <div className="bg-white flex flex-col items-center text-center py-10 px-4">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Write & Publish With Us
      </h2>

      {/* Image */}
      <div className="w-full max-w-md">
        <img
          src="./publish.jpg" // Ensure the correct image path
          alt="Write & Publish"
          className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default WriteandPublish;

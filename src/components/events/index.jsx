import React from "react";

const EventHomepage = () => {
  return (
    <div className="">
      {/* Image */}
      <div className="">
      <h2 className="text-9xl items-center text-center font-bold text-black  py-20 bg-[#d53c49]">
        Upcoming Events
      </h2>
      </div>

      {/* Topics Section */}
      <div className="w-full  rounded-lg p-10 px-32">
        {["Topic 1", "Topic 2", "Topic 3", "Topic 4"].map((topic, index) => (
          <div key={index} className="flex justify-between items-center  pb-5 mb-5 last:border-none last:pb-0">
            {/* Topic Title */}
            <span className="text-lg font-bold text-gray-700">{topic}</span>

            {/* Buttons */}
            <div className="flex space-x-10">
            <button className="px-10 py-2 text-sm font-medium text-black bg-[#f6a20e] rounded-2xl border border-solid border-black shadow-md ">
                Details
              </button>
              <button className="px-10 py-2 text-sm font-medium text-black bg-[#f4564a] rounded-2xl border border-solid border-black shadow-md">
                Registration
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventHomepage;

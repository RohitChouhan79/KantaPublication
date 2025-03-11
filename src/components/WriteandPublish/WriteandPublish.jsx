"use client"
import { getAllWritePublishes } from "@/utils/WriteandPublish";
import React, { useEffect, useState } from "react";


const WriteAndPublish = () => {
  const [writePublishes, setWritePublishes] = useState([]);

  useEffect(() => {
    const fetchWritePublishes = async () => {
      const response = await getAllWritePublishes();
      if (response.success) {
        setWritePublishes(response.data);
      } else {
        console.error(response.error);
      }
    };

    fetchWritePublishes();
  }, []);

  return (
    <div className="">
      {/* Header */}
      <div className="">
        <h2 className="text-3xl md:text-7xl items-center text-center font-bold text-gray-800 py-20 bg-[#f4f4f1]">
          Write & Publish with Us
        </h2>
        <img
          src="./published.png" // Update the image path accordingly
          alt="Historical Art Banner"
          className="w-full"
        />
      </div>

      {/* Write and Publish Section */}
      <div className="w-full rounded-lg p-6 md:px-32">
        {writePublishes.length > 0 ? (
          writePublishes.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center pb-5 mb-5 last:border-none last:pb-0">
              {/* Title */}
              <span className="text-lg font-bold text-gray-700">{item.title}</span>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-5">
                <a href={item.details_pdf_url} target="_blank" rel="noopener noreferrer">
                  <button className="px-10 py-2 text-sm font-medium text-black bg-[#d5b281] rounded-2xl border border-solid border-black shadow-md">
                    Details
                  </button>
                </a>
                <a href={item.registration_link} target="_blank" rel="noopener noreferrer">
                  <button className="px-10 py-2 text-sm font-medium text-black bg-[#f4564a] rounded-2xl border border-solid border-black shadow-md">
                    Registration
                  </button>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No write and publish entries available.</p>
        )}
      </div>
    </div>
  );
};

export default WriteAndPublish;

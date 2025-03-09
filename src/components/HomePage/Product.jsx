import React from "react";

const Product = () => {
  return (
    <div className="mx-auto p-6 bg-white border rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
        
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src="/ourProduct.jpg" // Replace with actual image path
          alt="Maanoopkarnam Book"
          className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        />
      </div>


      {/* Text Content */}
      <div className="bg-red-500">
      <h2 className="text-4xl font-bold text-end text-gray-800">
          OUR PRODUCT
        </h2>
      <div className="flex-1  sm:text-left">
    
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
      Maanoopkarnam
    </h2>
    <p className="text-lg font-semibold text-blue-600 mt-1">₹ 395 /-</p>

    <p className="text-gray-600 text-sm mt-3">
      The book is about the unit of measurement used to build Hindu temples
      according to ancient Indian treatises <br /> and manuscripts. It explains
      how these systems are highly precise and simple to use,<br /> making it
      easier for the younger generation to understand and adapt in daily
      life.
    </p>

    <button className="mt-5 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105">
      Buy Now
    </button>
  </div>
      </div>
    </div>
  );
};

export default Product;

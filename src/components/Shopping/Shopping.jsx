"use client"
import { getAllBooks } from "@/utils/Book";
import Link from "next/link";
import React, { useEffect, useState } from "react";


const Shopping = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getAllBooks();
      console.log(response)
      if (response.success) {
        setProducts(response.data);
      } else {
        console.error(response.error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="bg-[#412118] text-white text-3xl md:text-7xl text-center font-semibold p-24">
        Our Products
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
        {products.length > 0 ? (
          products.map((product) => (
            <Link href={`/shopping/${product.slug}`} key={product._id}>
            <div key={product._id} className="text-left  p-5 rounded-lg">
              <img
                src={product.image_url}
                alt={product.title}
                className="w-full h-auto object-cover rounded-md mb-10"
              />
              <h3 className="mt-4 text-xl md:text-4xl font-semibold mb-5">{product.title}</h3>
              <p className="text-2xl font-semibold mt-2">₹ {product.price}</p>
            </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-3">No products available.</p>
        )}
      </div>
    </>
  );
};

export default Shopping;

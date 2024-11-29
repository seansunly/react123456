import React from "react";
import { Card } from "flowbite-react";

export default function ProductDetailCard({
  category,
  description,
  image,
  price,
  rating,
  title,
}) 
{
  console.log(category)
  return (
    <div className="flex justify-center items-center min-h-screen  ">
      <Card className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg object-cover w-full h-full"
          src={
            image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiKeTsm26jLOx1RQhXGkRSPWNj2tCeMKdUA&s"
          }
          alt={title}
        />
        <div className="p-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            {category}
          </h5>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-400 truncate">
            {title}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${price || "Unknown"}
            </span>
            <button className="bg-cyan-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400">
              Add to Cart
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

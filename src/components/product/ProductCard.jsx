import React from 'react'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/addToCart/addToCartSlice';

export default function ProductCard({ category, description, image, price, rating, title,id,qty }) {

  const dispatch=useDispatch();
  //console.log("qty in product card",qty);

  //handle add to cart button

    const handleAddToCart = ()=>{
      dispatch(
        addToCart({ category, description, image, price, rating, title, id,qty })
      );
    }
    


  return (
    <Card>
      <Link to={`${id}`}>
        <img
          className=" w-[250px] h-[250px]"
          src={
            image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiKeTsm26jLOx1RQhXGkRSPWNj2tCeMKdUA&s"
          }
          alt={title || "unknown"}
        />
      </Link>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white overflow-hidden whitespace-nowrap truncate">
          {title}
        </h5>
        <p className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white overflow-hidden whitespace-nowrap truncate">
          {category}
        </p>
        <p className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white overflow-hidden overflow-ellipsis max-h-16">
          {description}
        </p>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          {rating.rate}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          ${price ? price : "unknown"}
        </span>
        <button
          onClick={()=>handleAddToCart()}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </button>
      </div>
    </Card>
  );
}

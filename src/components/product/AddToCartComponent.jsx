import React from "react";
import { Card } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import {
  increQty,
  decrementQty,
  deleteAll,
  deleteOne,
  selectCartItems,
} from "../../redux/addToCart/addToCartSlice";

export default function AddToCartComponent({
  category,
  description,
  image,
  price,
  title,
  id,
}) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Find the item's quantity in the cart
  const itemInCart = cartItems.find((item) => item.id === id);
  const itemQty = itemInCart ? itemInCart.qty : 0;

  const handleIncrement = () => {
    dispatch(increQty({ id }));
  };

  const handleDecrement = () => {
    dispatch(decrementQty({ id }));
  };

  const handleDeleteProductAll = () => {
    dispatch(deleteAll());
  };

  const handleDeleteById = () => {
    dispatch(deleteOne({ id }));
  };

  return (
    <Card className="max-w-2xl w-1/1 mt-10">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          {category}
        </h5>
        <button
          onClick={handleDeleteProductAll}
          className="text-sm font-medium text-neutral-50 rounded-md bg-coffee-dark p-1"
        >
          Delete all
        </button>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img className="w-44 h-44" src={image} alt="" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  {description}
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  {title}
                </p>
              </div>
            </div>
            <div className="items-center text-base font-semibold text-gray-900 dark:text-white">
              ${price}
            </div>
            <div className="items-center text-base font-semibold text-blue-800 dark:text-white">
              <div className="flex">
                <h1 className="">Qty:</h1>
                <div className="text-green-400 ml-2">{itemQty}</div>
              </div>
            </div>
            <div className="">
              <button
                onClick={handleIncrement}
                className="text-xs mr-2 px-2 font-medium bg-green-600 rounded-sm text-white hover:text-neutral-400"
              >
                +
              </button>
              <button
                onClick={handleDecrement}
                className="text-xs mr-4 px-2 font-medium bg-red-700 rounded-sm text-white hover:text-neutral-400"
              >
                -
              </button>
              <button
                onClick={handleDeleteById}
                className="text-xs px-2 font-medium bg-red-700 rounded-sm text-white hover:text-neutral-400"
              >
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
}

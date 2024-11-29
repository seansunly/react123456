import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CaffeeCard({
  nameCategory,
  price,
  image,
  shop,
  discount,
  quantity,
  tile,
  description,
  codeProduct,
  priceDiscount
}) {
  const defaultImage = 'https://via.placeholder.com/300x200';
  const fallbackPrice = 0;

  return (
    <Link to={`/${codeProduct}`} className="hover:shadow-lg transition-shadow">
      <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transform hover:scale-105 transition-all">
        {/* Image */}
        <img
          src={image || defaultImage}
          alt={nameCategory || 'Coffee'}
          className="w-full h-48 object-cover"
        />

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Title */}
          <h3
            className="text-lg font-semibold text-gray-800 hover:text-brown-600 transition-colors mb-2 truncate"
            title={tile || 'No Title'}
          >
            {tile || 'No Title'}
          </h3>

          {/* Description */}
          <p
            className="text-sm text-gray-600 mb-4 line-clamp-2"
            title={description || 'No Description Available.'}
          >
            {description || 'No Description Available.'}
          </p>

          {/* Pricing Info */}
          <div className="flex justify-between items-center mt-auto">
            <div>
              {discount > 0 && (
                <p className="text-sm text-red-500 font-bold">
                  Discount: ${discount}
                </p>
              )}
              <p className="text-lg font-bold line-through text-gray-800">${price || fallbackPrice}</p>
              <p className="text-lg font-bold text-gray-800">${priceDiscount || fallbackPrice}</p>
            </div>

            {/* Category */}
            <span className="text-xs text-white bg-brown-500 rounded-full px-3 py-1">
              {nameCategory || 'General'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
//line-through
CaffeeCard.propTypes = {
  nameCategory: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  shop: PropTypes.string,
  discount: PropTypes.number,
  quantity: PropTypes.number,
  tile: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

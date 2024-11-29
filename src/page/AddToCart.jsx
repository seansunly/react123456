import React from 'react'
import { Card } from "flowbite-react";
import AddToCartComponent from '../components/product/AddToCartComponent';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../redux/addToCart/addToCartSlice';
export default function AddToCart() {

    const addTocarts = useSelector(selectCartItems)
    console.log("addTocarts page addTocart", addTocarts)
  return (
    
    <section className="  justify-center ml-80 overflow-scroll h-[80vh]">
      <h2 className="">Add to Cart</h2>


      <>
        {addTocarts.map((addTo, index) => {
          return (
            <AddToCartComponent
              key={index}
              category={addTo.category}
              description={addTo.description}
              image={addTo.image}
              price={addTo.price}
              rating={addTo.rating}
              title={addTo.title}
              id={addTo.id}
              qty={addTo.qty}
            />
          );
        })}
      </>
      
    </section>
  );
}

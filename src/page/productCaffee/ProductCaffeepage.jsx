import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetprodcutCaffee, selectAllProductCaffee } from '../../redux/feature/productCaffee/productCaffeeSlice';
import CaffeeCard from '../../components/productCaffeeComponets/CaffeeCard';

export default function ProductCaffeepage() {
  const dispatch = useDispatch();
  const productCaffee = useSelector(selectAllProductCaffee);

  useEffect(() => {
    dispatch(fetprodcutCaffee());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {productCaffee && Array.isArray(productCaffee) && productCaffee.length > 0 ? (
        productCaffee.map((product, index) => (
          <CaffeeCard
            key={index}
            codeProduct={product.codeProduct}
            description={product.metaTile}
            isDeleted={product.isDeleted}
            nameCategory={product.nameCategory}
            price={product.price}
            image={product.image}
            shop={product.shop}
            discount={product.discount}
            quantity={product.quantity}
            tile={product.tile}
            priceDiscount={product.priceDiscount}
          />
        ))
      ) : (
        <p className="text-center text-coffee-dark">No products available.</p>
      )}
    </div>
  );
}

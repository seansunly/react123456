import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts,fetchProducts } from "./redux/feature/product/productSlice";
import { useEffect } from "react";
import ProductCard from "./components/product/ProductCard";
import ProductCaffeepage from "./page/productCaffee/ProductCaffeepage";

function App() {
  const products = useSelector(selectAllProducts);
  //console.log("products:", products);

  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch((fetchProducts()));
  },[])

  return (
    <>
      <div className=" overflow-scroll h-[90vh]">
        <h1 className=" text-3xl text-blue-800 text-center mb-10">
          reander products{" "}
        </h1>
        <div className="  grid grid-cols-4 gap-5 px-20">
          {products.map((product, index) => {
            return (
              <ProductCard
                key={index}
                category={product.category}
                description={product.description}
                image={product.image}
                price={product.price}
                rating={product.rating}
                title={product.title}
                id={product.id}
                qty={1}
              />
            );
          })}
        </div>
      </div>
      <ProductCaffeepage/>

      {/* category, description, image, price, rating, title */}
    </>
  );
}

export default App;

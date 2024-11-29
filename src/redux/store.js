import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./feature/countSlice";
import productReducer from "./feature/product/productSlice"; // Correct import
import customerSlice  from "./feature/customer/customerSlice";
import staffTypeSlice  from "./feature/staff/StaffTypeSlice";
import addToCartSlice  from "./addToCart/addToCartSlice";
import userSlice  from "./feature/user/UserSlice";
import  productCaffeeSlice  from "./feature/productCaffee/productCaffeeSlice";
import  categorySlice  from "./feature/categoryCafe/categoryCafeSlice";


export const store = configureStore({
  reducer: {
    counter: countSlice,
    product: productReducer, // Using the reducer correctly
    customer: customerSlice,
    staffTypes: staffTypeSlice,
    cart: addToCartSlice,
    user: userSlice,
    productCaffees:productCaffeeSlice,
    categorys:categorySlice
  },
});

import { configureStore } from "@reduxjs/toolkit";
import  productsReducer from "./products/slice";
import  productDetailsReducer  from "./productsdetails/slice";
import  cartReducer  from "./cart/slice";


const store = configureStore({
  reducer: {
   products :productsReducer,
   productDetails:productDetailsReducer,
    cart:cartReducer,
},
});

export default store;
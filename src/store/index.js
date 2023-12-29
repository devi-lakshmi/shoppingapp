import { configureStore } from "@reduxjs/toolkit";
import  productsReducer from "./products/slice";
import  productDetailsReducer  from "./productsdetails/slice";



const store = configureStore({
  reducer: {
   products :productsReducer,
   productDetails:productDetailsReducer,
    
},
});

export default store;
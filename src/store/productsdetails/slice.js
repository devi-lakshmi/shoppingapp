import { createSlice } from "@reduxjs/toolkit";


export const productDetailsSlice = createSlice({
    name:"productDetails",
    initialState:{
        product:{},
    },
     reducers:{

      productDetailsFetched :(state,action) =>{
        console.log("productsFetched action", action.payload);
      state.product =action.payload;
      },    
    },
    
  });

    export const { productDetailsFetched } =productDetailsSlice.actions;
export default productDetailsSlice.reducer;

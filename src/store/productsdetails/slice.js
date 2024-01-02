import { createSlice } from "@reduxjs/toolkit";


export const productDetailsSlice = createSlice({
    name:"productDetails",
    initialState:{
        product:[],
    },
     reducers:{

      productDetails:(state,action) =>{
      state.product =action.payload;
      },    
    },
    
  });

    export const { productDetails } =productDetailsSlice.actions;
export default productDetailsSlice.reducer;

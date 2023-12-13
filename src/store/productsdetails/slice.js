import { createSlice } from "@reduxjs/toolkit";


export const productDetailsSlice = createSlice({
    name:"productDetails",
    initialState:{
        product:{},
    },
     reducers:{

      productDetailsFetched :(state,action) =>{
      state.product =action.payload;
      },    
    },
    
  });

    export const { productDetailsFetched } =productDetailsSlice.actions;
export default productDetailsSlice.reducer;

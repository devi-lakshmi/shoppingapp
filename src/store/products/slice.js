import { createSlice } from "@reduxjs/toolkit";


export const productsSlice = createSlice({
   
    name:"products",
    initialState:{
        productList:[]
    },
    reducers:{
       productsFetched :(state,action) =>{
        console.log("productsFetched action", action.payload);
        state.productList = [...action.payload];
      },
    
},
});
export const { productsFetched } =productsSlice.actions;
export default productsSlice.reducer;

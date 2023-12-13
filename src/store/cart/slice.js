import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name:"carts",
    initialState:[],
     reducers:{
        addToCartFetched(state, action) {
        state.push(action.payload);
      },
    },
    })
    export const { addToCartFetched } = cartSlice.actions;
export default cartSlice.reducer;

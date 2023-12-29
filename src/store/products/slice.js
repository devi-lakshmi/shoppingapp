import { createSlice } from "@reduxjs/toolkit"

export const productsSlice = createSlice({
   
    name:"products",
    initialState:{
        productList:[],
        cart :[],
        totalQuantity:0,
        filterByCategory:[],
      },
    reducers:{
       productsFetched :(state,action) =>{
        state.productList = [...action.payload];
      },
    addToCartData(state, action) {
     
      let findQuantity = state.cart.findIndex((item) => item.id === action.payload.id);
    if (findQuantity >=0) {
         state.cart[findQuantity].quantity +=1 ;
}
 else{
    
      state.cart.push(action.payload);
 }
  
    // const priceArray =state.cart.map((obj =>obj.price));
    //    state.totalPrice =priceArray.reduce((a,b)=>a+b);

  },  
    filterByCategory:(state,action)=>{
     state.filterByCategory = state.productList.filter((product) =>product.category === action.payload.category);
     
    },
 
 sortByPrice:(state)=>{
 state.productList = [...state.productList].sort((a,b)=>a.price-b.price);
 
  },
increaseItemQuantity:(state,action)=>{
  state.cart  = state.cart.map((item) =>{
    if(item.id === action.payload){
  return {...item,quantity:item.quantity+1};
  }
  return item;
});

},
decreaseItemQuantity:(state,action)=>{
  state.cart=state.cart.map((item)=>{
    if(item.id === action.payload){
      return{...item,quantity:item.quantity-1};
    }
  return item;
  });
},
 remove:(state,action) =>{
  state.cart= state.cart.filter((item) =>item.id !== action.payload);
 },
clear:(state,action)=>{
  state.cart=[];
},



},
});
export const { productsFetched ,addToCartData,filterByCategory,sortByPrice,increaseItemQuantity,decreaseItemQuantity,remove,clear} =productsSlice.actions;
export default productsSlice.reducer;

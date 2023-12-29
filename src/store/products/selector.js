export const selectProductsList = (reduxState) => 
{
    return reduxState.products.productList;
}

 export const selectCartCount = (reduxState) =>  {
     return reduxState.products.cart;
 }

  
export const selectCartData = (reduxState) => 
{
    return reduxState.cart;
}

export const selectTotalCartPrice = (reduxState) => 
{
    let totalPrice = 0;
    reduxState.cart.forEach(product => {
        totalPrice += product.price;
    });
    return totalPrice;
}

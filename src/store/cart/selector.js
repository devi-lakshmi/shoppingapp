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

export const calculateQuantityByProduct = state => {
  const items = state.cart;
  const quantityByProduct = {};

  // Iterate through items and calculate quantity by product
  items.forEach(item => {
    if (!quantityByProduct[item.id]) {
      quantityByProduct[item.id] = item.quantity;
    } else {
      quantityByProduct[item.id] += item.quantity;
      console.log(item.quantity)
    }
  });

  return quantityByProduct;
};

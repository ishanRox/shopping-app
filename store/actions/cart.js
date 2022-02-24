export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = product => {
    console.log(product,'product data');
  return { type: ADD_TO_CART, product: product };
};

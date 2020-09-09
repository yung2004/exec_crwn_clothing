import { createSelector } from 'reselect';

//memoize selector... 

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart], 
    cart => cart.cartItems
);

export const SelectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity ,
        0)
);
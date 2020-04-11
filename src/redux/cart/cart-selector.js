import { createSelector } from '';

const selectCart = state => state.cart;

export const SelectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [SelectCartItems],
    cartItems => 
        cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
);
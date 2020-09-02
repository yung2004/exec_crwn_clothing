import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.util';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) =>  {

 switch(action.type) {
     case CartActionTypes.TOGGER_CART_HIDDEN:
        var newState = { 
             ...state,
             hidden: !state.hidden
        }
        return newState;
    case CartActionTypes.ADD_ITEM:
        return { 
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload)
       };
    default:
        return state;
   }
}

export default cartReducer;
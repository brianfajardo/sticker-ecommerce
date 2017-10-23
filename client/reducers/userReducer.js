import { ADD_TO_CART } from '../actions/actionTypes'

const initialState = {
  cart: {},
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Add item to cart if it doesn't already exist.
      if (!state.cart[action.payload.id]) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [action.payload.id]: { ...action.payload },
          },
        }
      }
      // Update existing item by update quantity
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: {
            ...state.cart[action.payload.id],
            quantity: state.cart[action.payload.id].quantity + action.payload.quantity,
          },
        },
      }

    default:
      return state
  }
}

export default userReducer

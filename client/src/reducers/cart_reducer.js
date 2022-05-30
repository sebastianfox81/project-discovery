import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {

  if (action.type === ADD_TO_CART) {
    const { id, amount, product } = action.payload
    const tempItem = state.cart.find((item) => {
      return item.id === id
    })
    if(tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if(cartItem.id === id) {
          let newAmount = cartItem.amount + amount
          if(newAmount > cartItem.max) {
            newAmount = cartItem.max
          }
          return {...cartItem, amount: newAmount}
        } else {
          return cartItem
        }
      })
      return {...state, cart: tempCart}
    } else {
      const newItem = {
        id: id,
        name: product.name,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock
      }
      return {
        ...state,
        cart: [...state.cart, newItem]
      }
    }
  }

  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer

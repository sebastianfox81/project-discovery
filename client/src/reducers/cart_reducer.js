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
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max
          }
          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem
        }
      })
      return { ...state, cart: tempCart }
    } else {
      const newItem = {
        id: id,
        name: product.name,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      }
      return {
        ...state,
        cart: [...state.cart, newItem],
      }
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    let tempCart = state.cart.filter((item) => {
      return item.id !== action.payload
    })
    return {
      ...state,
      cart: tempCart,
    }
  }
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    }
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, type } = action.payload
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (type === 'inc') {
          let newAmount = item.amount + 1
          if (newAmount > item.max) {
            newAmount = item.max
          }
          return { ...item, amount: newAmount }
        }
        if (type === 'dec') {
          let newAmount = item.amount - 1
          if (newAmount < 1) {
            newAmount = 1
          }
          return { ...item, amount: newAmount }
        }
      }
      return item
    })
    return {
      ...state,
      cart: tempCart,
    }
  }
  if (action.type === COUNT_CART_TOTALS) {
    const totals = state.cart.reduce(
      (acc, curr) => {
        const { amount, price } = curr
        acc.total_items += amount
        acc.total_amount += amount * price
        return acc
      },
      {
        total_items: 0,
        total_amount: 0,
      },
    )
    return {
      ...state,
      total_items: totals.total_items,
      total_amount: totals.total_amount,
    }
  }
  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer

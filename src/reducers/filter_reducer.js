import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((product) => {
      return product.price
    })
    maxPrice = Math.max(...maxPrice)
    return {
      ...state,
      filtered_products: [...action.payload],
      all_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    }
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    }
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state
    let tempProducts = [...filtered_products]
    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.price - b.price
      })
    }
    if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.price - a.price
      })
    }
    if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
    }
    return {
      ...state,
      filtered_products: tempProducts,
    }
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    }
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state
    const { text, brand, price, category } = state.filters

    let tempProducts = [...all_products]
    // filter text
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().includes(text)
      })
    }
    // filter brand
    if (brand !== 'all') {
      tempProducts = tempProducts.filter((product) => {
        return product.brand === brand
      })
    }
    // filter category
    if (category !== 'all') {
      tempProducts = tempProducts.filter((product) => {
        return product.category === category
      })
    }
    // filter price
    tempProducts = tempProducts.filter((product) => {
      return product.price <= price
    })
    return {
      ...state,
      filtered_products: tempProducts,
    }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        brand: 'all',
        category: 'all',
        price: state.filters.max_price,
      },
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer

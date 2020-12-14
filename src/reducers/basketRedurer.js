const initialState = {
  basketProducts: [],
  orderTotol: 0,
  quantity: 0,
}

const orderTotolReduce = (basketProducts, price, count = 1) => {
  let orderTotle = basketProducts.reduce((orderTotle, product) => {
    return orderTotle + Number(product.totle)
  }, 0)
  return orderTotle + Number(price) * count
}

const orderQuantityReduce = (basketProducts, count = 1) => {
  let orderTotle = basketProducts.reduce((quantity, product) => {
    return quantity + Number(product.count)
  }, 0)
  return orderTotle + count
}

const basketRedurer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_PRODUCT_TO_BASKET':
      const orderTotle = orderTotolReduce(state.basketProducts, action.payload.price)
      if (action.payload.isBasket) {
        const productIndex = state.basketProducts.findIndex(({ id }) => id === action.payload.id)
        const count = state.basketProducts[productIndex].count + 1
        const totle = +state.basketProducts[productIndex].price * +count
        return {
          ...state,
          basketProducts: [
            ...state.basketProducts.slice(0, productIndex),
            { ...action.payload, count, totle },
            ...state.basketProducts.slice(productIndex + 1)
          ],
          orderTotle,
          quantity: orderQuantityReduce(state.basketProducts)
        }
      }
      return {
        ...state,
        basketProducts: [...state.basketProducts, action.payload],
        orderTotle,
        quantity: orderQuantityReduce(state.basketProducts)
      }

    case 'REMOVE_PRODUCT_FROM_BASKET': {
      const productIndex = state.basketProducts.findIndex(({ id }) => id === action.payload.id)
      const orderTotle = orderTotolReduce(state.basketProducts, -action.payload.price)
      const count = state.basketProducts[productIndex].count - 1
      const totle = +state.basketProducts[productIndex].price * +count
      const quantity = orderQuantityReduce(state.basketProducts, -1)
      if (count === 0) {
        return {
          ...state,
          basketProducts: [
            ...state.basketProducts.slice(0, productIndex),
            ...state.basketProducts.slice(productIndex + 1)
          ],
          orderTotle,
          quantity
        }
      }

      return {
        ...state,
        basketProducts: [
          ...state.basketProducts.slice(0, productIndex),
          { ...state.basketProducts[productIndex], count, totle },
          ...state.basketProducts.slice(productIndex + 1)
        ],
        orderTotle,
        quantity
      }
    }

    case 'All_REMOVE_PRODUCT_FROM_BASKET': {
      const productIndex = state.basketProducts.findIndex(({ id }) => id === action.payload.id)
      const orderTotle = orderTotolReduce(state.basketProducts, -action.payload.price, state.basketProducts[productIndex].count)
      const quantity = orderQuantityReduce(state.basketProducts, -state.basketProducts[productIndex].count)
      return {
        ...state,
        basketProducts: [
          ...state.basketProducts.slice(0, productIndex),
          ...state.basketProducts.slice(productIndex + 1)
        ],
        orderTotle,
        quantity
      }
    }

    default:
      return state
  }
}

export default basketRedurer


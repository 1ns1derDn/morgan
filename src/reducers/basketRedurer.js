const initialState = {
  basketProducts: [],
  orderTotle: 0,
  quantity: 0,
  timeStamp: null,
  id: null,
  orderSuccess: false,
  expressdeliveryPrice: 10
}

const orderTotolReduce = (basketProducts, price, expressdeliveryPrice = 10, count = 1,) => {
  let orderTotle = basketProducts.reduce((orderTotle, product) => {
    return orderTotle + Number(product.totle)
  }, 0)
  return orderTotle + Number(price) * count + expressdeliveryPrice
}

const orderQuantityReduce = (basketProducts, count = 1) => {
  let orderTotle = basketProducts.reduce((quantity, product) => {
    return quantity + Number(product.count)
  }, 0)
  return orderTotle + count
}

const basketRedurer = (state = initialState, action) => {
  switch (action.type) {

    case 'START_SHOP':
      return {
        ...initialState
      }

    case 'ORDER_PROCESS_REFRESH':
      return {
        ...state,
        orderSuccess: false
      }

    case 'SEND_ORDER_PROCESS':
      return {
        ...initialState,
        timeStamp: action.payload.timeStamp,
        id: action.payload.id,
        orderSuccess: action.payload.orderSuccess,
      }

    case 'ADD_PRODUCT_TO_BASKET':
      const orderTotle = orderTotolReduce(state.basketProducts, action.payload.price, state.expressdeliveryPrice)
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
      const orderTotle = orderTotolReduce(state.basketProducts, -action.payload.price, state.expressdeliveryPrice)
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
      const orderTotle = orderTotolReduce(state.basketProducts, -action.payload.price, state.expressdeliveryPrice, state.basketProducts[productIndex].count)
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


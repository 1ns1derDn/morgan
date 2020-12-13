const initialState = {
  basketProducts: [
    {
      alias: "28-cluster",
      categoryId: "dc4437c1-364b-4ba5-992a-15f55ca2d8eb",
      id: "7791a102-2f58-4a42-9479-263cc9e564ee",
      image: "https://via.placeholder.com/400.png?text=Temporary%20+%20image",
      name: "28 Cluster",
      price: "500",
      timeStamp: "2014-04-28T07:46:02.127Z",
      count: 10
    }
  ],
}

const basketRedurer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_PRODUCT_TO_BASKET':
      if (action.payload.isBasket) {
        const productIndex = state.basketProducts.findIndex(({ id }) => id === action.payload.id)
        const count = state.basketProducts[productIndex].count + 1
        const totle = +state.basketProducts[productIndex].price * +count
        return {
          ...state,
          basketProducts: [
            ...state.basketProducts.slice(0, productIndex),
            { ...action.payload, count, totle},
            ...state.basketProducts.slice(productIndex + 1)
          ]
        }
      }

      return {
        ...state,
        basketProducts: [...state.basketProducts, action.payload]
      }

    case 'REMOVE_PRODUCT_FROM_BASKET': {
      const productIndex = state.basketProducts.findIndex(({ id }) => id === action.payload)
      const count = state.basketProducts[productIndex].count - 1
      const totle = +state.basketProducts[productIndex].price * +count
      if (count === 0) {
        return {
          ...state,
          basketProducts: [
            ...state.basketProducts.slice(0, productIndex),
            ...state.basketProducts.slice(productIndex + 1)
          ]
        }
      }

      return {
        ...state,
        basketProducts: [
          ...state.basketProducts.slice(0, productIndex),
          { ...state.basketProducts[productIndex], count, totle },
          ...state.basketProducts.slice(productIndex + 1)
        ]
      }
    }
    case 'All_REMOVE_PRODUCT_FROM_BASKET': {
      const productIndex = state.basketProducts.findIndex(({ id }) => id === action.payload)
      return {
        ...state,
        basketProducts: [
          ...state.basketProducts.slice(0, productIndex),
          ...state.basketProducts.slice(productIndex + 1)
        ]
      }
    }
    default:
      return state
  }
}

export default basketRedurer


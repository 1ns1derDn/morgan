export const addProductToBasket = (product, isBasket) => ({
  type: 'ADD_PRODUCT_TO_BASKET',
  payload: {
    name: product.name,
    price: product.price,
    image: product.image,
    id: product.id,
    isBasket: isBasket,
    count: 1,
    category: product.category,
    totle: product.price
  }
})

export const removeProductFromBasket = (product) => ({
  type: 'REMOVE_PRODUCT_FROM_BASKET',
  payload: product
})

export const AllRemoveProductFromBasket = (product) => ({
  type: 'All_REMOVE_PRODUCT_FROM_BASKET',
  payload: product
})

export const sendOrderProcess = (timeStamp, id, orderSuccess) => ({
  type: 'SEND_ORDER_PROCESS',
  payload: {
    timeStamp,
    id,
    orderSuccess
  }
})

export const startShop = () => ({
  type: 'START_SHOP'
})  


export const orderProcessRefresh = () => ({
  type: 'ORDER_PROCESS_REFRESH'
})



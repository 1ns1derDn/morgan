export const addProductToBasket = (product, isBasket) => ({
  type: 'ADD_PRODUCT_TO_BASKET',
  payload: {
    name: product.name,
    price: product.price,
    image: product.image,
    id: product.id,
    isBasket: isBasket,
    count: 1,
  }
})

export const removeProductFromBasket = (id) => ({
  type: 'REMOVE_PRODUCT_FROM_BASKET',
  payload: id
})

export const AllRemoveProductFromBasket = (id) => ({
  type: 'All_REMOVE_PRODUCT_FROM_BASKET',
  payload: id
})



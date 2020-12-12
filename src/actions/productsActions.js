export const filterProductsCategories = (categoryId) => ({
  type: 'FILTER_PRODUCTS_CATEGORIES',
  payload: categoryId
})

export const fetchProductsSuccess = (products) => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  payload: products
})

export const fetchProductsFailure = (error) => ({
  type: 'FETCH_PRODUCTS_FAILURE',
  payload: error
})

export const sortProduct = (type, products) => ({
  type: 'SORT_PRODUCTS',
  payload: {
    type,
    products
  }
})

export const setProductsVisivle = (products) => ({
  type: 'SET_PRODUCTS_VISIVLE',
  payload: products
})

export const fetchProducts = (service, selectedCategoryId) => () => (dispatch) => {
  service.getProducts()
    .then(data => {
      dispatch(fetchProductsSuccess(data.products))
      dispatch(setProductsVisivle(data.products))
    })
    .then(() => {
      dispatch(filterProductsCategories(selectedCategoryId))
    })
    .catch(error => dispatch(fetchProductsFailure(error)))
}
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

export const addPaginationProducts = () => ({
  type: 'ADD_PAGINATION_PRODUCTS',
})

export const refreshPaginationProducts = () => ({
  type: 'REFRESH_PAGINATION_PRODUCTS'
})

export const fetchProducts = (getProducts) => () => (dispatch) => {
  getProducts()
    .then(data => {
      dispatch(fetchProductsSuccess(data))
      dispatch(setProductsVisivle(data))
    })
    .catch(error => dispatch(fetchProductsFailure(error)))
}
export const handleSelectedCategory = (categoryId) => ({
  type: 'HANDLE_SELETED_CATEGORY',
  payload: categoryId
})

export const fetchCategoriesSuccess = (categories) => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  payload: categories
})

export const fetchCategoriesFailure = (error) => ({
  type: 'FETCH_CATEGORIES_FAILURE',
  payload: error
})

export const fetchCategories = (service) => () => (dispatch) => {
  service.getCategories()
    .then(data => {
      dispatch(fetchCategoriesSuccess(data.categories))
    })
    .catch(error => dispatch(fetchCategoriesFailure(error)))
}

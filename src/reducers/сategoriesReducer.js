const initialState = {
  categories: [],
  error: false,
  selectedCategoryId: ''
}

const сategoriesReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'HANDLE_SELETED_CATEGORY':
      return {
        ...state,
        selectedCategoryId: action.payload
      }

    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        ...state,
        categories: action.payload
      }

    case 'FETCH_CATEGORIES_FAILURE':
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}

export default сategoriesReducer
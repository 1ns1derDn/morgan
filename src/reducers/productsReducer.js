const initialState = {
  products: [],
  productsVisible: [],
  paginationCount: 12,
  error: false,
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_PRODUCTS_VISIVLE':
      return {
        ...state,
        productsVisible: action.payload
      }

    case 'ADD_PAGINATION_PRODUCTS':
      return {
        ...state,
        paginationCount: state.paginationCount + 4
      }

    case 'REFRESH_PAGINATION_PRODUCTS':
      return {
        ...state,
        paginationCount: initialState.paginationCount,
      }

    case 'FILTER_PRODUCTS_CATEGORIES':
      if (action.payload === '') {
        return state
      }
      return {
        ...state,
        productsVisible: state.productsVisible.filter((product) => {
          return product.categoryId === action.payload
        })
      }

    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        products: action.payload
      }

    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        error: action.payload
      }

    case 'SORT_PRODUCTS':
      const copyProducts = [...action.payload.products]
      switch (action.payload.type) {
        case 'Newness':
          return {
            ...state,
            productsVisible: copyProducts.sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp)).slice(0, state.paginationCount)
          }
        case 'Price hight to low':
          return {
            ...state,
            productsVisible: copyProducts.sort((a, b) => +a.price < +b.price ? 1 : -1).slice(0, state.paginationCount)
          }
        case 'Price low to hight':
          return {
            ...state,
            productsVisible: copyProducts.sort((a, b) => +a.price > +b.price ? 1 : -1).slice(0, state.paginationCount)
          }
        default:
          return state
      }

    default:
      return state
  }
}

export default productsReducer
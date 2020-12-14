import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import сategoriesReducer from './сategoriesReducer' 
import sortSelectReducer from './sortSelectReducer'
import basketRedurer from './basketRedurer'
import formReducer from './formReducer'

const rootReducer = combineReducers({
  products: productsReducer,
  categories: сategoriesReducer,
  sortSelect: sortSelectReducer,
  basket: basketRedurer,
  form: formReducer
})

export default rootReducer
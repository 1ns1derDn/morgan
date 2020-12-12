import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import сategoriesReducer from './сategoriesReducer' 
import sortSelectReducer from '../reducers/sortSelectReducer'

const rootReducer = combineReducers({
  products: productsReducer,
  categories: сategoriesReducer,
  sortSelect: sortSelectReducer
})

export default rootReducer
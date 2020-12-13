import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import сategoriesReducer from './сategoriesReducer' 
import sortSelectReducer from '../reducers/sortSelectReducer'
import basketRedurer from '../reducers/basketRedurer'

const rootReducer = combineReducers({
  products: productsReducer,
  categories: сategoriesReducer,
  sortSelect: sortSelectReducer,
  basket: basketRedurer
})

export default rootReducer
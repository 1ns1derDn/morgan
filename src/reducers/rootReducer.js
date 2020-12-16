import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import сategoriesReducer from './сategoriesReducer' 
import sortSelectReducer from './sortSelectReducer'
import basketRedurer from './basketRedurer'
import formReducer from './formReducer'
import menuReducer from './menuReducer'
import arrowReducer from './arrowReducer'
import sendNewPasswordReducer from './sendNewPasswordReducer'

const rootReducer = combineReducers({
  products: productsReducer,
  categories: сategoriesReducer,
  sortSelect: sortSelectReducer,
  basket: basketRedurer,
  form: formReducer,
  menu: menuReducer,
  arrows: arrowReducer,
  sendPassword: sendNewPasswordReducer
})

export default rootReducer
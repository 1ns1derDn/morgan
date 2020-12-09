import { createStore } from 'redux'
import rootReducer from './reduces/rootReducer'

const store = createStore(rootReducer)

export default store
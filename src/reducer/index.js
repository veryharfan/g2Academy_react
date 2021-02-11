import { combineReducers } from 'redux'

import cart from './cart'
import product from './product'

const reducer = combineReducers({
  cart,
  product
})

export default reducer

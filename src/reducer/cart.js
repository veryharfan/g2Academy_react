import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, CHECKOUT } from 'action/constant'

const initialState = {
  result: [],
  checkout: false
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log('state ', state.result)

      return {
        ...state,
        checkout: false,
        result: [...state.result, action.payload]
      }
    case UPDATE_ITEM:
      const newResult = [...state.result]
      const idx = newResult.findIndex(
        x => x.product_id === action.payload.product_id
      )
      newResult.splice(idx, 1, action.payload)
      return {
        ...state,
        result: newResult
      }
    case DELETE_ITEM:
      return {
        ...state,
        result: state.result.filter(x => x.product_id !== action.payload)
      }
    case CHECKOUT:
      return {
        ...state,
        result: [],
        checkout: true
      }
    default:
      return state
  }
}

export default cart

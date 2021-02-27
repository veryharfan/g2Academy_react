import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, CHECKOUT } from '../constants'

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        checkout: false,
        result: [
          ...state.result.filter(x => x.id !== action.payload.id),
          action.payload,
        ],
      }
    case UPDATE_ITEM:
      const newResult = [...state.result]
      const idx = newResult.findIndex(x => x.id === action.payload.id)
      newResult.splice(idx, 1, action.payload)
      return {
        ...state,
        result: [...newResult],
      }
    case DELETE_ITEM:
      return {
        ...state,
        result: state.result.filter(x => x.id !== action.payload),
      }
    case CHECKOUT:
      return {
        ...state,
        result: [],
        checkout: true,
      }
    default:
      return state
  }
}

export default cartReducer

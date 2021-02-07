import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  DISPATCH_TO_UPDATE
} from 'action/constant'

const initialState = {
  newId: 0,
  product_to_update: '',
  result: []
}

const product = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        newId: state.newId + 1,
        result: [...state.result, action.payload]
      }
    case DELETE_PRODUCT:
      const idx = Number(action.payload)
      return {
        ...state,
        result: state.result.filter(x => x.id !== idx)
      }
    case UPDATE_PRODUCT:
      const id = Number(action.payload.id)
      return {
        ...state,
        product_to_update: '',
        result: [...state.result.filter(x => x.id !== id), action.payload]
      }
    case DISPATCH_TO_UPDATE:
      return {
        ...state,
        product_to_update: action.payload
      }
    default:
      return state
  }
}

export default product

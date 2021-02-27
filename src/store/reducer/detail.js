import { ADD_DETAILS, UPDATE_DETAILS, FINISH_UPDATE } from '../constants'

function detailReducer(state, action) {
  switch (action.type) {
    case ADD_DETAILS:
      const details = action.payload
      return {
        ...state,
        toUpdate: false,
        details,
      }
    case UPDATE_DETAILS:
      return {
        ...state,
        toUpdate: true,
      }
    case FINISH_UPDATE:
      return {
        ...state,
        toUpdate: false,
      }
    default:
      return state
  }
}

export default detailReducer

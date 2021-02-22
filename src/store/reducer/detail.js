import {ADD_DETAILS} from '../constants';

function detailReducer(state, action) {
  switch (action.type) {
    case ADD_DETAILS:
      const details = action.payload;
      return {
        ...state,
        details,
      };
    default:
      return state;
  }
}

export default detailReducer;

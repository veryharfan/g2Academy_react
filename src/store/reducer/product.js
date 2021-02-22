import {ADD_DATA, DELETE_DATA, UPDATE_DATA} from '../constants';

function productReducer(state, action) {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    case DELETE_DATA:
      return state.filter((x) => x.id !== action.payload);
    case UPDATE_DATA:
      return;
    default:
      return state;
  }
}

export default productReducer;

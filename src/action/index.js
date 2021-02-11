import {
  ADD_ITEM,
  UPDATE_ITEM,
  DECREASE_ITEM,
  DELETE_ITEM,
  CHECKOUT,
  FETCH_PRODUCT
} from './constant'

export const addItem = payload => ({
  type: ADD_ITEM,
  payload
})

export const updateItem = payload => ({
  type: UPDATE_ITEM,
  payload
})

export const decreaseItem = payload => ({
  type: DECREASE_ITEM,
  payload
})

export const deleteItem = payload => ({
  type: DELETE_ITEM,
  payload
})

export const checkout = payload => ({
  type: CHECKOUT,
  payload
})

export const fetchProduct = payload => ({
  type: FETCH_PRODUCT,
  payload
})

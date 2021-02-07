import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  DISPATCH_TO_UPDATE
} from './constant'

export const addProduct = payload => ({
  type: ADD_PRODUCT,
  payload
})

export const delProduct = payload => ({
  type: DELETE_PRODUCT,
  payload
})

export const updateProduct = payload => ({
  type: UPDATE_PRODUCT,
  payload
})

export const dispatchToUpdate = payload => ({
  type: DISPATCH_TO_UPDATE,
  payload
})

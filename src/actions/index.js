import * as types from './ActionTypes'

export const inputString = (data) => ({
  type: types.INPUT_STRING,
  data
})

export const calculateResult = (data) => ({
  type: types.CALCULATE_RESULT,
  data
})

import * as types from './ActionTypes'

export const inputString = (inputState, data) => ({
  type: types.INPUT_STRING,
  inputState,
  data
})

export const calculateResult = (data) => ({
  type: types.CALCULATE_RESULT,
  data
})

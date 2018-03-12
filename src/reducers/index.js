import * as types from '../actions/ActionTypes'
import parseString from '../helpers/parse-string'
import calculate from '../helpers/calculate'

const concatString = (state, data) => {
  const x = state
  return x + data
}

const getResult = (data) => (calculate(parseString(data)))

export const inputString = (state = '', action) => {
  switch (action.type) {
    case types.INPUT_STRING:
      return concatString(state, action.data)
    case types.CALCULATE_RESULT:
      return getResult(action.data)
    default:
      return state
  }
}

export const calculateResult = (state = null, action) => {
  switch (action.type) {
    case types.INPUT_STRING:
      return getResult(action.data)
    case types.CALCULATE_RESULT:
      return null
    default:
      return state
  }
}

import * as types from '../actions/ActionTypes'
import parseString from '../helpers/parse-string'
import calculate from '../helpers/calculate'

const concatString = (state, data) => {
  const x = state // Copy of state to mutate
  return x + data
}

const getResult = (input, data) => {
  let string = concatString(input, data)
  let parsed = parseString(string)
  return calculate(parsed)
}

export const inputString = (state = '', action) => {
  switch (action.type) {
    case types.INPUT_STRING:
      return concatString(state, action.data)
    case types.CALCULATE_RESULT:
      return action.data === 'Bad Expression' ? state : action.data
    default:
      return state
  }
}

export const calculateResult = (state = null, action) => {
  switch (action.type) {
    case types.INPUT_STRING:
      return getResult(action.inputState, action.data)
    case types.CALCULATE_RESULT:
      return action.data === 'Bad Expression' ? action.data : null
    default:
      return state
  }
}

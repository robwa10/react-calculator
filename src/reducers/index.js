import { combineReducers } from 'redux'
import * as types from '../actions/ActionTypes'
import parseString from '../helpers/parse-string'
import calculate from '../helpers/calculate'

// ********************
// Small helper functions

const concatString = (state, data) => {
  const x = state // Copy of state to mutate
  return x + data
}

const removeLastElement = (state) => {
  let copy = state // Copy of state to mutate
  return copy.slice(0, -1)
}

const getResult = (input, data) => {
  let string = concatString(input, data)
  let parsed = parseString(string)
  return calculate(parsed)
}

// ********************
// Reducers

export const inputString = (state = '', action) => {
  switch (action.type) {
    case types.INPUT_STRING:
      return concatString(state, action.data)
    case types.DELETE_ELEMENT:
      return removeLastElement(state)
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
    case types.DELETE_ELEMENT:
      return calculate(parseString(removeLastElement(action.inputState)))
    case types.CALCULATE_RESULT:
      return action.data === 'Bad Expression' ? action.data : null
    default:
      return state
  }
}

export default combineReducers({
  input: inputString,
  result: calculateResult
})

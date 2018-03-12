import * as types from '../actions/ActionTypes'
import * as actions from '../actions'

describe('actions', () => {
  it('should create an action to add an input', () => {
    const data = '8'
    const inputState = '4+'
    const expectedAction = {
      type: types.INPUT_STRING,
      inputState,
      data
    }
    expect(actions.inputString(inputState, data)).toEqual(expectedAction)
  })
  it('should create an action to calculate result', () => {
    const data = '='
    const expectedAction = {
      type: types.CALCULATE_RESULT,
      data
    }
    expect(actions.calculateResult(data)).toEqual(expectedAction)
  })
})

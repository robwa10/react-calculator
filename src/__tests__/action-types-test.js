import * as types from '../actions/ActionTypes'

describe('action types', () => {
  it('should equal ADD_INPUT', () => {
    expect(types.INPUT_STRING).toEqual('INPUT_STRING')
  })
  it('should equal CALCULATE_RESULT', () => {
    expect(types.CALCULATE_RESULT).toEqual('CALCULATE_RESULT')
  })
  it('should equal DELETE_ELEMENT', () => {
    expect(types.DELETE_ELEMENT).toEqual('DELETE_ELEMENT')
  })
})

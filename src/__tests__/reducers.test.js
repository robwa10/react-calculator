import * as types from '../actions/ActionTypes'
import * as reducers from '../reducers'

// ********************
// inputString Reducer Tests

describe('input string reducer', () => {
  it('should return initial state', () => {
    expect(reducers.inputString(undefined, {})).toEqual('')
  })
  it('should return string with input concatenated to the end', () => {
    expect(reducers.inputString('1', {
      type: types.INPUT_STRING,
      data: '0'
    })).toEqual('10')
  })
  it('should change the input string to the result', () => {
    expect(reducers.inputString('10+4*2+(2*2)', {
      type: types.CALCULATE_RESULT,
      data: '22'
    })).toEqual('22')
  })
  it('should display the input string if result is Bad Expression', () => {
    expect(reducers.inputString('10+4*2+(2*2))', {
      type: types.CALCULATE_RESULT,
      data: 'Bad Expression'
    })).toEqual('10+4*2+(2*2))')
  })
  it('should delete the last input', () => {
    expect(reducers.inputString('2+2-3', {
      type: types.DELETE_ELEMENT
    })).toEqual('2+2-')
  })
})

// ********************
// calculateResult Reducer Tests

describe('calculate reducer', () => {
  it('should return initial state', () => {
    expect(reducers.calculateResult(undefined, {})).toEqual(null)
  })
  it('should return null with less than 3 items in the string', () => {
    expect(reducers.calculateResult(null, {
      type: types.INPUT_STRING,
      inputState: '2',
      data: '+'
    })).toEqual(null)
  })
  it('should parse the string and calculate the result', () => {
    const action = {
      type: types.INPUT_STRING,
      inputState: '10+4*2+(2*2',
      data: ')'
    }
    expect(reducers.calculateResult('20', action)).toEqual('22')
  })
  it('should clear the calculated result string', () => {
    expect(reducers.calculateResult('18', {
      type: types.CALCULATE_RESULT
    })).toEqual(null)
  })
  it('should return Bad Expression', () => {
    expect(reducers.calculateResult('18', {
      type: types.CALCULATE_RESULT,
      data: 'Bad Expression'
    })).toEqual('Bad Expression')
  })
})

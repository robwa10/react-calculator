import operators from '../helpers/operators'

describe('operators', () => {
  it('should return an object', () => {
    expect(typeof operators).toEqual('object')
  })
  it('should add', () => {
    expect(operators.add(1, 2)).toEqual(3)
  })
  it('should subtract', () => {
    expect(operators.subtract(10, 2)).toEqual(8)
  })
  it('should multiply', () => {
    expect(operators.multiply(4, 3)).toEqual(12)
  })
  it('should divide', () => {
    expect(operators.divide(10, 2)).toEqual(5)
  })
})

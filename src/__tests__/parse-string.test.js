import parseString from '../helpers/parse-string'

describe('parsing the input', () => {
  it('should turn a simple string to an array', () => {
    expect(parseString('2+2')).toEqual(['2', '+', '2'])
  })
  it('should parse double digits as one array item', () => {
    expect(parseString('10+2')).toEqual(['10', '+', '2'])
  })
  it('should should not break due to parens', () => {
    expect(parseString('10+2+(3*6)-4'))
    .toEqual(['10', '+', '2', '+', '(', '3', '*', '6', ')', '-', '4'])
  })
})

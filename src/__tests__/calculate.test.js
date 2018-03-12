import calculate from '../helpers/calculate'

describe('simple calculation functions', () => {
  it('should not calculate with less than 3 items', () => {
    expect(calculate(['2', '+'])).toEqual(null)
  })
  it('should do the most basic calculation', () => {
    expect(calculate(['2', '+', '2'])).toEqual('4')
  })
  it('should calculate the total', () => {
    expect(calculate(['2', '+', '10', '-', '4'])).toEqual('8')
  })
  it('should ignore extra operator at the end', () => {
    expect(calculate(['2', '+', '4', '-', '1', '*'])).toEqual('5')
  })
  it('should return a negative number', () => {
    expect(calculate(['2', '-', '3'])).toEqual('-1')
  })
  it('should follow operations precedence', () => {
    expect(calculate(['10', '/', '2', '+', '2', '*', '5'])).toEqual('15')
  })
  it('should not break due to precedence', () => {
    expect(calculate(
      ['10', '+', '4', '/', '2', '-', '8', '+', '3', '*', '6']
    )).toEqual('22')
  })
  it('should not break due to / and * precedence being next to one another', () => {
    expect(calculate(['10', '+', '4', '/', '2', '*', '(', '2', '*', '2', ')']))
    .toEqual('18')
  })
  it('should calculate a trailing decimal amount', () => {
    expect(calculate(['10', '*', '1.10'])).toEqual('11')
  })
  it('should calculate a leading decimal amount', () => {
    expect(calculate(['2', '*', '.10'])).toEqual('0.2')
  })
  it('should calculate paren amount first', () => {
    expect(calculate(
      ['10', '+', '(', '5', '+', '5', '*', '2', ')', '*', '2']
    )).toEqual('40')
  })
  it('should not compute with only closing paren', () => {
    expect(calculate(['5', '+', '3', '-', '5', ')'])).toEqual('Bad Expression')
  })
  it('should not ignore single open paren', () => {
    expect(calculate(['10', '+', '3', '-', '(', '5', '-', '2'])).toEqual('10')
  })
  it('should calculate multiple paren amounts first', () => {
    expect(calculate(
      ['(', '10', '+', '2', ')', '+', '(', '4', '+', '4', ')'])).toEqual('20')
  })
  it('should calculate parens within parens', () => {
    expect(calculate(
      ['80', '+', '(', '2', '*', '2', ')', '-', '(', '6', '+', '(', '4', '*', '10', ')', ')'])).toEqual('38')
  })
  it('should ignore unclosed opening paren in multiple paren calculation', () => {
    expect(calculate(
      ['(', '10', '+', '10', '/', '(', '2', '*', '5', ')'])).toEqual('11')
  })
})

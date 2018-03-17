import React from 'react'
import Button from '../components/button'
import ButtonContainer from '../components/button-container'
import Expression from '../components/expression'
import ExpressionResultContainer from '../containers/expression-result-container'
import Result from '../components/result'

// Tests are in alphabetical order based on component name

// ********************
// Button Component Tests

it('should render a button with a string', () => {
  expect(Button({buttonText: '7'}))
  .toEqual(<button>7</button>)
})

// ********************
// Button Containers Component Tests

const renderedOperators =
  <div className='operators-container'>
    <Button
      key='DEL'
      buttonText='DEL'
    />
    <Button
      key='/'
      buttonText='/'
    />
    <Button
      key='x'
      buttonText='x'
    />
    <Button
      key='-'
      buttonText='-'
    />
    <Button
      key='+'
      buttonText='+'
    />
  </div>

const buttonArray = ['DEL', '/', 'x', '-', '+']
const myClass = 'operators-container'

it('should render 5 operator buttons', () => {
  expect(ButtonContainer({buttonArray, myClass}))
  .toEqual(renderedOperators)
})

// ********************
// Expression Component Tests

const renderedInput =
  <div className='expression-container'>
    <span className='expression-text'>4+4/2*8</span>
  </div>

it('should render the input div', () => {
  expect(Expression({input: '4+4/2*8'})).toEqual(renderedInput)
})

// ********************
// Input and Result Container Tests

const renderedDisplayContainer =
  <div className='expression-result-container'>
    <Input />
    <Result />
  </div>

it('should render the input and result container', () => {
  expect(ExpressionResultContainer({input: '4+4/2*8', result: '48'})).toEqual(renderedDisplayContainer)
})

// ********************
// Result Component Tests

const renderedResult =
  <div className='result-container'>
    <span className='result-text'>48</span>
  </div>

it('should render the result div', () => {
  expect(Result({result: '48'})).toEqual(renderedResult)
})

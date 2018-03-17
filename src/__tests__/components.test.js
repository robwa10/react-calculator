import React from 'react'
import Button from '../components/button'
import ButtonContainer from '../components/button-container'
import Input from '../components/input'
import InputResultContainer from '../containers/input-result-container'
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
// Input Component Tests

const renderedInput =
  <div className='input-container'>
    <span className='input-text'>4+4/2*8</span>
  </div>

it('should render the input div', () => {
  expect(Input({input: '4+4/2*8'})).toEqual(renderedInput)
})

// ********************
// Input and Result Container Tests

const renderedDisplayContainer =
  <div className='input-result-container'>
    <Input />
    <Result />
  </div>

it('should render the input and result container', () => {
  expect(InputResultContainer({input: '4+4/2*8', result: '48'})).toEqual(renderedDisplayContainer)
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

import React from 'react'
import Input from '../components/input'
import Result from '../components/result'
import NumberPad from '../components/numberpad'
import Button from '../components/button'
import InputResultContainer from '../containers/input-result-container'

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
// Input Component Tests

const renderedInput =
  <div className='input-container'>
    <span className='input-text'>4+4/2*8</span>
  </div>

it('should render the input div', () => {
  expect(Input({input: '4+4/2*8'})).toEqual(renderedInput)
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

// ********************
// Button Component Tests

const renderedButton =
  <div className='button-container'>
    <button className='button-text'>7</button>
  </div>


it('should render a button with a string', () => {
  expect(Button({buttonText: '7'})).toEqual(renderedButton)
})


// ********************
// NumberPad Component Tests

const renderedNumberPad =
  <div className='numberpad-container'>
    <Button
      key={'7'}
      buttonText={'7'}
    />
    <Button
      key={'8'}
      buttonText={'8'}
    />
    <Button
      key={'9'}
      buttonText={'9'}
    />
    <Button
      key={'4'}
      buttonText={'4'}
    />
    <Button
      key={'5'}
      buttonText={'5'}
    />
    <Button
      key={'6'}
      buttonText={'6'}
    />
    <Button
      key={'1'}
      buttonText={'1'}
    />
    <Button
      key={'2'}
      buttonText={'2'}
    />
    <Button
      key={'3'}
      buttonText={'3'}
    />
    <Button
      key={'.'}
      buttonText={'.'}
    />
    <Button
      key={'0'}
      buttonText={'0'}
    />
    <Button
      key={'='}
      buttonText={'='}
    />
  </div>

it('should render 12 buttons', () => {
  expect(NumberPad()).toEqual(renderedNumberPad)
})

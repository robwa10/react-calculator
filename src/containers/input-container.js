import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ButtonContainer from '../components/button-container'

class InputContainer extends Component {
  render () {
    const operators = ['DEL', '/', 'x', '-', '+']
    const numberRowOne = ['7', '8', '9']
    const numberRowTwo = ['4', '5', '6']
    const numberRowThree = ['1', '2', '3']
    const numberRowFour = ['.', '0', '=']

    return (
      <div className='input-container'>
        <div className='numberpad-container'>
          <ButtonContainer
            buttonArray={numberRowOne}
            myClass='number-row'
          />
          <ButtonContainer
            buttonArray={numberRowTwo}
            myClass='number-row'
          />
          <ButtonContainer
            buttonArray={numberRowThree}
            myClass='number-row'
          />
          <ButtonContainer
            buttonArray={numberRowFour}
            myClass='number-row'
          />
        </div>
        <ButtonContainer
          buttonArray={operators}
          myClass='operators-container'
        />
      </div>
    )
  }
}

export default InputContainer

InputContainer.propTypes = {
  numberpad: PropTypes.array,
  operators: PropTypes.array
}

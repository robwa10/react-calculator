import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ButtonContainer from '../containers/button-container'

class InputContainer extends Component {
  render () {
    let operators = ['DEL', '÷', 'x', '-', '+']
    let numberRowOne = ['7', '8', '9']
    let numberRowTwo = ['4', '5', '6']
    let numberRowThree = ['1', '2', '3']
    let numberRowFour = ['.', '0', '=']
    let numberRowFive = ['CLR', '(', ')']

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
          <ButtonContainer
            buttonArray={numberRowFive}
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
  operators: PropTypes.array
}

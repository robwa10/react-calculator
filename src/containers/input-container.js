import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ButtonContainer from '../components/button-container'

class InputContainer extends Component {
  render () {
    const operators = ['DEL', '/', 'x', '-', '+']
    const numberpad = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '=']

    return (
      <div className='input-container'>
        <ButtonContainer
          buttonArray={numberpad}
          myClass='numberpad-container'
        />
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

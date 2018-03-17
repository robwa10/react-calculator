import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'

const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '=']

const NumberPad = (props) => {
  // Button has a currently unpassed prop of onClick
  return (
    <div className='numberpad-container'>
      {numbers.map(number => (
        <Button
          key={number}
          buttonText={number}
        />
      ))}
    </div>
  )
}

export default NumberPad

NumberPad.propTypes = {
  number: PropTypes.string
}

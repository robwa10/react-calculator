import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ buttonText, onClick }) => (
  <div className='button-container'>
    <button
      onClick={onClick}
      className='button-text'
      >{buttonText}</button>
  </div>
)

export default Button

Button.propTypes = {
  buttonText: PropTypes.string
}

import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ buttonText, onClick }) => (
  <button onClick={onClick}>{buttonText}</button>
)

export default Button

Button.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func
}

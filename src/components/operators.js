import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'

const operatorArray = ['DEL', '/', 'x', '-', '+']

const Operators = (props) => {
  // Button has a currently unpassed prop of onClick
  return (
    <div className='operators-container'>
      {operatorArray.map(operator => (
        <Button
          key={operator}
          buttonText={operator}
        />
      ))}
    </div>
  )
}

export default Operators

Operators.propTypes = {
  operator: PropTypes.string
}

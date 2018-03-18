import React from 'react'
import PropTypes from 'prop-types'

const Expression = ({ expression, style }) => {
  return (
    <div className='expression-container' style={style}>
      <span className='expression-text'>{expression}</span>
    </div>
  )
}

export default Expression

Expression.propTypes = { expression: PropTypes.string }

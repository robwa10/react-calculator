import React from 'react'
import PropTypes from 'prop-types'

const DisplayBox = ({
  text,
  divClassName,
  spanClassName,
  divStyle,
  spanStyle
}) => {
  return (
    <div className={divClassName} style={divStyle}>
      <span className={spanClassName} style={spanStyle}>{text}</span>
    </div>
  )
}

export default DisplayBox

DisplayBox.propTypes = {
  text: PropTypes.string,
  divClassName: PropTypes.string,
  spanClassName: PropTypes.string,
  divStyle: PropTypes.object,
  spanStyle: PropTypes.object
}

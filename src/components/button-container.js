import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'

const ButtonContainer = ({ buttonArray, myClass }) => {
  // Button has a currently unpassed prop of onClick
  return (
    <div className={myClass}>
      {buttonArray.map(item => (
        <Button
          key={item}
          buttonText={item}
        />
      ))}
    </div>
  )
}

export default ButtonContainer

ButtonContainer.propTypes = {
  buttonArray: PropTypes.array,
  item: PropTypes.string,
  myClass: PropTypes.string
}

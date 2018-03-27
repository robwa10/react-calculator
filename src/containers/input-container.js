import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Button from '../components/button'

class InputContainer extends Component {
  constructor (props) {
    super(props)
    this.buttonClick = this.buttonClick.bind(this)
  }

  validateEquals () {
    if (this.props.result !== null) {
      this.props.calculateResult(this.props.result)
    }
  }

  buttonClick (button) {
    switch (button) {
      case 'DEL':
        this.props.deleteElement(this.props.input)
        break
      case '=':
        this.validateEquals()
        break
      case 'CLR':
        this.props.clearAll()
        break
      default:
        this.props.inputString(this.props.input, button)
    }
  }

  render () {
    let operators = ['DEL', '÷', 'x', '-', '+']
    let numberPad = [
      ['(', ')', 'CLR'],
      ['7', '8', '9'],
      ['4', '5', '6'],
      ['1', '2', '3'],
      ['.', '0', '=']
    ]

    return (
      <div className='input-container'>
        <div className='numberpad-container'>
          {numberPad.map(element => {
            return (
              <div className='number-row'>
                {element.map(item => (
                  <Button
                    key={item}
                    buttonText={item}
                    onClick={() => this.buttonClick(item)}
                  />
                ))}
              </div>
            )
          })}
        </div>
        <div className='operators-container'>
          {operators.map(item => (
            <Button
              key={item}
              buttonText={item}
              onClick={() => this.buttonClick(item)}
            />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  input: state.input,
  result: state.result
})

export default connect(mapStateToProps, actions)(InputContainer)

InputContainer.propTypes = {
  operators: PropTypes.array,
  numberPad: PropTypes.array
}

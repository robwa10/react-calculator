import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Button from '../components/button'

class ButtonContainer extends Component {
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
    return (
      <div className={this.props.myClass}>
        {this.props.buttonArray.map(item => (
          <Button
            key={item}
            buttonText={item}
            onClick={() => this.buttonClick(item)}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  input: state.input,
  result: state.result
})

export default connect(mapStateToProps, actions)(ButtonContainer)

ButtonContainer.propTypes = {
  buttonArray: PropTypes.array,
  item: PropTypes.string,
  myClass: PropTypes.string
}

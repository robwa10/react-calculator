import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import DisplayBox from '../components/display-box'

const ExpressionResultContainer = (props) => {
  let inputTextStyle = {}

  if (props.input.length > 13) {
    inputTextStyle = {'fontSize': 30}
  } else if (props.input.length > 11) {
    inputTextStyle = {'fontSize': 36}
  }

  return (
    <div className='expression-result-container'>
      <DisplayBox
        divClassName='expression-container'
        spanClassName='expression-text'
        divStyle={inputTextStyle}
        text={props.input}
      />
      <DisplayBox
        divClassName='result-container'
        spanClassName='result-text'
        text={props.result}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  input: state.input,
  result: state.result
})

export default connect(mapStateToProps, null)(ExpressionResultContainer)

ExpressionResultContainer.propTypes = {
  input: PropTypes.string,
  result: PropTypes.string
}

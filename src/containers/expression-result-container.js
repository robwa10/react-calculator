import React from 'react'
import { connect } from 'react-redux'
import Expression from '../components/expression'
import Result from '../components/result'

const ExpressionResultContainer = (props) => {
  let textStyle = {}

  if (props.input.length > 16) {
    textStyle = {'fontSize': 30}
  } else if (props.input.length > 12) {
    textStyle = {'fontSize': 36}
  }

  return (
    <div className='expression-result-container'>
      <Expression
        expression={props.input}
        style={textStyle} />
      <Result result={props.result} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  input: state.input,
  result: state.result
})

export default connect(mapStateToProps, null)(ExpressionResultContainer)

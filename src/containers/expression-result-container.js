import React from 'react'
import Expression from '../components/expression'
import Result from '../components/result'

const ExpressionResultContainer = ({ expression, result }) => {
  return (
    <div className='expression-result-container'>
      <Expression expression={expression} />
      <Result result={result} />
    </div>
  )
}

export default ExpressionResultContainer

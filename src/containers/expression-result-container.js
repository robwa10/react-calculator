import React from 'react'
import Expression from '../components/expression'
import Result from '../components/result'

const ExpressionResultContainer = ({ input, result }) => {
  return (
    <div className='input-result-container'>
      <Expression />
      <Result />
    </div>
  )
}

export default ExpressionResultContainer

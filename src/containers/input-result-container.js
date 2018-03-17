import React from 'react'
import Input from '../components/input'
import Result from '../components/result'

const InputResultContainer = ({ input, result }) => {
  return (
    <div className='input-result-container'>
      <Input />
      <Result />
    </div>
  )
}

export default InputResultContainer

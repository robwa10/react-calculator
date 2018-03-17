import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import Header from './components/header'
import ExpressionResultContainer from './containers/expression-result-container'
import InputContainer from './containers/input-container'

let store = createStore(reducer)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <ExpressionResultContainer />
          <InputContainer />
        </div>
      </Provider>
    )
  }
}

export default App

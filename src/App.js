import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import Header from './components/header'
import ExpressionResultContainer from './containers/expression-result-container'
import InputContainer from './components/input-container'

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className='app'>
          <div className='container'>
            <Header />
            <ExpressionResultContainer />
            <InputContainer />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App

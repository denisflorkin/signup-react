
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'

import { createStore } from 'redux'
import signupReducer from './containers/reducer'


/**
 * create the store
 */
let store
if (process.env === 'production') {
  store = createStore(signupReducer)
} else {
  store = createStore(
    signupReducer,
    (
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
}


function init() {
  const appRootNode = document.getElementById('react-root')
  ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,
    appRootNode)
}

window.addEventListener('DOMContentLoaded', init)

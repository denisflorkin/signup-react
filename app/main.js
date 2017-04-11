
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import createTheStore from './utils/createTheStore'

import App from './components/App'
import signupReducer from './containers/reducer'


const store = createTheStore(signupReducer)

function init() {
  const appRootNode = document.getElementById('react-root')
  ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,
    appRootNode)
}

window.addEventListener('DOMContentLoaded', init)


import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import createTheStore from './utils/createTheStore'

import App from './components/App'
import signupReducer from './containers/reducer'



/**
 * create the store
 */
// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/*
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const middlewares = [
  thunk,
];

const enhancers = [
  applyMiddleware(...middlewares),
];
*/
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

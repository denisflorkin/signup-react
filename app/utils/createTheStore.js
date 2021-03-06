
// import React from 'react'
// import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


/**
 * create the store
 */
// If Redux DevTools Extension is installed use it, otherwise use Redux compose
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

export default function createTheStore(reducer) {
  return createStore(
    reducer,
    composeEnhancers(...enhancers)
  )
}


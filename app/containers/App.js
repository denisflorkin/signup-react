
import React from 'react'
import { connect } from 'react-redux'

import Signupfom from './SignupForm'

const style = {
  width: '94%',
  maxWidth: '380px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontFamily: 'Helvetica, Arial, sans-serif'
}

export function App(props) {
  const { stuff } = props

  return (
    <div style={style}>
      <h1>Sign Up</h1>
      <Signupfom />
    </div>
  )
}

export default App

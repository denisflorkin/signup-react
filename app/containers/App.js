
import React from 'react'
import { connect } from 'react-redux'

import Signupfom from './SignupForm'

const style = {
  width: '94%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
}

export function App(props) {
  const { stuff } = props

  return (
    <div style={style}>
      <Signupfom />
    </div>
  )
}

export default App

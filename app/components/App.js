
import React from 'react'

import Signupfom from '../containers/SignupForm'


const style = {
  width: '94%',
  maxWidth: '380px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontFamily: 'Helvetica, Arial, sans-serif'
}

export function App() {
  return (
    <div style={ style } >
      <h1>Sign Up</h1>
      <Signupfom />
    </div>
  )
}
export default App

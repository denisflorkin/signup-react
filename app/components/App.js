
import React from 'react'

import theme from '../utils/theme'
import Signupfom from '../containers/SignupForm'
import H1 from './H1'

const style = {
  maxWidth: '380px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontFamily: 'Helvetica, Arial, sans-serif',
  padding: '16px',
  border: '1px solid rgba(35, 70, 100, .09)',
  boxShadow: '0 0 16px 2px rgba(35, 70, 100, .06)',
  color: theme.darkGrey,
  overflow: 'hidden',
}

export function App() {
  return (
    <div style={ style } >
      <H1>Sign Up</H1>
      <Signupfom />
    </div>
  )
}
export default App

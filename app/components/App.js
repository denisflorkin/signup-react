
import React from 'react'
import styled from 'styled-components'

import theme from '../utils/theme'
import Signupfom from '../containers/SignupForm'
import H1 from './H1'



const Wrapper = styled.div`
  max-width: 380px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Helvetica, Arial, sans-serif;
  padding: 16px;
  border: 1px solid rgba(35, 70, 100, .09);
  boxShadow: 0 0 16px 2px rgba(35, 70, 100, .06);
  color: ${theme.darkGray};
  overflow: hidden;
`

export function App() {
  return (
    <Wrapper>
      <H1>Sign Up</H1>
      <Signupfom />
    </Wrapper>
  )
}
export default App

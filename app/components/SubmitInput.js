
import React from 'react'
import theme from '../utils/theme'
import Loader from './Loader'
import Checkmark from './Checkmark'

const { darkGray, blue } = theme


const wrapperStyle = {
  width: '140px',
  height: '38px',
  alignSelf: 'flex-end',
  marginRight: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: darkGray,
  border: '1px solid',
}

const inputStyle = {
  width: '100%',
  padding: '4px 24px',
  margin: '2px auto',
  fontSize: '1.2em',
  textTransform: 'uppercase',
  borderRadius: 0,
  border: 'none',
  background: 'transparent',

}

export function SubmitInput(props) {
  const {
    formIsValid,
    isFetching,
    signupSucceeded,
    error,

    ...filterHTMLPropsOnly,
  } = props

  if (isFetching) {
    return <div style={wrapperStyle} ><Loader /></div>
  }

  if (signupSucceeded) {
    return <div style={wrapperStyle} ><Checkmark /></div>
  }

  return (
    <div style={wrapperStyle} >
      
      <input
        style={inputStyle}
        type="submit"
        value="Send"
        {...filterHTMLPropsOnly}
      />
    </div>
  )
}
export default SubmitInput

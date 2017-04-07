
import React from 'react'
import theme from '../utils/theme'
import Loader from './Loader'
import Checkmark from './Checkmark'

const { darkGray, blue, green } = theme


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

  const finalWrapperStyle = {
    ...wrapperStyle,
    ...(formIsValid ?
          (signupSucceeded ? { color: green } : { color: blue })
          : {}
      )
  }

  if (isFetching) {
    return <div style={finalWrapperStyle} ><Loader /></div>
  }

  if (signupSucceeded) {
    return <div style={finalWrapperStyle} ><Checkmark /></div>
  }




  const finalInputStyle = {
    ...inputStyle,
    ...(formIsValid ? { color: blue } : {} )
  }

  return (
    <div style={finalWrapperStyle} >
      <input
        style={finalInputStyle}
        type="submit"
        value="Send"
        {...filterHTMLPropsOnly}
      />
    </div>
  )
}
export default SubmitInput

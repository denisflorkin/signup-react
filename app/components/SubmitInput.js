
import React, { PropTypes } from 'react'
import theme from '../utils/theme'
import Loader from './Loader'
import Checkmark from './Checkmark'

const { darkGray, blue, green, grey } = theme


const wrapperStyle = {
  width: '140px',
  height: '38px',
  alignSelf: 'flex-end',
  marginRight: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: darkGray,
  border: '2px solid',
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
    // formIsValid,
    isFetching,
    signupSucceeded,
    formError,
    error,

    ...filterHTMLPropsOnly, // destructur/assign the rest
  } = props

  // maybe decompose this into small descriptively named fn
  // like getInputColor(props), getWrapperColor(props)
  const finalWrapperStyle = {
    ...wrapperStyle,
    ...(!formError ?
          (signupSucceeded ? { color: green } : { color: blue })
          : { color: grey }
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
    ...(!formError ? { color: blue } : { color: grey } )
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

SubmitInput.propType = {
  formIsValid: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  signupSucceeded: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  formError: PropTypes.bool.isRequired,
}

export default SubmitInput

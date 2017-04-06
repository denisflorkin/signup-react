
import React from 'react'
import theme from '../utils/theme'

console.log(theme)

const { darkGray, blue } = theme

console.log(darkGray)

const style = {
  alignSelf: 'flex-end',
  padding: '4px 24px',
  margin: '2px auto',
  fontSize: '1.2em',
  marginRight: 0,
  textTransform: 'uppercase',
  borderRadius: 0,
  border: 'none',
  background: 'transparent',
  color: darkGray,
  border: '1px solid',

}

export function SubmitInput(props) {
  const { formIsValid } = props

  const finalStyle = {
    ...style,
    ...(formIsValid ? { color: blue } : {} )
  }

  return (
    <input
      style={finalStyle}
      type="submit"
      value="Send"
      {...props}
    />
    )
}
export default SubmitInput

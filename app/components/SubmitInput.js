
import React from 'react'


const style = {
  alignSelf: 'flex-end',
  border: '1px solid lightgray',
  padding: '4px 8px',
  margin: '8px auto',
  fontSize: '1.2em',
  marginRight: 0,
  textTransform: 'uppercase',
}

export function SubmitInput(props) {
  const { stuff } = props

  return (
    <input
      style={style}
      type="submit"
      value="Send"
      {...props}
    />
    )
}
export default SubmitInput

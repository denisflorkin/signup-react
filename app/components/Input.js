
import React from 'react'


const style = {
  width: '100%',
  display: 'block',
  boxSizing:'border-box',
  border: '1px solid lightgray',
  padding: '4px 8px',
  margin: '8px auto',
  fontSize: '1.2em',
}

export function Input(props) {
  const { stuff } = props

  return (
    <input
      style={style}
      {...props}
    />
    )
}
export default Input

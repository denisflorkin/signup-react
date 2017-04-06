
import React from 'react'


const style = {
  marginTop: '8px',
  fontWeight: 100,
}

export function H1(props) {
  return (
    <label
      style={style}
      {...props}
    >
      { React.Children.toArray(props.children) }
    </label>
    )
}
export default H1

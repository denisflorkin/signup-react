
import React from 'react'


const style = {
  margin: '8px 0',
}

export function H1(props) {
  return (
    <h1
      style={style}
      {...props}
    >
      { React.Children.toArray(props.children) }
    </h1>
    )
}
export default H1

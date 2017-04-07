
import React from 'react'


const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}

export function Form(props) {
  return (
    <form
      style={style}
      {...props}
    />
    )
}
export default Form

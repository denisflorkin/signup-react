
import React, { PropTypes } from 'react'


const green = '#4CAF50'
const red = '#FF9800'
const gray = 'lightgray'

const style = {
  width: '100%',
  display: 'block',
  boxSizing:'border-box',
  border: 'none',
  outline: 'none',
  borderBottom: `2px solid ${gray}`,
  padding: '4px 8px',
  margin: '8px auto',
  fontSize: '1.2em',
}

const erroredStyle = {
    borderBottom: `2px solid ${red}`, // orange
}
const validStyle = {
    borderBottom: `2px solid ${green}`, //green
}

export function Input(props) {
  const { error } = props
  
  // could do a ternary, but probably 
  // wouldn't help readability anyway
  const finalStyle = ((error) => {
    if (!error) { return { ...style, ...validStyle } }

    if (error.inputName) {
      if (error.inputName === props.name) {
        return { ...style, ...erroredStyle }
      } else {
        return { ...style, ...validStyle }
      }
    } else {
      return style
    }
  })(error)

  return (
    <input
      style={finalStyle}
      { ...props }
    />
    )
}

Input.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.bool.isRequired,
  ]) 
}

export default Input

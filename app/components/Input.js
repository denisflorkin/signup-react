'use strict';

import React, { PropTypes } from 'react'
import theme from '../utils/theme'

const { green, red, gray } = theme

const style = {
  width: '100%',
  display: 'block',
  boxSizing:'border-box',
  border: '1px solid transparent',
  outline: 'none',
  borderBottom: `2px solid ${gray}`,
  padding: '4px 0',
  margin: '2px auto 16px auto',
  fontSize: '1.2em',
}

const erroredStyle = {
    // a `!` right aligned within in the field 
    // would be prettier, maybe in a :after
    border: `1px dotted ${red}`,  
    borderBottom: `2px solid ${red}`,
}
const validStyle = {
    borderBottom: `2px solid ${green}`,
}

export function Input(props) {
  const {
    error,
    
    ...filterHTMLPropsOnly,
  } = props
  
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
      { ...filterHTMLPropsOnly }
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

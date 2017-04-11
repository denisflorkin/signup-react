
import React from 'react'


const style = {
  marginTop: '8px',
  fontWeight: 100,
}


export class Label extends React.PureComponent {
  render() {
    const { props } = this
    return (
      <label
        style={style}
        {...props}
      >
      { React.Children.toArray(props.children) }
    </label>
  )}
}

export default Label


import React from 'react'


const style = {
  minHeight: '3em',
  fontFamily: 'Georgia, serif',
}

export function FeedbackMsg(props) {
  const { error } = props

  return (
    <div style={style}>
      { error ? error.message : 'Good to go' }
    </div>
    )
}
export default FeedbackMsg

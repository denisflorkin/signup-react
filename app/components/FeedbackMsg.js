
import React from 'react'


const style = {
  minHeight: '2.2em',
}

export function FeedbackMsg(props) {
  const { error: { message } } = props

  return (
    <div style={style}>
      { message }
    </div>
    )
}
export default FeedbackMsg

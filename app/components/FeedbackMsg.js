
import React from 'react'


export function FeedbackMsg(props) {
  const { error } = props

  return (
    <div>
      { error }
    </div>
    )
}
export default FeedbackMsg


import React, { PropTypes } from 'react'
import { messages } from '../messages'
import { 
  atLeastOneInputIsEmpty,
} from '../utils/formUtils'


const style = {
  minHeight: '3em',
  fontFamily: 'Georgia, serif',
  display: 'flex',
  alignItems: 'center',
  padding: '0px 12px 12px 0'
}

export function FeedbackMsg(props) {
  const { 
    error,
    formError,
    formState,
    signupSucceeded,
    isFetching
  } = props

  let theMessage
  if (isFetching) {
    theMessage = 'Submitting request... 😱'
  } else if (atLeastOneInputIsEmpty(formState)) {
    theMessage = 'Gotta fill it all up '+ formState.name + ' ☝'
  } else {
    theMessage =
      /* first if form validation Error */
      formError ? formError.message +' '+ formState.name + ' ❗' : (
        /** second if error (did async stuff broke?) */
        error ? ( messages[`${error.message}`] || 'An error occured 😓' ) : (
          /** if none of that, did sign up already suceeded ? */
          signupSucceeded ?
            'Successfully registered ✨ '
            /** if no, the form must be good to go */
            : 'Good to go 👌 '
        )
      )

  }

  return (
    <div style={style}>
      { theMessage }
    </div>
    )
}

FeedbackMsg.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.bool.isRequired,
  ]),
  formError: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.bool.isRequired,
  ]),
  formState: PropTypes.object.isRequired,
  signupSucceeded: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired
}
export default FeedbackMsg

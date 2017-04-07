
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { SIGNUP_FORM_ID } from './constants'
import { updateFormState, postForm } from './actions'
import {
  makeSelectError,
  makeSelectFormError,
  makeSelectFormState,
  makeSelectIsFetching,
  makeSelectSignupSucceeded,
} from './selectors'

import { getFormData, validateForm } from '../utils/formUtils'
import Form from '../components/Form'
import Label from '../components/Label'
import Input from '../components/Input'
import FeedbackMsg from '../components/FeedbackMsg'
import SubmitInput from '../components/SubmitInput'


export class SignupForm extends React.PureComponent {

  handleFormSubmit(e) {
    e.preventDefault()
    const theForm = document.forms[SIGNUP_FORM_ID]
    const {
      error,
      onFormSubmit,
      formState,
      formError,
    } = this.props

    if (!formError)
      onFormSubmit(formState)
  }

  handleFormChange() {
    const theForm = document.forms[SIGNUP_FORM_ID]
    this.props.onFormChange(getFormData(theForm))
  }

  render() {
    const {
      props: {
        formState,
        formError,
        error,
        isFetching,
        signupSucceeded,
      },
      handleFormSubmit,
      handleFormChange,
    } = this

    return (
      <Form name={SIGNUP_FORM_ID} onSubmit={handleFormSubmit.bind(this)} >

        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text"
          defaultValue='bill'
          error={formError}
          onChange={handleFormChange.bind(this)} />

        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email"
          defaultValue='bill@ef.er'
          error={formError}
          onChange={handleFormChange.bind(this)} />

        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password"
          defaultValue='a'
          error={formError}
          onChange={handleFormChange.bind(this)} />

        <Label htmlFor="password-confirm">Password confirmation</Label>
        <Input id="passwordConfirm" name="passwordConfirm" type="password"
          // defaultValue='a'
          error={formError}
          onChange={handleFormChange.bind(this)} />

        <FeedbackMsg 
          formError={formError}
          error={error} 
          formState={formState}
          isFetching={isFetching}
          signupSucceeded={signupSucceeded} />

        <SubmitInput
          error={error}
          formError={formError}
          isFetching={isFetching}
          signupSucceeded={signupSucceeded} />

      </Form>
    )
  }
}

SignupForm.propTypes = {
    /** dispatch */
    onFormChange: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    
    /** props */
    error: PropTypes.oneOfType([
      PropTypes.object.isRequired,
      PropTypes.bool.isRequired,
    ]),
    formError: PropTypes.oneOfType([
      PropTypes.object.isRequired,
      PropTypes.bool.isRequired,
    ]),
    formState: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    signupSucceeded: PropTypes.bool.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    onFormChange: (payload) => dispatch(updateFormState(payload)),
    onFormSubmit: (payload) => dispatch(postForm(payload)),
  }
}

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  formError: makeSelectFormError(),
  formState: makeSelectFormState(),
  isFetching: makeSelectIsFetching(),
  signupSucceeded: makeSelectSignupSucceeded(),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)

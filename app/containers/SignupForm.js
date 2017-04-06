
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { SIGNUP_FORM_ID } from './constants'
import { updateFormState, postForm } from './actions'
import { makeSelectFormError, makeSelectFormState } from './selectors'
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
      onFormSubmit,
      formState,
      formError,
    } = this.props

    if (!formError) {
      onFormSubmit(formState)
    }
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
      },
      handleFormSubmit,
      handleFormChange,
    } = this

    return (
      <Form name={SIGNUP_FORM_ID} onSubmit={handleFormSubmit.bind(this)} >

        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" 
          error={formError}
          onChange={handleFormChange.bind(this)} />

        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" 
          error={formError}
          onChange={handleFormChange.bind(this)} />

        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" 
          error={formError}
          onChange={handleFormChange.bind(this)} />

        <Label htmlFor="password-confirm">Password confirmation</Label>
        <Input id="passwordConfirm" name="passwordConfirm" type="password" 
          error={formError}
          onChange={handleFormChange.bind(this)} />

        <FeedbackMsg error={formError} />

        <SubmitInput formIsValid={!formError} />
      </Form>
    )
  }
}

SignupForm.propTypes = {
    onFormChange: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    formError: PropTypes.oneOfType([
      PropTypes.object.isRequired,
      PropTypes.bool.isRequired,
    ]),
    formState: PropTypes.object.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    onFormChange: (payload) => dispatch(updateFormState(payload)),
    onFormSubmit: (payload) => dispatch(postForm(payload)),
  }
}

const mapStateToProps = createStructuredSelector({
  formError: makeSelectFormError(),
  formState: makeSelectFormState(),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)

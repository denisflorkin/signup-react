
import React from 'react'
import { connect } from 'react-redux'

import {
  updateFormState,
  postForm,
} from './actions'
import { SIGNUP_FORM_ID } from './constants'

import { getFormData } from '../utils/getFormData'

import Form from '../components/Form'
import Input from '../components/Input'
import FeedBackMsg from '../components/FeedBackMsg'
import SubmitInput from '../components/SubmitInput'


export class SignupForm extends React.PureComponent {
  handleFormSubmit(e) {
    e.preventDefault()
    const theForm = document.forms[SIGNUP_FORM_ID]
    console.log(getFormData(theForm))
  }

  handleFormChange(e) {
    const theForm = document.forms[SIGNUP_FORM_ID]
    const { onFormChange } = this.props
    onFormChange(getFormData(theForm))
    console.log(getFormData(theForm))
  }

  render() {
    const {
      props,

      handleFormSubmit,
      handleFormChange,
    } = this

    return (
      <Form name={SIGNUP_FORM_ID} onSubmit={handleFormSubmit.bind(this)} >

        <label htmlFor="name">Name</label>
        <Input id="name" name="name" type="text"
          onChange={handleFormChange.bind(this)} />

        <label htmlFor="email">Email</label>
        <Input id="email" name="email" type="email"
          onChange={handleFormChange.bind(this)} />

        <label htmlFor="password">Password</label>
        <Input id="password" name="password" type="password"
          onChange={handleFormChange.bind(this)} />

        <label htmlFor="password-confirm">Password confirmation</label>
        <Input id="password-confirm" name="password-confirm" type="password"
          onChange={handleFormChange.bind(this)} />

        <FeedBackMsg />
        <SubmitInput />
      </Form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFormChange: (payload) => dispatch(updateFormState(payload)),
    onPostForm: (payload) => dispatch(postForm(payload)),
  }
}


// export default SignupForm
export default connect(null, mapDispatchToProps)(SignupForm)
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])


import React from 'react'
import { connect } from 'react-redux'

import { SIGNUP_FORM_ID } from './constants'

import Input from '../components/Input'
import FeedBackMsg from '../components/FeedBackMsg'


export function SignupForm(props) {
  const { stuff } = props

  return (
    <form name={SIGNUP_FORM_ID} >

      <label htmlFor="name">Name</label>
      <Input id="name" name="name" type="text" />

      <label htmlFor="email">Email</label>
      <Input id="email" name="email" type="email" />

      <label htmlFor="password">Password</label>
      <Input id="password" name="password" type="password" />

      <label htmlFor="password-confirm">Password confirmation</label>
      <Input id="password-confirm"
        name="password-confirm" type="password" />

      <FeedBackMsg />
      <Input type='submit' value="Send"/>
    </form>
  )
}

export default SignupForm

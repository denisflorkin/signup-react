
import {
  UPDATE_FORM_STATE,
  CLEAR_FORM_ERROR,
  VALIDATE_FORM,

  POST_FORM,
  POST_FORM_SUCCEEDED,
  POST_FORM_FAILED,
} from './actions'

import { validateForm } from '../utils/formUtils'

const initialState = {
  formState: {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  },
  formError: true,
  error: false,
  isFetching: false,
  signupSuccess: false,
}

export default function signupReducer(state = initialState, action) {
  switch (action.type) {
      case UPDATE_FORM_STATE:

        const formError = validateForm(action.newFormState)
        console.log('formError', formError)
        return {
            ...state,
            formState: action.newFormState,
            formError,
          }

      case POST_FORM:
        return Object.assign({}, state, {
          isFetching: true,
        })

      case POST_FORM_SUCCEEDED:
        return Object.assign({}, state, {
          isFetching: false,
          signupSuccess: true,
        })

      case POST_FORM_FAILED:
        return Object.assign({}, state, {
          isFetching: false,
          error: action.error,
        })

      case CLEAR_FORM_ERROR:
        return Object.assign({}, state, {
          formError: false,
        })

      case VALIDATE_FORM:
        return Object.assign({}, state, {
          formError: false,
        })

      default:
        return state
    }
}

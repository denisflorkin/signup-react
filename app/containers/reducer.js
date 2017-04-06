
import {
  CLEAR_ERROR,
  CLEAR_FORM_ERROR,
  UPDATE_FORM_STATE,
  VALIDATE_FORM,
  SET_IS_FETCHING,

  POST_FORM,
  POST_FORM_SUCCEEDED,
  POST_FORM_FAILED,
} from './actions'

import { initialFormState } from './constants'
import { validateForm } from '../utils/formUtils'


const initialState = {
  ...initialFormState,
  formError: true,
  error: false,
  isFetching: false,
  signupSucceeded: false,
}

export default function signupReducer(state = initialState, action) {
  switch (action.type) {
      case UPDATE_FORM_STATE:
        const formError = validateForm(action.newFormState)
        return {
            ...state,
            formState: action.newFormState,
            formError,
          }

      /** handled by the thunk */
      // case POST_FORM:
      //   return Object.assign({}, state, {
      //     isFetching: true,
      //   })

      case SET_IS_FETCHING:
        return { 
          ...state,
          isFetching: true
        }

      case CLEAR_ERROR:
        return { 
          ...state, 
          error: false
        }

      case POST_FORM_SUCCEEDED:
        return { 
          ...state,
          isFetching: false,
          signupSucceeded: true,
          error: false,
          formError: false,
        }

      case POST_FORM_FAILED:
        return {
          ...state,
          isFetching: false,
          error: action.error,
        }

      case VALIDATE_FORM:
        return {
          ...state,
          formError: false,
        }

      default:
        return state
    }
}

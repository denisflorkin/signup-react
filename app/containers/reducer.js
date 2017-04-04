
import {
  UPDATE_FORM_STATE,
  CLEAR_FORM_ERROR,

  POST_FORM,
  POST_FORM_SUCCEEDED,
  POST_FORM_FAILED,
} from './actions'


const initialState = {
  formState: false,
  formError: false,
  error: false,
  isFetching: false,
  signupSuccess: false,
}

export default function signupReducer(state = initialState, action) {
  switch (action.type) {
      case UPDATE_FORM_STATE:
        // do form validation here or in component ?
        return Object.assign({}, state, {
          formState: action.newFormState,
        })

      case POST_FORM:
        return Object.assign({}, state, {
          isFetching: true,
        })

      case POST_FORM_SUCCEEDED:
        return Object.assign({}, state, {
          isFetching: false,
          signupSuccess: true, // presumably
        })

      case POST_FORM_FAILED:
        return Object.assign({}, state, {
          isFetching: false,
          error: action,
        })

      case CLEAR_FORM_ERROR:
        return Object.assign({}, state, {
          formError: false,
        })

      default:
        return state
    }
}

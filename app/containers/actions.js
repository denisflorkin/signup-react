
import { postFormThunk } from './thunks'


/**
 * actions
 */
export const UPDATE_FORM_STATE = 'app/signup/UPDATE_FORM_STATE'
export const CLEAR_FORM_ERROR = 'app/signup/CLEAR_FORM_ERROR'
export const CLEAR_ERROR = 'app/signup/CLEAR_ERROR'
export const VALIDATE_FORM = 'app/signup/VALIDATE_FORM'

export const SET_IS_FETCHING = 'app/signup/SET_IS_FETCHING'
export const POST_FORM = 'app/signup/POST_FORM'
export const POST_FORM_SUCCEEDED = 'app/signup/POST_FORM_SUCCEEDED'
export const POST_FORM_FAILED = 'app/signup/POST_FORM_FAILED'


/**
 * sync actions creators
 */
export function updateFormState(newFormState) {
  return {
    type: UPDATE_FORM_STATE,
    newFormState,
  }
}

export function postFormSuccess(formData) {
  return {
    type: POST_FORM_SUCCEEDED,
    formData,
  }
}

export function postFormFail(error) {
  return {
    type: POST_FORM_FAILED,
    error,
  }
}

export function clearFormError() {
  return {
    type: CLEAR_FORM_ERROR,
  }
}

export function clearError() {
  return {
    type: CLEAR_ERROR,
  }
}

export function validateForm(formData) {
  return {
    type: VALIDATE_FORM,
    formData,
  }
}
export function setIsFetchingToTrue() {
  return {
    type: SET_IS_FETCHING
  }
}


/**
 * async actions creators
 */
export const postForm = postFormThunk

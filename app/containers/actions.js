
/**
 * actions
 */
export const ADD_ONE = 'app/signup/ADD_ONE'
export const UPDATE_FORM_STATE = 'app/signup/UPDATE_FORM_STATE'
export const CLEAR_FORM_ERROR = 'app/signup/CLEAR_FORM_ERROR'
export const VALIDATE_FORM = 'app/signup/VALIDATE_FORM'

export const POST_FORM = 'app/signup/POST_FORM'
export const POST_FORM_SUCCEEDED = 'app/signup/POST_FORM_SUCCEEDED'
export const POST_FORM_FAILED = 'app/signup/POST_FORM_FAILED'


/**
 * actions creators
 */
export function updateFormState(newFormState) {
  return {
    type: UPDATE_FORM_STATE,
    newFormState,
  }
}

export function postForm(formData) {
  return {
    type: POST_FORM,
    formData,
  }
}

export function postFormSuccess(formData) {
  return {
    type: POST_FORM_SUCCEEDED,
    formData,
  }
}

export function postFormFail(formData) {
  return {
    type: POST_FORM_FAILED,
    formData,
  }
}

export function clearFormError() {
  return {
    type: CLEAR_FORM_ERROR,
  }
}

export function validateForm(formData) {
  return {
    type: VALIDATE_FORM,
    formData,
  }
}

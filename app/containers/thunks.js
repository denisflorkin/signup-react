
import 'whatwg-fetch'

import request from '../utils/request'
import {
  postFormFail,
  postFormSuccess,
} from './actions'


// export const postFormThunk = (dispatch) => {
export const postFormThunk = (formData) => (dispatch) => {
  const reqOpts = {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(formData),
    mode: 'CORS',
  }

  return request('http://localhost:5000', reqOpts)
    .then(res => dispatch(postFormSuccess(res)))
    .catch(err => dispatch(postFormFail(err)))
}

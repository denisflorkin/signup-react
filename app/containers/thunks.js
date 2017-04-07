
import 'whatwg-fetch'

import request from '../utils/request'
import {
  postFormFail,
  postFormSuccess,
  setIsFetchingToTrue,
} from './actions'


export const getPostFormThunkReqOpts =(formData) => ({
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(formData),
    // mode: 'CORS',
  })

export const postFormThunk = (formData) => (dispatch) => {
  
  // first syncronously set `isFetching` to true
  dispatch(setIsFetchingToTrue())
  
  const opts = getPostFormThunkReqOpts(formData)

  return request('/signup', opts) 
  // return request('http://localhost/unexistingURLForErrHandlingTestPurp', opts)
    .then(res => {
      if (res.message === 'signup success') {
        dispatch(postFormSuccess(res))
      } else {
        dispatch(postFormFail({ message: res.message }))
      }
    })
    .catch(err => {
      dispatch(postFormFail({ message: err.toString() }))
    })
}

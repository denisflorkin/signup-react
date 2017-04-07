
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
  })

export const postFormThunk = (formData) => (dispatch) => {
  
  // first set `isFetching` to true
  dispatch(setIsFetchingToTrue())
  
  const opts = getPostFormThunkReqOpts(formData)

  return request('/signup', opts) 
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

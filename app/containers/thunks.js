
import 'whatwg-fetch'

import request from '../utils/request'
import {
  postFormFail,
  postFormSuccess,
} from './actions'


export const postFormThunk = (dispatch) => {
  console.log('dispatch', dispatch)
  return request('https:localhost:5000')
    .then(res => dispatch(postFormSuccess(res)))
    .catch(err => dispatch(postFormFail(err)))
}

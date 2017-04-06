
import { createSelector } from 'reselect'


const selectGlobaDomain = () => (state) => state

const makeSelectError = () => {
  return createSelector(
    selectGlobaDomain(),
    (substate) => substate.error
  )
}

const makeSelectFormError = () => {
  return createSelector(
    selectGlobaDomain(),
    (substate) => substate.formError
  )
}
const makeSelectFormState = () => {
  return createSelector(
    selectGlobaDomain(),
    (substate) => substate.formState
  )
}
const makeSelectIsFetching = () => {
  return createSelector(
    selectGlobaDomain(),
    (substate) => substate.isFetching
  )
}
const makeSelectSignupSucceeded = () => {
  return createSelector(
    selectGlobaDomain(),
    (substate) => substate.signupSucceeded
  )
}



export default selectGlobaDomain
export {
  makeSelectError,
  makeSelectFormError,
  makeSelectFormState,
  makeSelectIsFetching,
  makeSelectSignupSucceeded,
}
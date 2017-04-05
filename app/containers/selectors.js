
import { createSelector } from 'reselect'


const selectGlobaDomain = () => (state) => state

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

export default selectGlobaDomain
export {
  makeSelectFormError,
  makeSelectFormState,
}
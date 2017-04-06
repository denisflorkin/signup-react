
export const isHTMLFormElement = (elem) =>
  !!Object.prototype.toString.call(elem).match(/\[object HTMLFormElement\]/)

/**
 * @param {HTMLFormElement} HTMLFormElement
 * give it a HTMLFormElement, it'll give you back
 * a nice key:value object with your form fieldName:value
*/
export const getFormData = (HTMLFormElement) => {
  if (!HTMLFormElement && !isHTMLFormElement(HTMLFormElement)) {
    return console.warn(
      'you must provide a valid form element reference. This is not valid :',
      HTMLFormElement,
      'Also do not forget to give names to your form and inputs')
  }

  const { elements } = HTMLFormElement
  let forRes = {}
  for (let i = 0; i < elements.length; i++) {
    let theName
    let theValue

    theName = elements[i].name
    theValue = elements[i].value

    if (theValue && theName !== '') {  // ignore numerical HTMLCollectionFromControl key
      forRes[theName] = theValue
    }
  }
  return forRes
}


/**
 * Function validateForm
 * @param {object} formData
 * @returns {object|bool} error
 * return false for no errors OR an error object
 * with a message property
 */
export function validateForm(formData) {
  const emailRegExp =
    RegExp(/(([^@]\.[^@])+)?[^@]+@\w+\.\w+((\.\w+)+)?/)
    
  const error = true

  /** if all the fields are filed in */
  if (formData.name && formData.name.length > 0 &&
      formData.email && formData.email.length > 0 && 
      formData.password && formData.password.length > 0 &&
      formData.passwordConfirm && formData.passwordConfirm.length > 0) {
  
    /** if the email is not valid */
    if (!formData.email.match(emailRegExp)) {
      return { message: 'You have to provide a valid email' }
    }

    /** if the password does not match passwordConfirm */
    if (formData.password !== formData.passwordConfirm) {
      return { message: 'Your password confirmation does not match' }
    }

    /**
     * Some more validation
     * for awesomely rich user feedback
     */

    return false // no errors
  }

  return error 
}
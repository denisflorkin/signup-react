/**
  * getFormData
  * give it a HTMLFormElement, it'll give you back
  * a nice key:value object with your form fieldName:value
  */
export const isHTMLFormElement = (elem) =>
  !!Object.prototype.toString.call(elem).match(/\[object HTMLFormElement\]/) // eslint-disable-line no-useless-escape

// export const isHTMLSelectElement = (elem) =>
//   !!Object.prototype.toString.call(elem).match(/\[object HTMLSelectElement\]/)  // eslint-disable-line no-useless-escape

export const getFormData = (HTMLFormElement) => {
  if (!HTMLFormElement && !isHTMLFormElement(HTMLFormElement)) {
    return console.warn(  // eslint-disable-line no-console
      'you must provide a valid form element reference! this is not valid :',
      HTMLFormElement,
      'Also do not forget to give names to your form and inputs')
  }

  const { elements } = HTMLFormElement
  let forRes = {} // eslint-disable-line prefer-const
  for (let i = 0; i < elements.length; i++) { // eslint-disable-line no-plusplus
    let theName
    let theValue
    /*
    if (isHTMLSelectElement(elements[i])) {  // check `selected` options
      const select = elements[i]
      const { options } = select
      const selectedOptions = [] // the required task
      let j = 0
      while (j < select.length - 1) { // go throught options:
        if (options[j].selected) {
          selectedOptions.push(options[j].value)
        }
        j += 1
      }
      theName = select.name
      theValue = selectedOptions
    } else {
      */
      theName = elements[i].name
      theValue = elements[i].value
    /* } */

    if (theValue && theName !== '') {  // ignore numerical HTMLCollectionFromControl key
      forRes[theName] = theValue
    }
  }
  return forRes
}
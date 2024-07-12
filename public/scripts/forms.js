import {validate, checkLength} from './validation.js'

const loginInputs = document.querySelectorAll('[data-type]')

loginInputs.forEach(input => {
  // check if input is price type and, if so, import Simple Mask Money according to its documentation
  if (input.dataset.type === 'price') {
    SimpleMaskMoney.setMask(input, {
      
      prefix: 'R$ ',
      fixed: true,
      fractionDigits: 2,
      decimalSeparator: ',',
      thousandsSeparator: '.',
      cursor: 'move'
    })
  }

  input.addEventListener('blur', event => {
    validate(event.target)
  })
})

const contactInputs = document.querySelectorAll('[data-type="contact"]')

contactInputs.forEach(input => {
  input.addEventListener('keyup', event => {
    checkLength(event.target)
  })
})

contactInputs.forEach(input => {
  input.addEventListener('blur', event => {
    validate(event.target)
  })
})

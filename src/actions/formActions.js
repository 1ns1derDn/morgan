export const handleChange = (e) => ({
  type: 'HANDLE_CHANGE',
  payload: e
})

export const handleFocus = (e) => ({
  type: 'HANDLE_FOCUS',
  payload: e
})

export const handleBlur = (e) => ({
  type: 'HANDLE_BLUR',
  payload: e
})

export const checkPassword = (e) => ({
  type: 'CHECK_PASSWORD',
  payload: e
})

export const isValidate = (target) => ({
  type: 'IS_VALIDATE',
  payload: target
})

export const clearFrom = (target) => ({
  type: 'CLEAR_FORM'
})

export const handleSubmitLogin = (dispatch) => (user) => (e) => {
  e.preventDefault()
  const { password, email } = user
  if (password.isValidate && email.isValidate) {
    alert('Send from!')
    dispatch(clearFrom())
  }
}


export const handleSubmitResetPassword  = (dispatch) => (user) => (e) => {
  e.preventDefault()
  const { email } = user
  if (email.isValidate) {
    alert('Send from!')
    dispatch(clearFrom())
  }
}


export const handleSubmitRegistration  = (dispatch) => (user) => (e) => {
  e.preventDefault()
  const { email, userFullName, password } = user
  if (email.isValidate && userFullName.isValidate && password.isValidate ) {
    alert('Send from!')
    dispatch(clearFrom())
  }
}





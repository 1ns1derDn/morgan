
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

export const isValidate = (target) => ({
  type: 'IS_VALIDATE',
  payload: target
})
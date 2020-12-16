const initialState = {
  email: {
    type: 'email',
    name: 'email',
    value: '',
    errorMessage: '',
    isValidate: true,
    touched: false,
  },
  password: {
    name: 'password',
    type: 'password',
    value: '',
    errorMessage: '',
    isValidate: true,
    touched: false,
  },
  userFullName: {
    type: 'text',
    name: 'userFullName',
    value: '',
    errorMessage: '',
    isValidate: true,
    touched: false,
  }
}

const setStateValidate = (state, name, isValidate, errorMessage) => {
  return {
    ...state,
    [name]: {
      ...state[name],
      isValidate,
      errorMessage
    }
  }
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'CHECK_PASSWORD':
      return {
        ...state,
        password: { ...state.password, type: state.password.type === 'password' ? 'text' : 'password' }
      }

    case 'HANDLE_CHANGE': {
      const target = action.payload.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;

      return {
        ...state,
        [name]: { ...state[name], value: value }
      }
    }

    case 'HANDLE_FOCUS': {
      const target = action.payload.target;
      return {
        ...state,
        [target.name]: { ...state[target.name], isValidate: true }
      }
    }

    case 'HANDLE_BLUR': {
      const target = action.payload.target
      return {
        ...state,
        [target.name]: { ...state[target.name], touched: true }
      }
    }

    case 'IS_VALIDATE': {
      const { payload: target } = action
      const { name, value } = target
      const regExpFullUserName = /^[A-Z][a-z]*\s[A-Z][a-z]*$/
      const regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      switch (name) {
        case 'email':
          if (!regExpEmail.test(value) && value !== '') {
            return setStateValidate(state, name, false, 'Please make sure your email format is correct')
          } else {
            return setStateValidate(state, name, true, '')
          }
        case 'userFullName':
          if (!regExpFullUserName.test(value) && value !== '') {
            return setStateValidate(state, name, false, 'Please enter your full name')
          } else {
            return setStateValidate(state, name, true, '')
          }
        case 'password':
          if (value.length < 6 && value !== '') {
            return setStateValidate(state, name, false, 'Please enter min 6 char')
          } else {
            return setStateValidate(state, name, true, '')
          }
        default:
          return state
      }
    }

    case 'CLEAR_FORM':
      return initialState

    default:
      return state
  }
}

export default formReducer
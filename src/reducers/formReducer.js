const initialState = {
  email: {
    value: '',
    errorMessage: '',
    isValidate: true,
    touched: false
  },
  password: {
    type: 'password',
    value: '',
    errorMessage: '',
    isValidate: true,
    touched: false
  }
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {

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
      const { name } = target

      if (name === 'email') {
        return {
          ...state,
          [target.name]: {
            ...state[target.name],
            isValidate: false,
            errorMessage: "Введите номер купона"
          }
        }
      }
      return state
    }

    default:
      return state
  }
}

export default formReducer
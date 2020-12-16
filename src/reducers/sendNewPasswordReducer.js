const initialState = {
  email: '',
  visible: false
}

const sendNewPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      console.log(action.payload);
      return {
        ...state,
        email: action.payload
      }

    case 'OPEN_VISIBLE_SEND_PASSWORD':
      return {
        ...state,
        visible: true
      }

    case 'ClOSE_VISIBLE_SEND_PASSWORD':
      return {
        ...state,
        visible: false
      }

    case 'CLEAR_NEW_PASSWORD':
      return initialState

    default:
      return state
  }
}

export default sendNewPasswordReducer
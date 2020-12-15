const initialState = {
  visibleMenu: false
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_OPEN_MENU':
      return {
        visibleMenu: !state.visibleMenu
      }
    case 'CLOSE_MENU': 
      return {
        visibleMenu: false
      }
    default:
      return state
  }
}

export default menuReducer
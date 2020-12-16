const initialState = {
  arrowDown: true,
  arrowUp: false
}

const arrowReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_ARROWS_OPPOSITE':
      return {
        arrowDown: !state.arrowDown,
        arrowUp: !state.arrowUp
      }

    default:
      return state
  }
}

export default arrowReducer
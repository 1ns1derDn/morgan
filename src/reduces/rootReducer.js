const initialState = {
  counter: 0
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'HELLO_WORLD': 
      console.log('Hello world!')
      break
    default: 
      return state 
  }
}

export default rootReducer
const initialState = {
  selectItems: [
    { value: 'Price hight to low', id: 1, selected: false },
    { value: 'Price low to hight', id: 2, selected: false },
    { value: 'Newness', id: 3, selected: true }
  ],
  isOpen: false,
  value: 'Newness'
}


const findSeletedItem = (arr, id, propName) => {
  return arr.map((item) => {
    if (item.id === id) {
      return { ...item, [propName]: true }
    }
    return { ...item, [propName]: false }
  })
}

const sortSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_TOGGLE_OPNE':
      return {
        ...state,
        isOpen: !state.isOpen
      }

    case 'HANDLE_SELECTED':
      return {
        selectItems: findSeletedItem(state.selectItems, action.payload.id, 'selected'),
        value: action.payload.value,
        isOpen: !state.isOpen
      }
    
    default:
      return state
  }
}

export default sortSelectReducer
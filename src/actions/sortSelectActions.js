export const handleToggleOpen = () => ({
  type: 'HANDLE_TOGGLE_OPNE'
})

export const handleSelected = (value, id) => ({
  type: 'HANDLE_SELECTED',
  payload: {
    value,
    id
  }
})
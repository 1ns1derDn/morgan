import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  handleBlur,
  handleChange,
  handleFocus,
  isValidate,
  checkPassword,
  handleSubmitRegistration
} from '../../actions/formActions'
import Registration from '../Page/Registration/Registration'

const ContainerRegistration = () => {
  const dispatch = useDispatch()

  const form = useSelector((state) => state.form)

  const mapDispatchToProps = (dispatch) => ({
    handleChange: (e) => dispatch(handleChange(e)),
    handleFocus: (e) => dispatch(handleFocus(e)),
    handleCheckPassword: (e) => dispatch(checkPassword(e)),
    handleBlur: (e) => {
      dispatch(isValidate(e.target))
      dispatch(handleBlur(e))
    },
    handleSubmit: handleSubmitRegistration(dispatch)(form)
  })

  return <Registration {...mapDispatchToProps(dispatch)} {...form} />
}

export default ContainerRegistration
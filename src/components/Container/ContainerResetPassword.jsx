import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  handleBlur,
  handleChange,
  handleFocus,
  isValidate,
  checkPassword,
  handleSubmitResetPassword
} from '../../actions/formActions'
import ResetPassword from '../Page/ResetPassword/ResetPassword'

const ContainerResetPassword = () => {
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
    handleSubmit: handleSubmitResetPassword(dispatch)(form)
  })

  return <ResetPassword {...mapDispatchToProps(dispatch)} {...form} />
}

export default ContainerResetPassword

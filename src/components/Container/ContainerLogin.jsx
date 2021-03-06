import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  handleBlur,
  handleChange,
  handleFocus,
  isValidate,
  checkPassword,
  handleSubmitLogin
} from '../../actions/formActions'
import Login from '../Page/Login/Login'

const ContainerLogin = () => {
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
    handleSubmit: handleSubmitLogin(dispatch)(form)
  })

  return <Login {...form} {...mapDispatchToProps(dispatch)} />
}

export default ContainerLogin
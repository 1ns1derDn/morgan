import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleBlur, handleChange, handleFocus, isValidate } from '../../actions/formActions'
import Login from '../Page/Login/Login'

const ContainerLogin = () => {

  const dispatch = useDispatch()
  const mapStateToProps = useSelector((state) => state.form)
  const mapDispatchToProps = (dispatch) => ({
    handleChange: (e) => dispatch(handleChange(e)),
    handleFocus: (e) => dispatch(handleFocus(e)),
    handleBlur: (e) => {
      dispatch(isValidate(e.target))
      dispatch(handleBlur(e))
    },
  })
  return <Login {...mapStateToProps} {...mapDispatchToProps(dispatch)} />
}

export default ContainerLogin
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
import { setEmial, openVisibleSendPassword } from '../../actions/sendNewPasswordActions'
import ResetPassword from '../Page/ResetPassword/ResetPassword'
import LinkSend from '../UI/LinkSend/LinkSend'

const ContainerResetPassword = () => {
  const dispatch = useDispatch()

  const form = useSelector((state) => state.form)
  const email = useSelector((state) => state.sendPassword.email)
  const sendLinkVisible = useSelector((state) => state.sendPassword.visible)

  const mapDispatchToProps = (dispatch) => ({
    handleChange: (e) => dispatch(handleChange(e)),
    handleFocus: (e) => dispatch(handleFocus(e)),
    handleCheckPassword: (e) => dispatch(checkPassword(e)),

    handleBlur: (e) => {
      dispatch(isValidate(e.target))
      dispatch(handleBlur(e))
    },
    handleSubmit: handleSubmitResetPassword(dispatch, setEmial, openVisibleSendPassword)(form)
  })

  if(sendLinkVisible) {
    return <LinkSend email={email} />
  }

  return <ResetPassword {...mapDispatchToProps(dispatch)} {...form} />
}

export default ContainerResetPassword

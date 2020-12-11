import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../UI/Title/Title'
import ContainerInput from '../../UI/Input/ContainerInput'
import ButtonBlack from '../../UI/ButtonBlack/ButtonBlack'
import LinkSend from '../../UI/LinkSend/LinkSend'
import RowContainer from '../../helpers/RowContainer/RowContainer'

import './ResetPassword.scss'

const ResetPassword = () => (
  <section className='ResetPassword'>
    <div className='Container'>
      <div className='ResetPassword-Inner'>
        <form className='ContainerForm'>
          <Title classes='ResetPassword-Title' title='RESET YOUR PASSWORD' />
          <div className='ResetPassword-Text'>
            <p >
              Enter the email address for your Morgan account and we’ll send a single-use password reset link.
            </p>
            <p>
              This link will expire after 24 hours.
            </p>
          </div>
          <ContainerInput
            title='Email'
            clazz='Input_ErrorMessage ResetPassword-Input'
            placeholder='Enter your email'
            type="email"
            required
            touched
            validate
          />
          <ButtonBlack clazz='ResetPassword-Button' title='SEND A PASSWORD RESET LINK' />
          <RowContainer
            classes='ResetPassword-RowContainer'
            right={<Link to='/login' className='Link Link_underline'>Back to login</Link>}
          />
        </form>
      </div>
    </div>
  </section>
)

const ContainerResetPassword = () => {

  if (true) {
    return <LinkSend email='yourmail398@gmail.com' />
  }

  return <ResetPassword />

}

export default ContainerResetPassword

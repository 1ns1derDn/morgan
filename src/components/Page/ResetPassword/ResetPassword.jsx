import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../UI/Title/Title'
import Input from '../../UI/Input/Input'
import ButtonBlack from '../../UI/ButtonBlack/ButtonBlack'
import RowContainer from '../../helpers/RowContainer/RowContainer'

import './ResetPassword.scss'

const ResetPassword = (props) => (
  <section className='ResetPassword'>
    <div className='Container'>
      <div className='ResetPassword-Inner'>
        <form className='ContainerForm' onSubmit={props.handleSubmit}>
          <Title clazz='ResetPassword-Title' title='RESET YOUR PASSWORD' />
          <div className='ResetPassword-Text'>
            <p >
              Enter the email address for your Morgan account and we’ll send a single-use password reset link.
            </p>
            <p>
              This link will expire after 24 hours.
            </p>
          </div>
          <Input
            title='Email'
            value={props.email.value}
            handleBlur={props.handleBlur}
            handleFocus={props.handleFocus}
            handleChenge={props.handleChange}
            placeholder='Enter your email'
            type={props.email.type}
            name={props.email.name}
            required={true}
            validate={props.email.isValidate}
            errorMessage={props.email.errorMessage}
            touched={props.email.touched}
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

export default ResetPassword

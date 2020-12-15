import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../UI/Input/Input'
import ButtonBlack from '../../UI/ButtonBlack/ButtonBlack'
import WithSocial from '../../UI/WithSocial/WithSocial'
import Title from '../../UI/Title/Title'
import RowContainer from '../../helpers/RowContainer/RowContainer'

import icEye from './icon/ic-eye.svg'

import './Login.scss'

const Login = (props) => (
  <section className='Login'>
    <form className='Login-Form'>
      <Title clazz='Login-Title' title='LOGIN' />
      <Input
        title='Email'
        value={props.email.value}
        handleBlur={props.handleBlur}
        handleFocus={props.handleFocus}
        handleChenge={props.handleChange}
        placeholder='Enter your email'
        id='email'
        type={props.email.type}
        name='email'
        required={true}
        validate={props.email.isValidate}
        errorMessage={props.email.errorMessage}
        touched={props.email.touched}
      />
      <Input
        title='Password'
        clazz='Input_ErrorMessage'
        placeholder='Enter your password'
        type='password'
        required
        touched
        validate
        renderLink={() => (
          <Link to='/reset-password' className='Input-Link'>Forgotten your password?</Link>
        )}
        renderButton={() => (
          <button className='Input-Button'>
            <img src={icEye} alt='eye' />
          </button>
        )}
      />
      <ButtonBlack clazz='Login-Button' title='log in' />
      <RowContainer
        classes='Login-RowContainer'
        left={<Link to='/' className='Link'>Don't have an account?</Link>}
        right={<Link to='/registration' className='Link Link_underline'>Create an account</Link>}
      />
      <WithSocial />
    </form>
  </section>
)

export default Login
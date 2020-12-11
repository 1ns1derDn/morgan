import React from 'react'
import { Link } from 'react-router-dom'
import ContainerInput from '../../UI/Input/ContainerInput'
import ButtonBlack from '../../UI/ButtonBlack/ButtonBlack'
import WithSocial from '../../UI/WithSocial/WithSocial'
import Title from '../../UI/Title/Title'
import RowContainer from '../../helpers/RowContainer/RowContainer'

import icEye from './icon/ic-eye.svg'

import './Login.scss'

const Login = () => (
  <section className='Login'>
    <form className='Login-Form'>
      <Title classes='Login-Title' title='LOGIN' />
      <ContainerInput
        title='Email'
        clazz='Input_ErrorMessage'
        placeholder='Enter your email'
        type="email"
        required
        touched
        validate
      />
      <ContainerInput
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
        right={<Link to='/create-account' className='Link Link_underline'>Create an account</Link>}
      />
      <WithSocial />
    </form>
  </section>
)

export default Login
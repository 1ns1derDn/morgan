import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../UI/Input/Input'
import ButtonBlack from '../../UI/ButtonBlack/ButtonBlack'
import WithSocial from '../../UI/WithSocial/WithSocial'
import Title from '../../UI/Title/Title'
import RowContainer from '../../helpers/RowContainer/RowContainer'

import eyeHidden from './icon/eyeHidden.svg'
import eyeVisible from './icon/eyeVisible.svg'

import './Login.scss'

const Login = (props) => {

  const {
    handleBlur,
    handleFocus,
    handleChange,
    handleCheckPassword,
    handleSubmit,
    email,
    password,
  } = props


  return (
    <section className='Login'>
      <div className='Container'>
        <div className='Login-Inner'>
          <form className='Login-Form' onSubmit={(e) => handleSubmit(e)}>
            <Title clazz='Login-Title' title='LOGIN' />
            <Input
              title='Email'
              value={email.value}
              handleBlur={handleBlur}
              handleFocus={handleFocus}
              handleChenge={handleChange}
              placeholder='Enter your email'
              type={email.type}
              name={email.name}
              required={true}
              validate={email.isValidate}
              errorMessage={email.errorMessage}
              touched={email.touched}
            />
            <Input
              clazz='Login-InputPassword'
              title='Password'
              placeholder='Enter your password'
              type={password.type}
              required
              name={password.name}
              value={password.value}
              handleBlur={handleBlur}
              handleFocus={handleFocus}
              handleChenge={handleChange}
              validate={password.isValidate}
              errorMessage={password.errorMessage}
              touched={password.touched}
              renderLink={() => (
                <Link to='/reset-password' className='Input-Link'>Forgotten your password?</Link>
              )}
              renderButton={() => (
                <span
                  className='Input-Button'
                  onMouseDown={handleCheckPassword}
                  onMouseUp={handleCheckPassword}>
                  <img src={password.type === 'password' ? eyeHidden : eyeVisible} alt='eye' />
                </span>
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
        </div>
      </div>
    </section>
  )
}



export default Login
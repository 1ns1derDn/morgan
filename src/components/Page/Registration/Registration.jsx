import React from 'react'
import { Link } from 'react-router-dom'

import Title from '../../UI/Title/Title'
import Input from '../../UI/Input/Input'
import ButtonBlack from '../../UI/ButtonBlack/ButtonBlack'
import WithSocial from '../../UI/WithSocial/WithSocial'

import RowContainer from '../../helpers/RowContainer/RowContainer'

import './Registration.scss'

const Registration = (props) => {

  const {
    handleBlur,
    handleFocus,
    handleChange,
    handleSubmit,
    email,
    userFullName,
    password,
  } = props

  return (
    <section className='CreateAccount'>
      <div className='Container'>
        <div className='CreateAccount-Inner'>
          <form className='ContainerForm' onSubmit={(e) => handleSubmit(e)}>
            <Title clazz='CreateAccount-Title' title='CREATE AN ACCOUNT' />
            <Input
              title='Full name'
              value={userFullName.value}
              handleBlur={handleBlur}
              handleFocus={handleFocus}
              handleChenge={handleChange}
              placeholder='Enter your email'
              type={userFullName.type}
              name={userFullName.name}
              required={true}
              validate={userFullName.isValidate}
              errorMessage={userFullName.errorMessage}
              touched={userFullName.touched}
            />
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
              title='Password (min 6 char)'
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
              touched={password.touched} />
            <div className='CreateAccount-Text'>
              <p>
                By creating an account you agree to the website terms and conditions and our privacy notice.
              </p>
            </div>
            <ButtonBlack clazz='CreateAccount-Button' title='CREATE AN ACCOUNT' />
            <RowContainer
              classes='CreateAccount-RowContainer'
              left={<Link to='/' className='Link'>Have an account?</Link>}
              right={<Link to='/login' className='Link Link_underline'>Login</Link>}
            />
            <WithSocial />
          </form>
        </div>
      </div>
    </section>
  )
}
export default Registration
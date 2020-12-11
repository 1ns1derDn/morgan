import React from 'react'
import { Link } from 'react-router-dom'

import Title from '../../UI/Title/Title'
import ContainerInput from '../../UI/Input/ContainerInput'
import ButtonBlack from '../../UI/ButtonBlack/ButtonBlack'
import WithSocial from '../../UI/WithSocial/WithSocial'

import RowContainer from '../../helpers/RowContainer/RowContainer'

import './CreateAccount.scss'

const CreateAccount = () => (
  <section className='CreateAccount'>
    <div className='Container'>
      <div className='CreateAccount-Inner'>
        <form className='ContainerForm'>
          <Title classes='CreateAccount-Title' title='CREATE AN ACCOUNT' />
          <ContainerInput
            title='Full name'
            clazz='Input_ErrorMessage'
            placeholder='Enter your First and Last name'
            type="text"
            required
            touched
            validate
          />
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
            title='Password (min 6 char)'
            clazz='Input_ErrorMessage'
            placeholder='Enter your password'
            type="password"
            required
            touched
            validate
          />
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

export default CreateAccount
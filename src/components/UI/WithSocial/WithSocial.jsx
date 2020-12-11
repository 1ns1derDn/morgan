import React from 'react'
import ButtonWhile from '../../UI/ButtonWhite/ButtonWhite'

import icGoogle from './icon/ic-google.svg'
import icFacebook from './icon/ic-facebook.svg'

import './WithSocial.scss'

const WithSocial = () => (
  <div className='WithSocial'>
    <div className='WithSocial-Line'>
      <span>or</span>
    </div>
    <div className='WithSocial-Button'>
      <ButtonWhile src={icGoogle} alt='google' title='With Google' />
      <ButtonWhile src={icFacebook} alt='facebook' title='With Facebook' />
    </div>
  </div>
)

export default WithSocial
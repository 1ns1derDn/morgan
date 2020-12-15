import React from 'react'
import Title from '../../UI/Title/Title'
import ButtonBlack from '../../UI/ButtonBlack/ButtonBlack'
import lamp from './icon/lamp.svg'

import './BasketEmpty.scss'

const BasketEmpty = () => (
  <div className='BasketEmpty'>
    <Title clazz='BasketEmpty-Title' title='BASKET' />
    <div className='BasketEmpty-Icon'>
      <img src={lamp} alt="lamp" />
    </div>
    <div className='BasketEmpty-Text'>
      <p>
        Your basket is empty
      </p>
    </div>
    <ButtonBlack
      to='/'
      title='START SHOPPING'
      buttonIsLink
    />
  </div>
)

export default BasketEmpty
import React from 'react'
import ButtonWhite from '../../UI/ButtonWhite/ButtonWhite'
import notFound from './image/notFound.svg'

import './NotFound.scss'

const NotFound = () => (
  <div className='NotFound'>
    <div className='NotFound-Image'>
      <img src={notFound} alt='404' />
    </div>
    <div className='NotFound-Text'>
      Sorry, we can't find this page
    </div>
    <ButtonWhite title='HOME PAGE' />
  </div>
)

export default NotFound
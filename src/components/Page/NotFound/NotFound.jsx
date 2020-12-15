import React from 'react'
import ButtonWhite from '../../UI/ButtonWhite/ButtonWhite'
import notFound from './image/notFound.svg'

import './NotFound.scss'

const NotFound = () => (
  <div className='NotFound'>
    <div className='Container'>
      <div className='NotFound-Inner'>
        <div className="NotFound-Box">
          <div className='NotFound-Image'>
            <img src={notFound} alt='404' />
          </div>
          <div className='NotFound-Text'>
            Sorry, we can't find this page
          </div>
          <ButtonWhite clazz='NotFound-Button' title='HOME PAGE' />
        </div>
      </div>
    </div>
  </div>
)

export default NotFound
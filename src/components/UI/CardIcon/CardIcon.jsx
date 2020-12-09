import React from 'react'
import card from './icon/card.svg'

import './CardIcon.scss'

const CarIcon = () => (
  <div className='CardIcon'>
    <img src={card} alt='card' />
    <span className='CardIcon-Count'>
      0
    </span>
  </div>
)

export default CarIcon
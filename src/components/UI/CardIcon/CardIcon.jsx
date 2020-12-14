import React from 'react'
import card from './icon/card.svg'

import './CardIcon.scss'

const CarIcon = (props) => (
  <div className='CardIcon'>
    <img src={card} alt='card' />
    <span className='CardIcon-Count'>
      {props.quantity}
    </span>
  </div>
)

export default CarIcon
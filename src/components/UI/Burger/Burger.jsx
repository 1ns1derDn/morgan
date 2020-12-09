import React from 'react'

import './Burger.scss'

const Burger = ({ onClick }) => (
  <div onClick={onClick} className='Burger'>
    <span className='Burger-Line'></span>
  </div>
)

export default Burger
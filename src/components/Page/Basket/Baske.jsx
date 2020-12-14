import React from 'react'
import BasketEmpty from '../../UI/BasketEmpty/BasketEmpty'
import BasketContent from '../../UI/BasketContent/BasketContent'

import './Basket.scss'

const Basket = (props) => {
  if (props.basketProducts.length === 0) {
    return (
      <div className='Basket'>
        <div className='Container'>
          <div className='Basket-Inner'>
            <BasketEmpty />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='Basket'>
      <div className='Container'>
        <BasketContent {...props} orderTotle={props.orderTotle} classes='Basket-Title' />
      </div>
    </div>
  )
}

export default Basket
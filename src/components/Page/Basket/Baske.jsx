import React from 'react'
import BasketEmpty from '../../UI/BasketEmpty/BasketEmpty'
import OrderSummary from '../../UI/OrderSummary/OrderSummary'
import BasketItem from '../../UI/BasketItem/BasketItem'
import OrderSuccess from '../../UI/OrederSuccess/OrderSuccess'

import image from './image.jpg'
import './Basket.scss'

const Basket = () => (
  <div className='Basket'>
    <div className='Container'>
      <div className='Basket-Inner'>
        <BasketEmpty />
      </div>
    </div>
  </div>
)

const ContainerBasket = () => {
  if (true) {
    return <OrderSuccess />
  //   return <BasketItem
  //   price='£480.00'
  //   category='Table lamp'
  //   name='Sunset'
  //   quantity='1'
  //   img={image}
  //   alt='dasdd'
  // />
  }
  return (
    <>
      <OrderSummary />
      < Basket />
    </>
  )
}

export default ContainerBasket
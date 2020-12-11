import React from 'react'
import ButtonBlack from '../ButtonBlack/ButtonBlack'
import BasketItem from '../BasketItem/BasketItem'
import './PreviewBasket.scss'

import image from '../../Page/Basket/image.jpg'

const PreviewBasket = (props) => (
  <div className={props.clazz ? 'PreviewBasket ' + props.clazz : 'PreviewBasket'}>
    <BasketItem
      clazz='BasketItem_CardItem'
      price='£480.00'
      category='Table lamp'
      name='Sunset'
      quantity='1'
      img={image}
      alt='dasdd' />
    <ButtonBlack clazz='ButtonBlack_Small' title='GO TO CHECKOUT' />
  </div>
)

export default PreviewBasket
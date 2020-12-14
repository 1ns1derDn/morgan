import React from 'react'
import ButtonBlack from '../ButtonBlack/ButtonBlack'
import BasketItem from '../BasketItem/BasketItem'
import './PreviewBasket.scss'

const PreviewBasket = (props) => (
  <div className={props.clazz ? 'PreviewBasket ' + props.clazz : 'PreviewBasket'}>
    <ul>
      {
        props.basketProducts.map((product) => {
          return (
            <li key={product.id}>
              <BasketItem
                clazz='BasketItem_CardItem'
                price={product.totle}
                category={product.category}
                name={product.name}
                quantity={product.count}
                img={product.image}
                alt='dasdd' />
            </li>
          )
        })
      }
    </ul>
    <ButtonBlack clazz='ButtonBlack_Small' title='GO TO CHECKOUT' />
  </div>
)

export default PreviewBasket
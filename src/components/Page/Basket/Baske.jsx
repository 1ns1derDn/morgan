import React from 'react'
import BasketEmpty from '../../UI/BasketEmpty/BasketEmpty'
import OrderSummary from '../../UI/OrderSummary/OrderSummary'
import BasketItem from '../../UI/BasketItem/BasketItem'

import './Basket.scss'

const Basket = (props) => {
  if (!props.basketProducts) {
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
    <ul>
      {
        props.basketProducts.map(product => {
          return <li key={product.id}>
            <BasketItem
              price={product.totle}
              category={product.category}
              name={product.name}
              quantity={product.count}
              img={product.image}
              alt={product.alias}
              handleAddProductToBasket={() => props.handleAddProductToBasket(product, true)}
              handleRemoveProductFromBasket={() => {props.handleRemoveProductFromBasket(product.id)}}
            />
            <OrderSummary />
          </li>
        })
      }
    </ul>
  )
}

export default Basket
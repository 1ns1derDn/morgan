import React from 'react'
import BasketEmpty from '../../UI/BasketEmpty/BasketEmpty'
import OrderSummary from '../../UI/OrderSummary/OrderSummary'
import BasketItem from '../../UI/BasketItem/BasketItem'
import OrderSuccess from '../../UI/OrederSuccess/OrderSuccess'

import './Basket.scss'


const Basket = (props) => {
  console.log(props.basketProducts);
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
              price={product.price}
              category='Table lamp'
              name={product.name}
              quantity='1'
              img={product.image}
              alt={product.alias}
            />
            <OrderSummary />
          </li>
        })
      }
    </ul>
  )
}

{/* <OrderSuccess clazz='Basket-OrderSuccess' /> */}


export default Basket
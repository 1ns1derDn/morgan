import React from 'react'
import BasketEmpty from '../../UI/BasketEmpty/BasketEmpty'
import BasketContent from '../../UI/BasketContent/BasketContent'
import OrderSuccess from '../../UI/OrderSuccess/OrderSuccess'
import './Basket.scss'

const Basket = (props) => {
  if (props.basketProducts.length === 0 && !props.orderSuccess) {
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

  if (props.orderSuccess) {
    return (
      <div className='Basket'>
        <div className='Container'>
          <div className='Basket-Inner'>
            <OrderSuccess
            handleStartShop={props.handleStartShop}
            id={props.orderId} timeStamp={props.timeStamp} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='Basket'>
      <div className='Container'>
        <BasketContent
          handleSendOrderProcess={props.handleSendOrderProcess}
          {...props} orderTotle={props.orderTotle} clazzTitle='Basket-Title' />
      </div>
    </div>
  )
}

export default Basket
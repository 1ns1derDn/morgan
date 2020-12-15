import React from 'react'
import nextId from "react-id-generator";

import ButtonBlack from '../../UI/ButtonBlack/ButtonBlack'
import './OrderSummary.scss'

const OrderSummary = (props) => {

  const orderId = nextId(844253425);

  return (
    <div className={props.clazz ? 'OrderSummary ' + props.clazz : 'OrderSummary'}>
      <h3 className='OrderSummary-Title'>Order Summary</h3>
      <ul className='OrderSummary-List'>
        {
          props.basketProducts.map((product) => {
            return (
              <li key={product.id} className='OrderSummary-Item'>
                <span className='OrderSummary-ItemName'>
                  {product.name}
                </span>
                <span className='OrderSummary-ItemPrice'>
                  £{product.totle}.00
                </span>
              </li>
            )
          })
        }
      </ul>
      <div className='OrderSummary-Express'>
        <span className='OrderSummary-ExpressName'>
          Express Delivery
          </span>
        <span className='OrderSummary-ExpressPrice'>
          £10.00
          </span>
      </div>
      <div className='OrderSummary-Box'>
        <span className='OrderSummary-TitleTotal'>
          Estimated Total
        </span>
        <span className='OrderSummary-Total'>
          £{props.orderTotle}.00
        </span>
      </div>
      <ButtonBlack
        title='CHECKOUT'
        clazz='OrderSummary-Button ButtonBlack_Small'
        onClick={() => props.handleSendOrderProcess(new Date(), orderId, true)}
      />
    </div>
  )
}

export default OrderSummary
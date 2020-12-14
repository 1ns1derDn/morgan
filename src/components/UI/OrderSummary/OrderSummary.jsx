import React from 'react'
import nextId from "react-id-generator";

import ButtonBlack from '../../UI/ButtonBlack/ButtonBlack'
import './OrderSummary.scss'

const OrderSummary = (props) => {

  const orderId = nextId(844253425);

  return (
    <div className='OrderSummary'>
      <h3 className='OrderSummary-Title'>Order Summary</h3>
      <ul className='OrderSummary-List'>
        {
          props.basketProducts.map((product) => {
            return (
              <li className='OrderSummary-Item'>
                <span className='OrderSummary-ItemName'>
                  {product.name}
                </span>
                <span className='OrderSummary-ItemPrice'>
                  {product.price}
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
          {props.orderTotle}
        </span>
      </div>
      <ButtonBlack onClick={ () => props.handleSendOrderProcess(new Date(), orderId, true)} clazz='OrderSummary-Button ButtonBlack_Small' title='CHECKOUT' />
    </div>
  )
}

export default OrderSummary
import React from 'react'
import Title from '../Title/Title'
import ButtonWhite from '../ButtonWhite/ButtonWhite'

import success from './icon/success.svg'

import './OrderSuccess.scss'

const addZero = (num) => {
  if (num >= 0 && num <= 9) {
    return '0' + num
  }
  return num
}

const OrderSuccess = (props) => (
  <section className={props.clazz ? 'OrderSuccess ' + props.clazz : 'OrderSuccess'}>
    <Title clazz='OrderSuccess-Title' title='THANK YOU!' />
    <div className='OrderSuccess-Icon'>
      <img src={success} alt='icon success oreder' />
    </div>
    <div className='OrderSuccess-Text'>
      <p>
        <span>Your ordering is completely successful</span>
      </p>
      <p>
        We'll let you know when it ships and it headed your way.
    </p>
    </div>
    <div className='OrderSuccess-Box'>
      <span className='OrderSuccess-Info'>Order: &nbsp;<span>
        {props.id}
      </span></span>
      <span className='OrderSuccess-Info'>Date order: &nbsp;<span>
        {!props.timeStamp ? null :
          `${addZero(props.timeStamp.getDate())}/${props.timeStamp.getMonth() + 1}/${props.timeStamp.getFullYear()}`}
      </span></span>
    </div>
    <ButtonWhite
      to='/'
      buttonIslink={true}
      onClick={props.handleStartShop}
      clazz='OrderSuccess-Button'
      title='CONTINUE SHOPPING' />
  </section>
)

export default OrderSuccess
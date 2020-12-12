import React from 'react'
import Title from '../Title/Title'
import ButtonWhite from '../ButtonWhite/ButtonWhite'

import success from './icon/success.svg'

import './OrderSuccess.scss'

const OrderSuccess = (props) => (
  <section className={props.clazz ? 'OrderSuccess ' + props.clazz : 'OrderSuccess'}>
    <Title classes='OrderSuccess-Title' title='THANK YOU!' />
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
      <span className='OrderSuccess-Info'>Order: &nbsp;<span>0844253425</span></span>
      <span className='OrderSuccess-Info'>Date order: &nbsp;<span>07/12/20</span></span>
    </div>
    <ButtonWhite clazz='OrderSuccess-Button' title='CONTINUE SHOPPING'/>
  </section>
)

export default OrderSuccess
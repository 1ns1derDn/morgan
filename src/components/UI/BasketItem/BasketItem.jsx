import React from 'react'
import ButtonIcon from '../../UI/ButtonIcon/ButtonIcon'

import icClose from './icon/icClose.svg'
import minus from './icon/minus.svg'
import plus from './icon/plus.svg'

import './BasketItem.scss'

const BasketItem = (props) => (
  <div className={props.clazz ? 'BasketItem ' + props.clazz : 'BasketItem'}>
    <div className='BasketItem-Image'>
      <img src={props.img} alt={props.alt} />
    </div>
    <div className='BasketItem-Content'>
      <div className='BasketItem-Wrapper'>
        <div className='BasketItem-Top'>
          <span className='BasketItem-Title'>{props.category}</span>
          <ButtonIcon img={icClose} alt='delete all item' />
        </div>
        <h3 className='BasketItem-Name'>
          {props.name}
        </h3>
      </div>
      <div className='BasketItem-Wrapper'>
        <span className='BasketItem-Title'>
          Quantity
        </span>
        <div className='BasketItem-Bottom'>
          <div className='BasketItem-Control'>
            <ButtonIcon clazz='BasketItem-Button' img={minus} alt='delete item' />
            <span className='BasketItem-Quantity'>
              {props.quantity}
            </span>
            <ButtonIcon clazz='BasketItem-Button' img={plus} alt='add item' />
          </div>
          <div className='BasketItem-Price'>
            <span className='BasketItem-PriceQuantity'>
              {props.quantity}&nbsp;x&nbsp;
            </span>
            <span>
              {props.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default BasketItem
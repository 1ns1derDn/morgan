import React from 'react'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

import icClose from './icon/icClose.svg'
import minus from './icon/minus.svg'
import plus from './icon/plus.svg'

import './BasketProduct.scss'

const BasketProduct = (props) => {
  return (
    <div className={props.clazz ? 'BasketProduct ' + props.clazz : 'BasketProduct'}>
      <div className='BasketProduct-Image'>
        <img src={props.img} alt={props.alt} />
      </div>
      <div className='BasketProduct-Content'>
        <div className='BasketProduct-Wrapper'>
          <div className='BasketProduct-Top'>
            <span className='BasketProduct-Title'>{props.category}</span>
            <ButtonIcon
              img={icClose}
              alt='delete all item'
              clazz='BasketProduct-RemoveAll'
              onClick={props.handleAllRemoveProductFromBasket}
            />
          </div>
          <h3 className='BasketProduct-Name'>
            {props.name}
          </h3>
        </div>
        <div className='BasketProduct-Wrapper'>
          <span className='BasketProduct-Title BasketProduct-TitleQuantity'>
            Quantity
          </span>
          <div className='BasketProduct-Bottom'>
            <div className='BasketProduct-Control'>
              <ButtonIcon
                onClick={props.handleRemoveProductFromBasket}
                clazz='BasketProduct-Button'
                img={minus}
                alt='delete item' />
              <span className='BasketProduct-Quantity'>
                {props.quantity}
              </span>
              <ButtonIcon
                onClick={props.handleAddProductToBasket}
                clazz='BasketProduct-Button'
                img={plus}
                alt='add item' />
            </div>
            <div className='BasketProduct-Price'>
              <span className='BasketProduct-PriceQuantity'>
                {props.quantity}&nbsp;x&nbsp;
              </span>
              <span>
                £{props.price}.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketProduct
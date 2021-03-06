import React from 'react'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

import addIcon from './icon/add.svg'
import remove from './icon/remove.svg'

import './Product.scss'
const Product = (props) => (
  <div className={props.clazz ? 'Product ' + props.clazz : 'Product'}>
    {
      props.isBasket ?
        <ButtonIcon
          onClick={props.handleAllRemoveProductFromBasket}
          clazz='Product-Button'
          img={remove}
          alt='Remove item' /> :
        <ButtonIcon
          onClick={props.handleAddProductToBasket}
          clazz='Product-Button'
          img={addIcon}
          alt='Add item' />
    }
    <div className='Product-Image'>
      <img src={props.image} alt={props.alt} />
    </div>
    <div className='Product-Box'>
      <h3 className='Product-Name'>
        {props.name}
      </h3>
      <span className='Product-Price'>
        £{props.price}.00
      </span>
    </div>
  </div>
)

export default Product
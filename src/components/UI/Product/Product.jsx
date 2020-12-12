import React from 'react'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

import addIcon from './icon/add.svg'
import remove from './icon/remove.svg'

import './Product.scss'

const Product = (props) => (
  <div className='Product'>
    {
      props.isBasket ?
        <ButtonIcon clazz='Product-Button' img={remove} alt='Remove item' /> :
        <ButtonIcon clazz='Product-Button' img={addIcon} alt='Add item' />
    }
    <div className='Product-Image'>
      <img src={props.image} alt={props.alt} />
    </div>
    <div className='Product-Box'>
      <h3 className='Product-Name'>
        {props.name}
      </h3>
      <span className='Product-Price'>
        {props.price}
      </span>
    </div>
  </div>
)

export default Product
import React from 'react'
import { NavLink } from 'react-router-dom'

import ButtonSearch from '../ButtonSearch/ButtonSearch'
import LoginUserIcon from '../LoginUserIcon/LoginUserIcon'
import CardIcon from '../CardIcon/CardIcon'
import PreviewBasket from '../PreviewBasket/PreviewBasket'

import './HeadPanel.scss'

const HeadPanel = (props) => {

  let previewBasket = null;
  if (props.basketProducts.length > 0) {
    previewBasket = (
      <PreviewBasket
        basketProducts={props.basketProducts}
        clazz='HeadPanel-PreviewBasket' />
    )
  }

  return (
    <ul className='HeadPanel'>
      <li className='HeadPanel-Item'>
        <ButtonSearch />
      </li>
      <li className='HeadPanel-Item'>
        <NavLink
          className='HeadPanel-Link'
          activeClassName="HeadPanel-Link_Active"
          to='/login'>
          <LoginUserIcon />
        </NavLink>
      </li>
      <li className='HeadPanel-Item'>
        <NavLink
          className='HeadPanel-Link'
          activeClassName="HeadPanel-Link_Active"
          to='/basket'>
          <CardIcon
            quantity={props.quantity}
          />
        </NavLink>
        {previewBasket}
      </li>
    </ul>
  )
}


export default HeadPanel
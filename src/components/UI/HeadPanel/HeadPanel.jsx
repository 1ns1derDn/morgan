import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ButtonSearch from '../ButtonSearch/ButtonSearch'
import LoginUserIcon from '../LoginUserIcon/LoginUserIcon'
import CardIcon from '../CardIcon/CardIcon'
import PreviewBasket from '../PreviewBasket/PreviewBasket'

import './HeadPanel.scss'

const HeadPanel = (props) => (
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
        to='card'>
        <CardIcon 
        quantity={props.quantity}
        />
      </NavLink>
      <PreviewBasket
        basketProducts={props.basketProducts}
        clazz='HeadPanel-PreviewBasket' />
    </li>
  </ul>
)

const ContainerHeadPanel = () => {
  const basketProducts = useSelector(state => state.basket.basketProducts)
  const quantity = useSelector(state => state.basket.quantity)
  return <HeadPanel 
  quantity={quantity}
  basketProducts={basketProducts} />
}

export default ContainerHeadPanel
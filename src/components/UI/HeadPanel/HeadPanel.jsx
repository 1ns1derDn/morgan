import React from 'react'
import { NavLink } from 'react-router-dom'

import ButtonSearch from '../ButtonSearch/ButtonSearch'
import LoginUserIcon from '../LoginUserIcon/LoginUserIcon'
import CardIcon from '../CardIcon/CardIcon'

import './HeadPanel.scss'

const HeadPanel = () => (
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
        <CardIcon />
      </NavLink>
    </li>
  </ul>
)

export default HeadPanel
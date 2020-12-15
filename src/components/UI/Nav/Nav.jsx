import React from 'react'
import { NavLink } from 'react-router-dom'
import Burger from '../Burger/Burger'

import './Nav.scss'

const Nav = () => (
  <nav className='Nav'>
    <Burger />
    <div className='Nav-Wrapper'>
      <h2 className='Nav-Title'>PRODUCTS</h2>
      <ul className='Nav-List'>
        <li className='Nav-Item'>
          <NavLink
            className='Nav-Link'
            to='/interior-ceiling'
            activeClassName="Nav-Link_Active">
            Interior ceiling
        </NavLink>
        </li>
        <li className='Nav-Item'>
          <NavLink
            className='Nav-Link'
            to='/floor-lamps'
            activeClassName="Nav-Link_Active">
            Floor lamps
        </NavLink>
        </li>
        <li className='Nav-Item'>
          <NavLink
            className='Nav-Link'
            to='/exterior-ceiling'
            activeClassName="Nav-Link_Active">
            Exterior ceiling
        </NavLink>
        </li>
        <li className='Nav-Item'>
          <NavLink
            className='Nav-Link'
            to='/table-lamps'
            activeClassName="Nav-Link_Active">
            Table lamps
        </NavLink>
        </li>
      </ul>
    </div>
  </nav>
)



export default Nav
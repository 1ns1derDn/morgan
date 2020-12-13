import React from 'react'
import { Link } from 'react-router-dom'

import logo from './icon/logo.svg'
import './Logo.scss'

const Logo = (props) => (
  <Link className='Logo' to='/'>
    <img className='Logo-Icon' src={logo} alt='logotype' />
  </Link>
)

export default Logo
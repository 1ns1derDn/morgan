import React from 'react'
import Logo from '../UI/Logo/Logo'
import Nav from '../UI/Nav/Nav'
import HeadPanel from '../UI/HeadPanel/HeadPanel'

import './Header.scss'

const Header = () => (
  <header className='Header'>
    <div className='Container'>
      <div className='Header-Inner'>
        <Logo />
        <Nav />
        <HeadPanel />
      </div>
    </div>
  </header>
)

export default Header
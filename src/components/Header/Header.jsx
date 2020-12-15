import React from 'react'
import Logo from '../UI/Logo/Logo'
import Nav from '../UI/Nav/Nav'
import ContainerHeadPanel from '../Container/ContainerHeadPanel'

import './Header.scss'

const Header = (props) => (
  <header className='Header'>
    <div className='Container'>
      <div className='Header-Inner'>
        <Logo/>
        <Nav />
        <ContainerHeadPanel />
      </div>
    </div>
  </header>
)

export default Header
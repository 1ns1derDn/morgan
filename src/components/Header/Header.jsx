import React from 'react'
import Logo from '../UI/Logo/Logo'
import Nav from '../UI/Nav/Nav'
import ContainerHeadPanel from '../Container/ContainerHeadPanel'

import './Header.scss'

const Header = (props) => {

  let classes = 'Header'

  if (props.visibleMenu) {
    classes += ` Header_MenuOpen`
  }

  return (
    <header className={classes}>
      <div className='Container'>
        <div className='Header-Inner'>
          <Logo
            handleCloseMenu={props.handleCloseMenu}
          />
          <Nav
            handleCloseMenu={props.handleCloseMenu}
            handleToggleOpenMenu={props.handleToggleOpenMenu} />
          <ContainerHeadPanel
            handleCloseMenu={props.handleCloseMenu} />
        </div>
      </div>
    </header>
  )
}

export default Header
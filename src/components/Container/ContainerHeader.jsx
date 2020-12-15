import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleOpenMenu, closeMenu } from '../../actions/menuActions'
import Header from '../Header/Header'

const ContainerHeader = () => {
  const dispatch = useDispatch()
  const visibleMenu = useSelector(state => state.menu.visibleMenu)
  const handleToggleOpenMenu = () => dispatch(toggleOpenMenu())
  const handleCloseMenu = () => dispatch(closeMenu())
  return <Header
    handleCloseMenu={handleCloseMenu}
    visibleMenu={visibleMenu}
    handleToggleOpenMenu={handleToggleOpenMenu} />
}
export default ContainerHeader
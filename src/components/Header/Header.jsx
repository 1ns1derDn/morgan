import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleSelectedCategory } from '../../actions/сategoriesActions'
import Logo from '../UI/Logo/Logo'
import Nav from '../UI/Nav/Nav'
import HeadPanel from '../UI/HeadPanel/HeadPanel'

import './Header.scss'

const Header = (props) => (
  <header className='Header'>
    <div className='Container'>
      <div className='Header-Inner'>
        <Logo
        categoryId=''
        fnHandleSelectedCategory={props.fnHandleSelectedCategory}/>
        <Nav
          categories={props.categories}
          fnHandleSelectedCategory={props.fnHandleSelectedCategory}
        />
        <HeadPanel />
      </div>
    </div>
  </header>
)

const ContainerHeader = (props) => {

  const dispatch = useDispatch()

  const fnHandleSelectedCategory = (categoryId) => dispatch(handleSelectedCategory(categoryId))
  const categories = useSelector(state => state.categories.categories)

  return <Header categories={categories} fnHandleSelectedCategory={fnHandleSelectedCategory} />
}

export default ContainerHeader
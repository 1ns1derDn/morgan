import React from 'react'
import Category from '../../UI/Category/Category'
import ContainerProductListCategory from '../../Container/ContainerProductListCategory'
import './Home.scss'

const Home = (props) => (
  <div className='Home'>
    <div className='Container'>
      <div className='Home-Inner'>
        <Category
          arrowDown={props.arrowDown}
          clazz='Home-Category'
          fnHandleSelectedCategory={props.fnHandleSelectedCategory}
          categories={props.categories} />
      </div>
      <ContainerProductListCategory
      getProducts={props.getProducts} />
    </div>
  </div>
)


export default Home
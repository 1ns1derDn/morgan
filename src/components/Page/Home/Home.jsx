import React from 'react'
import Category from '../../UI/Category/Category'
import ContainerProductListCategory from '../../Container/ContainerProductListCategory'
import './Home.scss'

const Home = (props) => (
  <div className='Home'>
    <div className='Container'>
      <div className='Home-Inner'>
        <Category
          clazz='Home-Category'
          fnHandleSelectedCategory={props.fnHandleSelectedCategory}
          categories={props.categories} />
      </div>
    </div>
    <ContainerProductListCategory

      getProducts={props.getProducts} />
  </div>
)


export default Home
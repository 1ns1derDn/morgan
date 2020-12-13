import React from 'react'
import Category from '../../UI/Category/Category'
import ContainerProductListCategory from '../../Container/ProductListCategory'
import './Home.scss'

const Home = (props) => (
  <div className='Home'>
    <div className='Container'>
      <div className='Home-Inner'>
        <Category
          fnHandleSelectedCategory={props.fnHandleSelectedCategory}
          categories={props.categories}
          clazz='Home-Category' />
      </div>
    </div>
    <ContainerProductListCategory getProducts={props.getProducts}/>
  </div>
)


export default Home
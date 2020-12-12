import React from 'react'
import ProductList from '../../UI/ProductList/ProductList'
import Select from '../../UI/Select/Select'
import Category from '../../UI/Category/Category'

import './Home.scss'

const Home = (props) => (
  <div className='Home'>
    <div className='Container'>
      <div className='Home-Inner'>
        <Category
          fnHandleSelectedCategory={props.fnHandleSelectedCategory}
          categories={props.categories}
          clazz='Home-Category' />
        <Select
          handleToggleOpen={props.handleToggleOpen}
          handleSelected={props.handleSelected}
          select={props.sortSelect} />
        <ProductList products={props.products} />
      </div>
    </div>
  </div>
)


export default Home
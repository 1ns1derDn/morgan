import React from 'react'
import Select from '../../UI/Select/Select'
import ContainerProductList from '../../Container/ContainerProductList'

import './ProductCategory.scss'

const ProductCategory = (props) => {
  return (
    <div className='Container'>
      <div className='ProductCategory'>
        <Select
          clazz='ProductCategory-Select'
          handleToggleOpen={props.handleToggleOpen}
          handleSelected={props.handleSelected}
          select={props.sortSelect} />
        <ContainerProductList
          categories={props.categories}
          handleRemoveProductFromBasket={props.handleRemoveProductFromBasket}
          handleAddProductToBasket={props.handleAddProductToBasket}
          products={props.products} />
      </div>
    </div>
  )
}
export default ProductCategory
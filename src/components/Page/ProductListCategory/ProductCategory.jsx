import React from 'react'
import Select from '../../UI/Select/Select'
import ProductList from '../../UI/ProductList/ProductList'

const ProductCategory = (props) => {
  return (
    <div className='Container'>
      <Select
        handleToggleOpen={props.handleToggleOpen}
        handleSelected={props.handleSelected}
        select={props.sortSelect} />
      <ProductList
        categories={props.categories}
        handleRemoveProductFromBasket={props.handleRemoveProductFromBasket}
        handleAddProductToBasket={props.handleAddProductToBasket}
        products={props.products} />
    </div>
  )
}
export default ProductCategory
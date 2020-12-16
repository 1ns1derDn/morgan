import React from 'react'
import Select from '../../UI/Select/Select'
import ContainerProductList from '../../Container/ContainerProductList'
import ButtonWhite from '../../UI/ButtonWhite/ButtonWhite'
import ArrowScroll from '../../UI/ArrowScroll/ArrowScroll'
import './ProductCategory.scss'

const ProductCategory = (props) => {

  let isPaginationVisible = true;

  if (props.products.products.length === props.products.productsVisible.length) {
    isPaginationVisible = false
  }

  return (
    <div className='ProductCategory' id='ProductCategory'>
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
      {isPaginationVisible ? <ButtonWhite clazz='ProductCategory-ButtonWhite' onClick={props.handleAddPaginationProducts} title='Show more' /> : null}
      <div className='ProductCategory-Box'>
        <div className="Container Container_Position">
          <ArrowScroll visible={props.arrowUp} clazz='ProductCategory-Arrow' id='#Header' title='Scroll' reverse />
        </div>
      </div>
    </div>
  )
}
export default ProductCategory
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addProductToBasket,
  AllRemoveProductFromBasket
} from '../../actions/basketActions'
import ProductList from '../UI/ProductList/ProductList'

const ContainerProductList = (props) => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.productsVisible)
  const basketProducts = useSelector(state => state.basket.basketProducts)
  const handleAddProductToBasket = (product, isBasket) => dispatch(addProductToBasket(product, isBasket))
  const handleAllRemoveProductFromBasket = (products) => dispatch(AllRemoveProductFromBasket(products))

  return <ProductList
    categories={props.categories}
    basketProducts={basketProducts}
    handleAddProductToBasket={handleAddProductToBasket}
    handleAllRemoveProductFromBasket={handleAllRemoveProductFromBasket}
    products={products}
  />
}

export default ContainerProductList
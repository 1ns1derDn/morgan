import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProductToBasket, removeProductFromBasket } from '../../actions/basketActions'
import Basket from '../Page/Basket/Baske'

const ContainerBasket = () => {
  const dispatch = useDispatch()
  const basketProducts = useSelector(state => state.basket.basketProducts)
  const orderTotle = useSelector(state => state.basket.orderTotle)
  const handleAddProductToBasket = (product, isBasket) => dispatch(addProductToBasket(product, isBasket))
  const handleRemoveProductFromBasket = (product) => dispatch(removeProductFromBasket(product))
  return <Basket
  orderTotle={orderTotle}
  handleAddProductToBasket={handleAddProductToBasket}
  handleRemoveProductFromBasket={handleRemoveProductFromBasket}
  basketProducts={basketProducts}/>
}

export default ContainerBasket
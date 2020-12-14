import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProductToBasket, removeProductFromBasket, sendOrderProcess, startShop } from '../../actions/basketActions'
import Basket from '../Page/Basket/Baske'

const ContainerBasket = () => {
  const dispatch = useDispatch()
  const basketProducts = useSelector(state => state.basket.basketProducts)
  const orderTotle = useSelector(state => state.basket.orderTotle)
  const timeStamp = useSelector(state => state.basket.timeStamp)
  const orderId = useSelector(state => state.basket.id)
  const orderSuccess = useSelector(state => state.basket.orderSuccess)
  const handleAddProductToBasket = (product, isBasket) => dispatch(addProductToBasket(product, isBasket))
  const handleRemoveProductFromBasket = (product) => dispatch(removeProductFromBasket(product))
  const handleSendOrderProcess = (timeStamp, id, orderSuccess) => dispatch(sendOrderProcess(timeStamp, id, orderSuccess))
  const handleStartShop = () => dispatch(startShop())

  return <Basket
    handleStartShop={handleStartShop}
    orderSuccess={orderSuccess}
    timeStamp={timeStamp}
    orderId={orderId}
    orderTotle={orderTotle}
    handleSendOrderProcess={handleSendOrderProcess}
    handleAddProductToBasket={handleAddProductToBasket}
    handleRemoveProductFromBasket={handleRemoveProductFromBasket}
    basketProducts={basketProducts} />
}

export default ContainerBasket
import React from 'react'
import './BasketContent.scss'
import Title from '../Title/Title';
import OrderSummary from '../OrderSummary/OrderSummary'
import BasketProduct from '../BasketProduct/BasketProduct'
import { API_CATEGORIES } from '../../../services/serviceLampVariables'

const BasketContent = (props) => (
  <>
    <Title clazz={props.clazzTitle} title='BASKET' />
    <div className="BasketContent">
      <ul className='BasketContent-List'>
        {
          props.basketProducts.map(product => {
            return (
              <li className='BasketContent-Product' key={product.id}>
                <BasketProduct
                  price={product.totle}
                  category={product.category}
                  name={product.name}
                  quantity={product.count}
                  img={`${API_CATEGORIES}${product.image}`}
                  alt={product.alias}
                  handleAddProductToBasket={
                    () => props.handleAddProductToBasket(product, true)}
                  handleRemoveProductFromBasket={
                    () => { props.handleRemoveProductFromBasket(product) }}
                  handleAllRemoveProductFromBasket={
                    () => { props.handleAllRemoveProductFromBasket(product) }
                  }
                />
              </li>
            )
          })
        }
      </ul>
      <div className='BasketContent-Aside'>
        <OrderSummary
          clazz='BasketContent-OrderSummary'
          orderTotle={props.orderTotle}
          handleSendOrderProcess={props.handleSendOrderProcess}
          basketProducts={props.basketProducts} />
      </div>
    </div>
  </>
)

export default BasketContent
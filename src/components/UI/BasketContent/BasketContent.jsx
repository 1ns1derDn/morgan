import React from 'react'
import './BasketContent.scss'
import Title from '../Title/Title';
import OrderSummary from '../OrderSummary/OrderSummary'
import BasketItem from '../BasketItem/BasketItem'

const BasketContent = (props) => (
  <>
    <Title classes={props.classes} title='BASKET'/>
    <div className="BasketContent">
      <ul className='BasketContent-List'>
        {
          props.basketProducts.map(product => {
            return (
              <li key={product.id}>
                <BasketItem
                  price={product.totle}
                  category={product.category}
                  name={product.name}
                  quantity={product.count}
                  img={product.image}
                  alt={product.alias}
                  handleAddProductToBasket={() => props.handleAddProductToBasket(product, true)}
                  handleRemoveProductFromBasket={() => { props.handleRemoveProductFromBasket(product) }}
                />
              </li>
            )
          })
        }
      </ul>
      <div className='BasketContent-Aside'>
        <OrderSummary 
        handleSendOrderProcess={props.handleSendOrderProcess}
        basketProducts={props.basketProducts} orderTotle={props.orderTotle}/>
      </div>
    </div>
  </>
)

export default BasketContent
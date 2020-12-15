import React from 'react'
import ButtonBlack from '../ButtonBlack/ButtonBlack'
import BasketProduct from '../BasketProduct/BasketProduct'
import './PreviewBasket.scss'

const PreviewBasket = (props) => (
  <div className={props.clazz ? 'PreviewBasket ' + props.clazz : 'PreviewBasket'}>
    <ul className='PreviewBasket-List'>
      {
        props.basketProducts.map((product) => {
          return (
            <li className='PreviewBasket-Product' key={product.id}>
              <BasketProduct
                clazz='BasketProduct_CardProduct'
                price={product.totle}
                category={product.category}
                name={product.name}
                quantity={product.count}
                img={product.image}
                alt={product.name} />
            </li>
          )
        })
      }
    </ul>
    <ButtonBlack
      to='/basket'
      buttonIsLink={true}
      clazz='ButtonBlack_Small'
      title='GO TO CHECKOUT' />
  </div>
)

export default PreviewBasket
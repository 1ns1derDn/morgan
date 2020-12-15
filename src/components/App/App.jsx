import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import ContainerHome from '../Container/ContainerHome'
import ContainerLogin from '../Container/ContainerLogin'
import Registration from '../Page/Registration/Registration'
import ContainerResetPassword from '../Page/ResetPassword/ResetPassword'
import ContainerBasket from '../Container/ContainerBasket'
import NotFound from '../Page/NotFound/NotFound'

import ContextServiceProducts from '../Context/ContextServiceProducts'
import ContainerProductListCategory from '../Container/ContainerProductListCategory'

import './App.scss'

const App = () => {
  const {
    getProductsTableLamps,
    getProductsFloorLamps,
    getProductsExteriorCeiling,
    getProductsInteriorCeiling
  } = useContext(ContextServiceProducts)

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <ContainerHome />
        </Route>
        <Route path="/interior-ceiling" exact>
          <ContainerProductListCategory
            getProducts={getProductsTableLamps}
          />
        </Route>
        <Route path="/floor-lamps">
          <ContainerProductListCategory
            getProducts={getProductsFloorLamps}
          />
        </Route>
        <Route path="/exterior-ceiling">
          <ContainerProductListCategory
            getProducts={getProductsExteriorCeiling}
          />
        </Route>
        <Route path="/table-lamps">
          <ContainerProductListCategory
            getProducts={getProductsInteriorCeiling}
          />
        </Route>
        <Route path="/login">
          <ContainerLogin />
        </Route>
        <Route path="/basket">
          <ContainerBasket />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/reset-password">
          <ContainerResetPassword />
        </Route>
        <Route >
          <NotFound />
        </Route>
      </Switch>
    </>
  )
}

export default App
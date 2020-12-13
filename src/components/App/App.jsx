import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import ContainerHome from '../Container/ContainerHome'
import Login from '../Page/Login/Login'
import CreateAccount from '../Page/CreateAccount/CreateAccount'
import ContainerResetPassword from '../Page/ResetPassword/ResetPassword'
import ContainerBasket from '../Container/ContainerBasket'
import NotFound from '../Page/NotFound/NotFound'
import './App.scss'

import ContextServiceProducts from '../Context/ContextServiceProducts'
import ContainerProductListCategory from '../Container/ProductListCategory'

const App = () => {
  const serviceLamp = useContext(ContextServiceProducts)

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <ContainerHome />
        </Route>
        <Route path="/interior-ceiling" exact>
          <ContainerProductListCategory
            getProducts={serviceLamp.getProductsTableLamps}
          />
        </Route>
        <Route path="/floor-lamps">
          <ContainerProductListCategory
            getProducts={serviceLamp.getProductsFloorLamps}
          />
        </Route>
        <Route path="/exterior-ceiling">
          <ContainerProductListCategory
            getProducts={serviceLamp.getProductsExteriorCeiling}
          />
        </Route>
        <Route path="/table-lamps">
          <ContainerProductListCategory
            getProducts={serviceLamp.getProductsInteriorCeiling}
          />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/card">
          <ContainerBasket />
        </Route>
        <Route path="/create-account">
          <CreateAccount />
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
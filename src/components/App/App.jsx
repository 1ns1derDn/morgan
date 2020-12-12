import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import ContainerHome from '../Container/ContainerHome'
import Login from '../Page/Login/Login'
import CreateAccount from '../Page/CreateAccount/CreateAccount'
import ContainerResetPassword from '../Page/ResetPassword/ResetPassword'
import Basket from '../Page/Basket/Baske'
import NotFound from '../Page/NotFound/NotFound'
import './App.scss'


import ContainerProductListCategory from '../Container/ProductListCategory'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact>
        <ContainerHome />
      </Route>
      <Route path="/interior-ceiling" exact>
        <ContainerProductListCategory />
      </Route>
      <Route path="/floor-lamps">
        <ContainerProductListCategory />
      </Route>
      <Route path="/exterior-ceiling">
        <ContainerProductListCategory />
      </Route>
      <Route path="/table-lamps">
        <ContainerProductListCategory />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/card">
        <Basket />
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

export default App
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import Login from '../Page/Login/Login'
import CreateAccount from '../Page/CreateAccount/CreateAccount'
import ContainerResetPassword from '../Page/ResetPassword/ResetPassword'
import Basket from '../Page/Basket/Baske'
import NotFound from '../Page/NotFound/NotFound'
import './App.scss'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact>
        <h1>Interior ceiling</h1>
      </Route>
      <Route path="/interior-ceiling" exact>
        <h1>Interior ceiling</h1>
      </Route>
      <Route path="/floor-lamps">
        <h1>Floor lamps</h1>
      </Route>
      <Route path="/exterior-ceiling">
        <h1>Exterior ceiling</h1>
      </Route>
      <Route path="/table-lamps">
        <h1>Table lamps</h1>
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
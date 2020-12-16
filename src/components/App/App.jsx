import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import ContainerHeader from '../Container/ContainerHeader'
import ContainerHome from '../Container/ContainerHome'
import ContainerLogin from '../Container/ContainerLogin'
import ContainerRegistration from '../Container/ContainerRegistration'
import ContainerResetPassword from '../Container/ContainerResetPassword'
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
      <ContainerHeader />
      <Switch>
        <Route path="/" exact>
          <ContainerHome />
        </Route>
        <Route path="/interior-ceiling" exact>
          <div className="Container">
            <ContainerProductListCategory
              getProducts={getProductsTableLamps}
            />
          </div>
        </Route>
        <Route path="/floor-lamps">
          <div className="Container">
            <ContainerProductListCategory
              getProducts={getProductsFloorLamps}
            />
          </div>
        </Route>
        <Route path="/exterior-ceiling">
          <div className="Container">
            <ContainerProductListCategory
              getProducts={getProductsExteriorCeiling}
            />
          </div>
        </Route>
        <Route path="/table-lamps">
          <div className="Container">
            <ContainerProductListCategory
              getProducts={getProductsInteriorCeiling}
            />
          </div>
        </Route>
        <Route path="/login">
          <ContainerLogin />
        </Route>
        <Route path="/basket">
          <ContainerBasket />
        </Route>
        <Route path="/registration">
          <ContainerRegistration />
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
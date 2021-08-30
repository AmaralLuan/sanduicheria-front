import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from '../pages/Products/Products';



function Routes(token) {
  let routes;

  routes = [
    <Route path='/products' render={() => <Products token={token} />} />
  ]

  return (
    <Switch>
      {routes}
    </Switch>
  )
}

export default Routes

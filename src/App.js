import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, Checkout, Detail, Product } from 'Pages'
import { Context } from 'store'
import { productReducer, cartReducer, detailReducer } from 'store/reducer'
import { products } from 'store/reducer/product'

function App() {
  const [product, dispatchProduct] = React.useReducer(productReducer, products)
  const [cart, dispatchCart] = React.useReducer(cartReducer, {
    checkout: false,
    result: [],
  })
  const [detail, setDetail] = React.useReducer(detailReducer, {})
  return (
    <Context.Provider
      value={{
        product,
        dispatchProduct,
        cart,
        dispatchCart,
        detail,
        setDetail,
      }}
    >
      <Router>
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, Checkout, Detail, Product } from 'Pages'
import { Context } from 'store'
import { productReducer, cartReducer, detailReducer } from 'store/reducer'
import { products } from 'store/reducer/product'
import { parseJWT } from 'utils'

function App() {
  const [user, setUser] = React.useState(null)
  const [product, dispatchProduct] = React.useReducer(productReducer, products)
  const [cart, dispatchCart] = React.useReducer(cartReducer, {
    checkout: false,
    result: [],
  })
  const [detail, setDetail] = React.useReducer(detailReducer, {})

  React.useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decodedToken = parseJWT(token)
      setUser({ name: decodedToken.name, email: decodedToken.email })
    }
  }, [])

  return (
    <Context.Provider
      value={{
        product,
        dispatchProduct,
        cart,
        dispatchCart,
        detail,
        setDetail,
        user,
        setUser,
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

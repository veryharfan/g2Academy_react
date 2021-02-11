import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, CartPage } from 'Pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/cart'>
          <CartPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

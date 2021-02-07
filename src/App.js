import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, ChatPage, ProductPage } from 'Pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/chat'>
          <ChatPage />
        </Route>
        <Route path='/product'>
          <ProductPage />
        </Route>
        <Route path='/home'>
          <HomePage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  PrivateRoute,
  Error,
} from './pages'


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route exact path='/products/:guitId' children={<SingleProduct/>} />
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>

  )
}

export default App

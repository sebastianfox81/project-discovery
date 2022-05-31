import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
// Domain : dev-7p98w51q.us.auth0.com
// ClientID: VZ98lHa1YhoxRYpzKnC1wD5edG4o69Ze

ReactDOM.render(
  <Auth0Provider
    domain="dev-7p98w51q.us.auth0.com"
    clientId="VZ98lHa1YhoxRYpzKnC1wD5edG4o69Ze"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root'),
)



import './App.css'
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Home from './components/Home'
import Product from './components/Product'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import { Provider } from 'react-redux'
import cartStore from './store/cartStore'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Product />}></Route>
      <Route path="/cart" element={< Cart />}></Route >
    </Route >
  ))


  return (
    <div className='app'>
      <Provider store={cartStore}>
        <RouterProvider router={router} />

      </Provider>

    </div>

  )
}

export default App

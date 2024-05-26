import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, Route,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import Home from "./pages/home.jsx"
import Product from './pages/product.jsx'
import router from "./routes/index.jsx"
import { Provider } from 'react-redux'
import Store from '../app/Store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={Store}>
      <RouterProvider router={router}/>
    </Provider>
  
)

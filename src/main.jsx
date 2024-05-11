import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Root from './components/LayOut/Root';
import About from './components/About/About';
import OrderReview from './components/OrderReview/OrderReview';
import GrandPa from './components/ContexDriling/GrandPa/GrandPa';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('tshirt.json')
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'order',
        element: <OrderReview></OrderReview>
      },
      {
        path: 'grandPa',
        element: <GrandPa></GrandPa>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

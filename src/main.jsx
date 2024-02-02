import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './component/Navbar.jsx';
const route=createBrowserRouter(
  [
    {
      path: "/",
      element: <Navbar/>
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)

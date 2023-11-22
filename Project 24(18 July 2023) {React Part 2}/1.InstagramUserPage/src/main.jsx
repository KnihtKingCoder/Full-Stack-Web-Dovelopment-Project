import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Signup from './pages/Signup/Signup.jsx'
import Login from './pages/Login/Login.jsx'





const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
    <Route index element={<Login />} />
    <Route path='signup' element={<Signup />} />
    <Route path='login' element={<Login />} />
  </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)

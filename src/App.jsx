import React from 'react'
import Home from './Pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout'


const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/',
        element:<Home/>
      }]
    }
  ])



  return (
   <RouterProvider router={router}/>
  )
}

export default App
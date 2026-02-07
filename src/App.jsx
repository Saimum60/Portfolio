import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Pages/layout/Layout'
import Home from './Pages/Home/Home'

const App = () => {
  let router = createBrowserRouter ([
    {
      path:'/',
      element: <Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        
      ]
    }
  ])


  return <RouterProvider router={router} />
}

export default App
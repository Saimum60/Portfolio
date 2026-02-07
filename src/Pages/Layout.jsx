import React from 'react'
import Manu from '../components/manu/Manu'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Manu/>
    <Outlet/>
    </>
  )
}

export default Layout
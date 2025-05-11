import React from 'react'
import TempNavbar from '../../../components/NavBar/TempNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../../components/Footer/Footer'

const MainLayout = () => {
  return (
    <div>
      <TempNavbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
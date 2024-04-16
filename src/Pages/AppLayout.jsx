import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

const AppLayout = () => {
  return (
    <div className="border-2 border-solid border-black relative">
      <Header/>
      <div className="content relative min-w-screen min-h-screen">
      <Outlet/>
      </div>
    </div>
  )
}

export default AppLayout

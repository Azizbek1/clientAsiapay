import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminMenuNav = () => {
  return (
    <div>
      <h1 className='alert alert-primary'>Меню навигации</h1>
      <Outlet/>
    </div>
  )
}

export default AdminMenuNav
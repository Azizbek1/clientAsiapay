import React from 'react'
import { Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div>
      <h2 className="alert alert-primary" >User List</h2>
      <Outlet/>
    </div>
  )
}

export default User
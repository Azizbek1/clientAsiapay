import React from 'react'
import { Outlet } from 'react-router-dom'

const Vacancy = () => {
  return (
        <div>
            <h1 className="alert alert-primary">Вакансия</h1>
            <Outlet />
        </div>
  )
}

export default Vacancy
import React from 'react'
import { useRouteError } from 'react-router-dom'
function ErrorHandling() {
    const err = useRouteError();
  return (
    <div className="error-container h-lvh">
       <div className='error-msg text-center bg-slate-200 text-red-600 h-screen py-44'>
        <span><i className='fas fa-frown text-6xl py-4'></i></span>
          <h1 className='text-3xl py-4'>{err.status}</h1>
          <h1 className='text-3xl py-4'>{err.statusText}</h1>
        </div>   
    </div>
  )
}

export default ErrorHandling;
import React from 'react'
import { useRouteError } from 'react-router-dom'
function ErrorHandling() {
    const err = useRouteError();
  return (
    <div className="error-container">
       <div className='error-msg'>
        <span><i className='fas fa-frown'></i></span>
          <h1>{err.status}</h1>
          <h1>{err.statusText}</h1>
        </div>   
    </div>
  )
}

export default ErrorHandling;
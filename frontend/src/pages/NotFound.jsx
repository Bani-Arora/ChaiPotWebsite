import React from 'react'
import logo from "../assets/logo transparent.png"

function NotFound() {
  return (
    <div>
      <div className='bg-neutral-100 min-h-screen flex flex-col justify-center '>
      <div className='text-black text-center font-sans text-5xl font-bold'>
        ERROR 404
      </div>
      <div className='text-black text-center font-sans text-5xl'>
        PAGE NOT FOUND
      </div>
      <div >
       <img src={logo} alt="logo" className='max-w-sm m-auto' />
      </div>
      <div className='text-black text-center font-sans text-3xl'>
       <p>Have a hot cup of tea ;)</p> 
       <a className='text-2xl' href='/'>Click to open home-page</a>

      </div>
      </div>
    </div>
  )
}

export default NotFound
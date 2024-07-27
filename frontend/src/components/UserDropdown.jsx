import React from 'react'
import Logout from './Logout'

function UserDropdown() {

    const currentUser = JSON.parse(localStorage.getItem("Users"))


  return (
    <div>
        <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn outline-1 outline-base-400 rounded-md">
        <svg className='dark:stroke-white duration-100 transition-all ease-in-out' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
            {currentUser.firstName}</div>
        <ul
          tabIndex={0}
          className="menu dropdown-content dark:bg-neutral-800 bg-neutral-100 rounded-box z-[1] mt-4 w-52 p-2 shadow">
          <li className='rounded-md cursor-pointer my-1.5 outline outline-1 outline-base-300'><a href='/dashboard'>Dashboard</a></li>
          <li className='bg-red-500 text-white rounded-md cursor-pointer my-1.5'><Logout/></li>
        </ul>
      </div>
    </div>
  )
}

export default UserDropdown
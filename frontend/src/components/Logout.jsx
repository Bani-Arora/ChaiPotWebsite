import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

function Logout() {

    const location=useLocation()
    const from=location.state?.from?.pathname || "/"
    const navigate = useNavigate()
    
    const [ authUser , setAuthUser ]=useAuth();

    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            toast.success("Logged out Successfully");
            setTimeout(()=>{
                
              },2000)
              navigate(from,{replace:true})
              window.location.reload();
            
            
        } catch (error) {
            toast.error("error: "+error.message);
            setTimeout(()=>{},3000)
        }
    };

  return (
    <div>
        <button /*className='px-3 py-2 bg-red-300 text-white rounded-md cursor-pointer'*/
        onClick={handleLogout} >
        Logout
        </button>
    </div>
  )
}

export default Logout
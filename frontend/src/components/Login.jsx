import React from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"

function Login() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo ={
      email: data.email,
      password: data.password

    }
    await axios.post("//localhost:4001/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        
        document.getElementById("my_modal_3").close()
        localStorage.setItem("Users",JSON.stringify(res.data.user))
        toast.success("Login successful")
        setTimeout(()=>{
          window.location.reload()
        },1500)
        
        
        
        
      }
      
    }).catch((err)=>{
      if(err.response){
        console.log(err)
        toast.error("error: " + err.response.data.message)
        setTimeout(()=>{},3000)
      }
      
    })
  }

  
  return (
    
    <div className='bg-white text-black dark:bg-neutral-900 dark:text-white'>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-white text-black dark:bg-neutral-900 dark:text-white">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <navlink to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=>document.getElementById("my_modal_3").close()}
      >✕</navlink>
    <h3 className="font-bold text-lg">Login</h3>
    {/*Email */}
    <div className="mt-4 space-y-2">
        <span>Email</span><br/>
        <input type="email"
        placeholder='Enter your Email'
        className="w-80 px-3 py-1 border rounded-md outline-none bg-white  dark:bg-neutral-800 dark:border-white"
        {...register("email", { required: true })} />
        <br/>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/*Password */}
    <div className="mt-4 space-y-2">
        <span>Password</span><br/>
        <input type="Password"
        placeholder='Enter your Password'
        className="w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-neutral-800 dark:border-white"
        {...register("password", { required: true })} />
        <br/>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
        <label className="label">
            <a href="/forgotPassword" className="label-text-alt text-black link link-hover dark:text-white">Forgot password?</a>
          </label>
    </div>
    <div className="flex justify-around mt-4">
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
        <p>
            Not registered?{" "} 
            <NavLink
            to="/signup" 
            className="underline text-blue-500 cursor-pointer" 
            >
            Signup
            </NavLink> 
            {" "}</p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
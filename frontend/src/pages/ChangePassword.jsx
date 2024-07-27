import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"

function ChangePassword() {
  
  const currentUser = JSON.parse(localStorage.getItem("Users"))

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo ={
      email: currentUser.email,
      password: data.password,
      newPassword: data.newPassword

    }
    console.log(userInfo)

    await axios.post("//localhost:4001/user/changePassword",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        
        
        toast.success("Password updation successful")
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
    <div>
    <Navbar/>    
    <div className=" bg-neutral-100 min-h-screen dark:bg-neutral-900 duration-300 transition-all ease-in-out">
    <div className="hero-content flex-col pt-16 ">
    
    <div className="card bg-neutral-200 shrink-0 shadow-2xl rounded-md dark:bg-neutral-800 duration-300 transition-all ease-in-out">
    <ul className="menu menu-horizontal text-black bg-neutral-200 card-body rounded-md dark:bg-neutral-800 dark:text-white duration-300 transition-all ease-in-out">
      <li><a  className="active lg:text-sm text-xs" href="/changePassword">Change Password</a></li>
      <li><a className='lg:text-sm text-xs' href="/dashboard" > Profile</a></li>
      <li><a className='lg:text-sm text-xs' href="/deleteAccount">Delete account</a></li>
    </ul>
    </div>
    <div className="card bg-neutral-100 text-black w-full max-w-sm shrink-0 shadow-2xl dark:bg-neutral-800 dark:text-white duration-300 transition-all ease-in-out">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)} method="dialog">
      <h3 className="font-bold text-lg">Change Password</h3>
        <div className="form-control ">
          <label className="label">
            <span className="text-black label-text dark:text-white duration-300 transition-all ease-in-out">Email</span>
          </label>
          <input type="email" defaultValue={currentUser.email} className=" input input-bordered bg-neutral-500 border-neutral-300 dark:text-white dark:bg-neutral-500 dark:border-white duration-300 transition-all ease-in-out" required disabled="true"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out">New password</span>
          </label>
          <input type="password" placeholder="New password" className="input input-bordered bg-neutral-100 border-neutral-300 dark:bg-neutral-800 dark:border-white duration-300 transition-all ease-in-out" required 
          {...register("newPassword", { required: true })}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered bg-neutral-100 border-neutral-300 dark:bg-neutral-800 dark:border-white duration-300 transition-all ease-in-out" required 
          {...register("password", { required: true })}/>
          <label className="label">
            <a href="/forgotPassword" className="label-text-alt text-black link link-hover dark:text-white duration-300 transition-all ease-in-out">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-blue-700 text-white dark:bg-sky-900 dark:text-white dark:border-sky-900 duration-300 transition-all ease-in-out">Update</button>
        </div>
      </form>
    </div>
  </div>
</div>

      
    <Footer/>    
    </div>
  )
}

export default ChangePassword
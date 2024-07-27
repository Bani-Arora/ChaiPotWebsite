import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"

function UserDasboard() {
  
  const currentUser = JSON.parse(localStorage.getItem("Users"))

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo ={
      firstName: data.firstName,
      lastName: data.lastName,
      email: currentUser.email,
      phoneNo: data.phoneNo,
      password: data.password

    }
    console.log(userInfo)

    await axios.post("//localhost:4001/user/updateUser",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        
        localStorage.setItem("Users",JSON.stringify(res.data.user))
        toast.success("Updation successful")
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
    <div className="hero-content flex-col pt-16">
    
    <div className="card bg-neutral-200 text-black shrink-0 shadow-2xl rounded-md dark:bg-neutral-800 dark:text-white duration-300 transition-all ease-in-out">
    <ul className="menu menu-horizontal bg-neutral-200 card-body text-black rounded-md dark:bg-neutral-800 dark:text-white duration-300 transition-all ease-in-out">
      <li><a className='lg:text-sm text-xs' href="/changePassword" >Change Password</a></li>
      <li><a className="active lg:text-sm text-xs" href="/dashboard" > Profile</a></li>
      <li><a className='lg:text-sm text-xs' href="/deleteAccount">Delete account</a></li>
    </ul>
    </div>
    <div className="card bg-neutral-100 text-black w-full max-w-sm shrink-0 shadow-2xl dark:bg-neutral-800 dark:text-white duration-300 transition-all ease-in-out">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)} method="dialog">
      <h3 className="font-bold text-lg">Update Profile</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out">First Name</span>
          </label>
          <input type="text" defaultValue={currentUser.firstName} className="input input-bordered bg-neutral-100 border-neutral-300 text-black dark:text-white dark:bg-neutral-800 dark:border-white duration-300 transition-all ease-in-out" required 
          {...register("firstName", { required: true })}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out">Last Name</span>
          </label>
          <input type="text" defaultValue={currentUser.lastName} className="input input-bordered bg-neutral-100 border-neutral-300 text-black dark:text-white dark:bg-neutral-800 dark:border-white duration-300 transition-all ease-in-out" required 
          {...register("lastName", { required: true })}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out">Phone No.</span>
          </label>
          <input type="text" defaultValue={currentUser.phoneNo} className="input input-bordered bg-neutral-100 border-neutral-300 text-black dark:text-white dark:bg-neutral-800 dark:border-white duration-300 transition-all ease-in-out" required
          {...register("phoneNo", { required: true })} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out">Email</span>
          </label>
          <input type="email" defaultValue={currentUser.email} disabled="true" className="input input-bordered bg-neutral-100 border-neutral-300 text-black dark:text-white dark:bg-neutral-500 dark:border-white duration-300 transition-all ease-in-out" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered bg-neutral-100 border-neutral-300 dark:bg-neutral-800 dark:border-white duration-300 transition-all ease-in-out" required 
          {...register("password", { required: true })}/>
          <label className="label">
            <a href="/forgotPassword" className="text-black label-text-alt link link-hover dark:text-white duration-300 transition-all ease-in-out">Forgot password?</a>
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

export default UserDasboard
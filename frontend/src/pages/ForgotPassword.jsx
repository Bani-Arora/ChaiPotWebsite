import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"

function ForgotPassword() {
  
    const [resetPassVisiblity, setResetPassVisibilty] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo ={
      email: data.email
    }
    console.log(userInfo)

    await axios.post("//localhost:4001/user/createOtp",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        
        toast.success("OTP sent on email")
        setResetPassVisibilty(true)
        
      }
      
    }).catch((err)=>{
      if(err.response){
        console.log(err)
        toast.error("error: " + err.response.data.message)
        setTimeout(()=>{},3000)
      }
      
    })
  }

  const onSubmitResetPass = async (data) => {
    const userInfo ={
      email: data.email,
      newPassword : data.newPassword,
      otp : Number(data.otp)
    }
    console.log(typeof(userInfo.otp))

    await axios.post("//localhost:4001/user/resetPassword",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        
        toast.success("Password updated Successfully")
        setTimeout(()=>{
            window.location.reload()
        },2000)
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
    
    
    <div className="card bg-neutral-200 w-full max-w-sm shrink-0 shadow-2xl mt-16 dark:bg-neutral-800 duration-300 transition-all ease-in-out">
      <form className="card-body">
      <h3 className="font-bold text-lg text-black dark:text-white duration-300 transition-all ease-in-out">Reset Password</h3>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out">Email</span>
          </label>
          <input type="email" placeholder="Enter your email"  className="input border-neutral-300 input-bordered bg-neutral-200 text-black dark:text-white dark:bg-neutral-800 dark:border-white duration-300 transition-all ease-in-out" required 
          {...register("email", { required: true })}/>
        </div>
        
        
       { resetPassVisiblity? (
        <div> 
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black  dark:text-white duration-300 transition-all ease-in-out">OTP</span>
          </label>
          <input type="number" placeholder="Enter OTP" className="input input-bordered border-neutral-300 bg-neutral-200 text-black dark:text-white dark:bg-neutral-800 dark:border-white duration-300 transition-all ease-in-out" required 
          min="100000" max="999999"
          {...register("otp", { required: true })}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black  dark:text-white duration-300 transition-all ease-in-out">New password</span>
          </label>
          <input type="password" placeholder="New password" className="input input-bordered border-neutral-300 bg-neutral-200 text-black dark:text-white dark:bg-neutral-800 dark:border-white duration-300 transition-all ease-in-out" required 
          {...register("newPassword", { required: true })}/>
        </div>
        <label className="label">
            <a onClick={handleSubmit(onSubmit)} className="label-text-alt link link-hover text-black dark:text-white duration-300 transition-all ease-in-out ">Resend OTP</a>
          </label>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-blue-700 text-white  dark:bg-sky-900 dark:text-white dark:border-sky-900 duration-300 transition-all ease-in-out" onClick={handleSubmit(onSubmitResetPass)}>Reset Password</button>
          
        </div>
        </div>) : (
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-blue-700 text-white  dark:bg-sky-900 dark:text-white dark:border-sky-900 duration-300 transition-all ease-in-out" onClick={handleSubmit(onSubmit)}>Send OTP</button>
        </div>
        )}
        
      </form>
    </div>
  </div>
</div>

      
    <Footer/>    
    </div>
  )
}

export default ForgotPassword
import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"

function Signup() {
  const location=useLocation()
  const from=location.state?.from?.pathname || "/"
  const navigate = useNavigate()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo ={
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNo: data.phoneNo,
      password: data.password

    }
    await axios.post("//localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Signup successful")
        navigate(from,{replace:true})
        localStorage.setItem("Users",JSON.stringify(res.data.user))
        
      }
    }).catch((err)=>{
      if(err.response){
        console.log(err)
        toast.error("error: " + err.response.data.message)
      }
      
    })
  }

  return (
    <div>
      <Navbar/>
    <div className='flex h-screen bg-white items-center justify-center lg:pt-16 dark:bg-neutral-900 duration-300 transition-all ease-in-out '>
        <div id="my_modal_3" className="border text-black shadow-md  px-10 py-10 rounded-lg lg:mt-24 bg-neutral-100 shadow shadow-2xl dark:text-white dark:bg-neutral-800 duration-300 transition-all ease-in-out">
        <div className="">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      
    
    <h3 className="font-bold text-lg">Register</h3>
    
    {/*First Name*/}
    <div className="mt-4 space-y-2">
        <span>First Name</span><br/>
        <input type="text"
        placeholder='Enter your first name '
        className="w-80 px-3 py-1 border rounded-md bg-neutral-100 outline-none text-black dark:text-white dark:bg-neutral-800 duration-300 transition-all ease-in-out" 
        {...register("firstName", { required: true })}/>
         <br/>
         {errors.firstName && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

    {/*Last Name */}
    <div className="mt-4 space-y-2">
        <span>Last Name</span><br/>
        <input type="text"
        placeholder='Enter your last name'
        className="w-80 px-3 py-1 border rounded-md outline-none bg-neutral-100 text-black dark:text-white dark:bg-neutral-800 duration-300 transition-all ease-in-out" 
        {...register("lastName", { required: true })}/>
         <br/>
         {errors.lastName && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    
    {/*Email */}
    <div className="mt-4 space-y-2">
        <span>Email</span><br/>
        <input type="email"
        placeholder='Enter your Email'
        className="w-80 px-3 py-1 border rounded-md outline-none bg-neutral-100 text-black dark:text-white dark:bg-neutral-800 duration-300 transition-all ease-in-out" 
        {...register("email", { required: true })}/>
         <br/>
         {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

    {/*Ph no. */}
    <div className="mt-4 space-y-2">
        <span>Phone no.</span><br/>
        <input type="text"
        placeholder='Enter your phone no.'
        className="w-80 px-3 py-1 border rounded-md outline-none bg-neutral-100 text-black dark:text-white dark:bg-neutral-800 duration-300 transition-all ease-in-out"
        {...register("phoneNo", { required: true })} />
         <br/>
         {errors.phoneNo && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

    {/*Password */}
    <div className="mt-4 space-y-2">
        <span>Password</span><br/>
        <input type="password"
        placeholder='Enter your Password'
        className="w-80 px-3 py-1 border rounded-md outline-none bg-neutral-100 text-black dark:text-white dark:bg-neutral-800 duration-300 transition-all ease-in-out" 
        {...register("password", { required: true })}/>
         <br/>
         {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className="flex justify-around mt-4">
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Register</button>
        <p>
            Have account?{" "} 
            <NavLink to="/"
            className="underline text-blue-500 cursor-pointer">Login</NavLink>
            
            {" "}</p>
    </div>
    </form>
  </div>
</div>
    </div>
    <div className='bg-white dark:bg-neutral-900 duration-300 transition-all ease-in-out lg:h-40'></div>
    <Footer/>
    </div>
  )
}

export default Signup
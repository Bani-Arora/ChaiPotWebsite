import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import emailjs from '@emailjs/browser'
import toast from "react-hot-toast"



function Jobs() {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const[link,setLink]=useState('')
  const[role,setRole]=useState('')
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    const serviceId = ""
    const templateId = ""
    const publicKey =  ""

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      from_resume: link,
      from_role: role,
      to_name: "Chai Pot"

    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response)=>{
      console.log("Email sent Successfully",response)
      toast.success("Message sent successfully")
      setName('')
      setEmail('')
      setPhone('')
      setLink('')
      setRole('')
    })
    .catch((error)=>{
      console.error('Error sending email:',error)
    })

  }  
  return (
    
    <div>
        <Navbar/>
          <div className="hero bg-neutral-100 text-black min-h-screen pt-16 dark:bg-neutral-900 dark:text-white duration-300 transition-all ease-in-out">
          <div className="mb-8 hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Work with us!</h1>
              <p className="py-6">
              At Chai Pot, we are always looking for passionate and dedicated individuals to join our team. If you love chai, have a knack for hospitality, and enjoy working in a friendly and dynamic environment, we'd love to hear from you!
              </p>
            </div>
            <div className="card bg-white dark:bg-neutral-800 dark:text-white w-full max-w-sm shrink-0 shadow-2xl lg:mx-16 duration-300 transition-all ease-in-out">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out">Full name</span>
                  </label>
                  <input type="text" value={name} placeholder="Full name" className="input input-bordered bg-white border-neutral-300 dark:bg-neutral-800 dark:border-white duration-300 transition-all ease-in-out" required 
                  onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out">Email</span>
                  </label>
                  <input type="email" value={email}  placeholder="email" className="input input-bordered bg-white border-neutral-300 dark:bg-neutral-800 dark:border-white duration-300 transition-all ease-in-out" required
                  onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out">Phone no.</span>
                  </label>
                  <input type="tel" value={phone} placeholder="phone no." className="input input-bordered bg-white border-neutral-300 dark:bg-neutral-800 dark:border-white duration-300 transition-all ease-in-out" required 
                  maxlength="10" minlength="10"
                  onChange={(e)=>setPhone(e.target.value)} />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out">Role</span>
                  </label>
                  <input type="text" value={role} placeholder="Role" className="input input-bordered bg-white border-neutral-300 dark:bg-neutral-800 dark:border-white duration-300 transition-all ease-in-out" required 
                  onChange={(e)=>setRole(e.target.value)}/>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out">Resume link</span>
                  </label>
                  <input type="text" value={link} placeholder="Resume link" className="input input-bordered bg-white border-neutral-300 dark:bg-neutral-800 dark:border-white duration-300 transition-all ease-in-out" required 
                  onChange={(e)=>setLink(e.target.value)}/>
                </div>
                
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary text-white bg-blue-700 dark:bg-sky-900 dark:text-white duration-300 transition-all ease-in-out">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Jobs
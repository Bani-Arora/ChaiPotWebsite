import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import emailjs from '@emailjs/browser'
import toast from "react-hot-toast"



function ContactUs() {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const[message,setMessage]=useState('')
  

  const handleSubmit = (e) =>{
    e.preventDefault()
    const serviceId = ""
    const templateId = ""
    const publicKey =  ""

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: message,
      to_name: "Chai Pot"

    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response)=>{
      console.log("Email sent Successfully",response)
      toast.success("Message sent successfully")
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    })
    .catch((error)=>{
      console.error('Error sending email:',error)
    })

  }  
  return (
    
    <div>
        <Navbar/>
          <div className="hero bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white min-h-screen pt-16 duration-300 transition-all ease-in-out">
          <div className=" mb-8 hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Get in touch!</h1>
              <p className="py-6">
              We'd love to hear from you! Whether you have questions, feedback, or simply want to say hello, feel free to reach out to us. Fill out the contact form below, and we'll get back to you as soon as possible.
              </p>
            </div>
            <div className="card bg-white dark:bg-neutral-800 dark:text-white w-full max-w-sm shrink-0 shadow-2xl lg:mx-16 duration-300 transition-all ease-in-out">
              <form onSubmit={handleSubmit} className="card-body ">
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out  ">Full name</span>
                  </label>
                  <input type="text" value={name} placeholder="Full name" className="bg-white input input-bordered dark:bg-neutral-800 dark:border-white border-neutral-300 duration-300 transition-all ease-in-out" required 
                  onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out">Email</span>
                  </label>
                  <input type="email" value={email}  placeholder="email" className="bg-white input input-bordered dark:bg-neutral-800 dark:border-white border-neutral-300 duration-300 transition-all ease-in-out" required
                  onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out">Phone no.</span>
                  </label>
                  <input type="tel" value={phone} placeholder="phone no." className="bg-white input input-bordered dark:bg-neutral-800 dark:border-white border-neutral-300 duration-300 transition-all ease-in-out" required 
                  maxlength="10" minlength="10"
                  onChange={(e)=>setPhone(e.target.value)} />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black dark:text-white duration-300 transition-all ease-in-out">Message</span>
                  </label>
                  <textarea cols="30" rows="10" value={message} className="bg-white input input-bordered dark:bg-neutral-800 dark:border-white border-neutral-300 duration-300 transition-all ease-in-out" placeholder="Type your message..." style={{height:"90px"}} required
                  onChange={(e)=>setMessage(e.target.value)} ></textarea>
                  
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary text-white bg-blue-700 dark:bg-sky-900 dark:text-white dark:border-sky-900 duration-300 transition-all ease-in-out">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs
import React from 'react'
import Home from '../src/pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import {Navigate, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup'
import toast, {Toaster} from "react-hot-toast"  
import { useAuth } from './context/AuthProvider'
import UserDasboard from './pages/UserDasboard'
import NotFound from './pages/NotFound'
import ChangePassword from './pages/ChangePassword'
import DeleteAccount from './pages/DeleteAccount'
import ForgotPassword from './pages/ForgotPassword'
import Jobs from './pages/Jobs'




const App = () => {
  
  const[authUser,setAuthUser]=useAuth();
  console.log(authUser);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/dashboard' element={authUser? <UserDasboard/> : <Navigate to="/signup"/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/changePassword' element={authUser? <ChangePassword/> : <Navigate to="/signup"/>}/>
        <Route path='/deleteAccount' element={authUser? <DeleteAccount/> : <Navigate to="/signup"/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        

      </Routes>
      <Toaster/>
      
    </div>
  )
}

export default App
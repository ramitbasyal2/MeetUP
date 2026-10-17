import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Routes,Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Sessions from './pages/Sessions'
import Pricing from './pages/Pricing'
import ProtectedRoute from './components/ProtectedRoute'
import ProtectedLayout from './components/ProtectedLayout'
import MeetingRoom from './pages/MeetingRoom'

const App = () => {
  return (
    <>
    <Toaster/>
    <Routes>
       {/* public routes */}
       <Route path="/login" element={<Login mode="login"/>} />
       <Route path="/register" element={<Login mode="register"/>} />

       {/* private routes */}
       <Route element={<ProtectedRoute/>}>
         <Route element={<ProtectedLayout/>}>
           <Route path="/dashboard" element={<Dashboard/>} />
           <Route path='/sessions' element={<Sessions/>} />
           <Route path='/pricing' element={<Pricing/>} />
         </Route>
         <Route path='/meeting/:meetingId' element={<MeetingRoom/>} />
       </Route>

       {/* other routes ||  ungestired routes handling*/}
       <Route path="*" element={<Navigate replace to="/dashboard" />} />
    </Routes>
    </>
  )
}

export default App
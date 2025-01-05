import React, {
  useState

} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';



import CreateEvents from './pages/CreateEvents';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Collections from './components/Collections';
import Eventveiw from './components/Eventveiw';
import SucessPage from './components/SucessPage';
import Failedpage from './components/FailedPage';
import Login from './pages/Login';
import Forgetpassword from './pages/forgetpassword';
import Signup from './pages/SignUp';
import MainPage from './components/MainPage';
import Admin from './components/Admin/Admin';
import Events from './components/Admin/Events';
import AdminLogin from './components/Admin/AdminLogin';
import MyBookings from './components/MyBookings';





function App() {
  
  return (
   
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path="/home" element={<Hero />} />
          <Route path='/create-events' element={<CreateEvents />} />
          <Route path='/All Events' element={<Collections />} />
          
          <Route path='/eventdeatils/:id' element={<Eventveiw />} />
          <Route path='/success' element={<SucessPage />} />
          <Route path='/failed' element={<Failedpage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgetpassword' element={<Forgetpassword />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admin/dashboard' element={<Admin />} />
          <Route path='/admin/events' element={<Events />} />
          <Route path='/admin/login' element={<AdminLogin />} />

        </Routes>
        <Footer />
      </Router>

  )
}

export default App
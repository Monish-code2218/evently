import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import { AuthProvider } from './context/AuthContext';

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




function App() {

  return (
    <Router>
      <AuthProvider>
        <Navbar />
         <Routes>
         
          <Route path="/" element={<Hero />} />
          <Route path='/create-events' element={<CreateEvents />} />
          <Route path='/All Events' element={<Collections />} />
          <Route path='/eventdeatils/:id' element={<Eventveiw />} />
          <Route path='/success' element={<SucessPage />} />
          <Route path='/failed' element={<Failedpage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgetpassword' element={<Forgetpassword />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
        
      </AuthProvider>
      
    </Router>
  )
}

export default App
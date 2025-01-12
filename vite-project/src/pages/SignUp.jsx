import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Toast from '../components/Toast'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [toast, setToast] = useState({ open: false, severity: '', message: '' })
  const navigate = useNavigate();


  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://evently-1-ivhc.onrender.com/signup', { email, password });
      localStorage.setItem('token', response.data.token);
      setToast({
        open: true,
        severity: 'Sucess',
        message: 'Signup successful'
      });
      console.log('Signup successful:', response.data);


    } catch (error) {
      console.error('Signup failed:', error);
    }
  }

  const handleClick = async () => {
    navigate("/login")

  }

  return (
    <section className="bg-gray-100">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-black">
              Create an account
            </h1>
            <form onSubmit={handleSignup} className="space-y-4 md:space-y-6" action="">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email " className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-black">Confirm password</label>
                <input type="password" name="confirm-password" id="confirm-password" value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light  text-black"> I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div>

              <button onClick={handleClick} className="w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
              <Toast
                open={toast.open}
                setOpen={(open) => setToast((prev) => ({ ...prev, open }))}
                severity={toast.severity}
                message={toast.message}
              />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Signup
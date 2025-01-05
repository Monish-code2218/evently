import React, { useState } from 'react'
import { Link, } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import Toast from '../components/Toast'
import axios from 'axios'



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [toast, setToast] = useState({ open: false, severity: '', message: '' })
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://evently-1-ivhc.onrender.com/signin', { email, password });
            localStorage.setItem('token', response.data.token);
            setToast({
                open: true,
                severity: 'Sucess',
                message: 'Login successful'
            });
            console.log('Login successful:', response.data);
            navigate('/home');
        } catch (error) {
            
            console.error('Login failed:', error);
        }
    }



    return (


        <section className="bg-gray-100 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen  lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold bg-white text-gray-900 ">
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Sign in to Evently
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input type="email" name="email" id="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" value={password}
                                    onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to="/forgetpassword">Forgot password</Link></a>
                            </div>
                            <br />
                            <Link to="/home">
                                <button onSubmit={handleSubmit}  className="w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in </button>
                            </Link>
                            <Toast
                                open={toast.open}
                                setOpen={(open) => setToast((prev) => ({ ...prev, open }))}
                                severity={toast.severity}
                                message={toast.message}
                            />


                            <GoogleOAuthProvider clientId="1030430841351-amln6eogpn6rv6fhshc5helmp47ia51g.apps.googleusercontent.com">
                                <GoogleLogin

                                    onSuccess={credentialResponse => {
                                        console.log(credentialResponse),
                                        setToast({
                                            open: true,
                                            severity: 'success',
                                            message: 'Login Successfully',
                                        });
                                        setTimeout(() => {
                                            navigate('/home');
                                        }, 1200);
                                        
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                   
                                />
                            </GoogleOAuthProvider>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account yet? <a href="#" className="font-medium text-primary-600 bg- hover:underline dark:text-primary-500"><Link to="/signup">Sign up</Link></a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
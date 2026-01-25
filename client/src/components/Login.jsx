import React, { useEffect, useState, useContext } from 'react';
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import axios from 'axios'

const Login = () => {
    const [state, setState] = useState('Login');
    const { setShowLogin, setToken, setUser } = useContext(AppContext);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (state == 'Login') {
                const { data } = await axios.post('https://imagi-fy-eta.vercel.app/api/user/login', { email, password })

                if (data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                } else {
                    toast.error("ONsubmithandler error: " + data.message)
                }
            } else {
                const { data } = await axios.post('https://imagi-fy-eta.vercel.app/api/user/register', { name, email, password })
                if (data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                } else {
                    toast.error(data.message)
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset'
        }
    })
    return (
        <motion.div

            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=' fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-xs bg-black/15 flex justify-center items-center'>

            <form onSubmit={onSubmitHandler} className='relative bg-white p-6 sm:p-10 rounded-xl text-slate-500 mx-4 w-full sm:w-auto max-w-sm'>

                <h1 className='text-center text-xl sm:text-2xl text-neutral-700 font-medium'>{state}</h1>
                <p className='text-xs sm:text-sm mt-2'>Welcome back! Please sign in to continue.</p>

                {state !== 'Login' &&
                    <div className='border px-4 sm:px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                        <img src={assets.email_icon} className='w-4 sm:w-5' alt="" />
                        <input type="text" onChange={e => setName(e.target.value)} value={name} className='outline-none text-xs sm:text-sm flex-1' placeholder='Name' required />
                    </div>}

                <div className='border px-4 sm:px-6 py-2 flex items-center gap-2 rounded-full mt-3 sm:mt-4'>
                    <img src={assets.email_icon} className='w-4 sm:w-5' alt="" />
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email} className='outline-none text-xs sm:text-sm flex-1' placeholder='Email' required />
                </div>

                <div className='border px-4 sm:px-6 py-2 flex items-center gap-2 rounded-full mt-3 sm:mt-4'>
                    <img src={assets.lock_icon} className='w-4 sm:w-5' alt="" />
                    <input type="password" onChange={e => setPassword(e.target.value)} value={password} className='outline-none text-xs sm:text-sm flex-1' placeholder='Password' required />
                </div>

                <p className='text-xs sm:text-sm text-blue-600 my-3 cursor-pointer'>Forgot password?</p>

                <button className='bg-blue-600 cursor-pointer w-full text-white py-2 rounded-full text-sm sm:text-base'>{state == 'Login' ? 'Login' : 'create account'}</button>

                {state === 'Login' ?
                    <p className='mt-5 text-center text-xs sm:text-sm'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Sign up')}>Sign up</span></p> :
                    <p className='mt-5 text-center text-xs sm:text-sm'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Login')}>Login</span></p>}
                <img
                    src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)} className='absolute top-5 right-5 cursor-pointer  ' />

            </form>
        </motion.div>
    )
}

export default Login

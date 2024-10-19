import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const location = useLocation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const registeredEmail = location.state ? location.state.email : ''
    const registeredPassword = location.state ? location.state.password : ''

    const LoginHAndler = (e) => {
        e.preventDefault()
        if (!registeredEmail || !registeredPassword) {
            setErrorMessage('No user found. Please sign up first.')
        } else if (email !== registeredEmail) {
            setErrorMessage('Email not found.')
        } else if (password !== registeredPassword) {
            setErrorMessage('Incorrect password.')
        } else {
            setErrorMessage('')
            navigate('/BookPage')
        }
    }

    const EmailHAndler = (e) => {
        setEmail(e.target.value)
    }

    const PasswordHAndler = (e) => {
        setPassword(e.target.value)
    }

    const goToSignUp = () => {
        navigate('/signup')
    }

    return (
        <div className="relative h-screen">
            <div className="min-h-max w-full">
                <img src="library-book-bookshelf-read.jpg" className="w-full min-h-screen" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="flex bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
                    <div className='py-16 mr-10'>
                        <div>
                            <p className="text-3xl font-bold text-center font-serif text-yellow-950">Welcome!</p>
                            <p className="text-lg font-medium mb-8 text-center font-serif text-yellow-950">Enter Your Credentials</p>
                        </div>
                        <p className="text-red-500 text-center">
                            {errorMessage ? errorMessage : null}
                        </p>

                        <div className='relative flex justify-between mb-5'>
                            <i className="absolute left-3 text-xl text-yellow-950 fa fa-envelope"></i>
                            <input type='email' name='Email' value={email} placeholder='Enter your Email' onChange={EmailHAndler} className='pl-10 w-72 h-8 border border-gray-300 rounded-md shadow-sm' required />
                        </div>
                        <div className='relative flex justify-between mb-5'>
                            <i className="absolute left-3 text-2xl text-yellow-950 fa fa-lock"></i>
                            <input type='password' name='Password' value={password} placeholder='Enter your Password' onChange={PasswordHAndler} className='pl-10 w-72 h-8 border border-gray-300 rounded-md shadow-sm' required />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <button className="bg-yellow-950 hover:bg-yellow-800 font-serif text-white py-2 px-6 rounded-lg" onClick={LoginHAndler}>Login</button>
                            <p className='text-sm font-medium text-center font-serif text-yellow-950'>
                                Not Account yet?<span className="text-lg text-blue-500 hover:underline cursor-pointer" onClick={goToSignUp}>Sign up</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src='photo-1481627834876-b7833e8f5570.jpg' className='w-80 h-80' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

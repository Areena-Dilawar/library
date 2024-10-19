import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()
    const [username, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const SignUpHandler = (e) => {
        e.preventDefault()

        if (!email.includes('@') || !email.includes('.')) {
            setErrorMessage('Please enter a valid email address.')
            return
        }

        if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters long.')
            return
        }

        setErrorMessage('')
        setName('')
        setEmail('')
        setPassword('')
        navigate('/login', { state: { email, password } })
    }

    const UserHandler = (e) => {
        setName(e.target.value)
    }

    const EmailHandler = (e) => {
        setEmail(e.target.value)
    }

    const PasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    const goToLogin = () => {
        navigate('/login')
    }

    return (
        <div className="relative min-h-max">
            <div className="h-full w-full">
                <img src="library-book-bookshelf-read.jpg" alt="Library Background" className="w-full h-screen " />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 flex-wrap">
                <div className="flex bg-white bg-opacity-70 p-8 rounded-lg shadow-lg flex-wrap">
                    <div className='py-16 mr-10'>
                        <div>
                            <p className="text-black text-3xl font-bold text-center font-serif text-yellow-950">Sign Up</p>
                            <p className="text-black text-lg font-medium mb-10 text-center font-serif text-yellow-950">Create your own Account</p>
                        </div>
                        <p className="text-red-500 text-center">
                            {errorMessage ? errorMessage : null}
                        </p>
                        <div className='relative flex justify-between mb-5'>
                            <i className="absolute left-3 text-2xl text-yellow-950 fa fa-user"></i>
                            <input type='text' name='Username' value={username} placeholder='Enter your Name' onChange={UserHandler} className='pl-10 w-72 h-8 border border-gray-300 rounded-md shadow-sm'required/>
                        </div>
                        <div className='relative flex justify-between mb-5'>
                            <i className="absolute left-3 text-xl text-yellow-950 fa fa-envelope"></i>
                            <input type='email' name='Email' value={email} placeholder='Enter your Email' onChange={EmailHandler} className='pl-10 w-72 h-8 border border-gray-300 rounded-md shadow-sm' required />
                        </div>
                        <div className='relative flex justify-between mb-6'>
                            <i className="absolute left-3 text-2xl text-yellow-950 fa fa-lock"></i>
                            <input type='password' name='Password' value={password} placeholder='Enter your Password' onChange={PasswordHandler} className='pl-10 w-72 h-8 border border-gray-300 rounded-md shadow-sm' required/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <button className="bg-yellow-950 hover:bg-yellow-800 font-serif text-white py-2 px-6 rounded-lg" onClick={SignUpHandler}>Sign up</button>
                            <p className='text-sm font-medium text-center font-serif text-yellow-950'>
                                Already have an Account?<span className="text-lg text-blue-500 hover:underline cursor-pointer" onClick={goToLogin}>Login</span>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center '>
                        <img src='photo-1481627834876-b7833e8f5570.jpg' className='w-80 h-80' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp

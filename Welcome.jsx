import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate();

    const SignUpHAndler = () => {
        navigate('/signup');
    };
    const LoginHAndler = () => {
        navigate('/login');
    };
    return (
        <div className="relative h-screen">
            <div className="h-full w-full">
                <img src="library-book-bookshelf-read.jpg" className="w-full h-full" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                <div className='flex flex-col'>
                    <div className=" mb-4">
                        <p className='text-4xl font-normal font-serif '>Hello,</p>
                        <p className='text-5xl font-serif font-bold '>Welcome to Your Library!</p>
                    </div>
                    <div className='text-xl font-serif mb-8 max-w-screen-md '>
                        <p>Explore a world of books, manage your collection, and discover new reads. Create your own account to get started or log in if you already have an account.</p>
                    </div>
                    <div className="flex gap-5">
                        <button className="text-xl font-serif text-white py-2 px-6 rounded-lg bg-yellow-950 hover:bg-yellow-800 " onClick={SignUpHAndler}> Create Account </button>
                        <button className="text-xl font-serif text-white py-2 px-6 rounded-lg bg-yellow-950 hover:bg-yellow-800 " onClick={LoginHAndler}> Login</button>
                    </div>
                </div>
                {/* <div>
                    <img src='book-5q6xbfxwtbme5kaj.jpg' className='w-96 h-96' />
                </div> */}
            </div>
        </div>
    );
}

export default Welcome;

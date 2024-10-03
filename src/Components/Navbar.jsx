import React from 'react'
import { Login } from '../Components/Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <header class="text-gray-600 body-font bg-slate-600">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav class=" flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                        <Router>
                            <Link to='/login'><button>login</button></Link>

                        </Router>
                        <a class="mr-5 text-black hover:text-white cursor-pointer" href={Login}>Gallery</a>
                        <a class="mr-5 text-black hover:text-white  cursor-pointer" >Login</a>

                    </nav>

                    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar

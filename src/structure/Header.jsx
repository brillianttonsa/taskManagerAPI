import {Menu, Plus} from 'lucide-react'
import { useState } from 'react'

function Header(){
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    return(
        <header className='sticky z-100 top-0 bg-white'>
            <div className='container'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex **:items-center'>
                        <span className="text-2xl">✅</span>
                        <span className='text-xl ml-2 font-bold text-gray-800'>TaskManagement</span>
                    </div>
                    <nav className='hidden md:flex space-x-10 '>
                        <a href="/" className='nav-links'>Home</a>
                        <a href="#features" className='nav-links'>Features</a>
                        <a href="#contacts" className='nav-links'>Contact</a>
                    </nav>
                    <div className='hidden md:flex items-center space-x-2'>
                        <a href="/signin" className='text-gray-800 hover:text-emerald-500 p-2'>Login</a>
                        <a href="/signup" className='bg-emerald-600 text-white hover:bg-emerald-700 transition-colors px-4 py-2 rounded-md'>Sign Up</a>
                    </div>
                    <div className='md:hidden'>
                        <button className='text-gray-600 hover:text-emerald-600' onClick={()=> setIsMenuOpen(!isMenuOpen)}>{isMenuOpen?<Plus/>:<Menu/>}</button>
                    </div>
                    
                </div>
            </div>
            {isMenuOpen && (
                        <div className='md:hidden bg-white'>
                            <div className='container py-4 space-y-3 text-center'>
                                <a href="#home" className='nav-links block'>Home</a>
                                <a href="#features" className='nav-links block'>Features</a>
                                <a href="#contacts" className='nav-links block'>Contact</a>
                                <div className='pt-4 border-t border-gray-300 flex flex-col space-y-3'>
                                    <a href="/signin" className='nav-links p-2 block'>Login</a>
                                    <a href="/signup" className='bg-emerald-500 text-gray-800 hover:bg-emerald-600 p-2 rounded block'>Sign Up</a>
                                </div>
                            </div>
                        </div>
                    )}
        </header>
    )
}

export default Header
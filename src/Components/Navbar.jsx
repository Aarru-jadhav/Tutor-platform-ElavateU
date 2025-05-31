
import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main>
      <nav className='w-full h-20 flex justify-between px-6 lg:px-40 items-center relative bg-white shadow-md z-50'>
        
        {/* Logo */}
        <div className='flex justify-center items-center'>
          <img
            src="ChatGPT Image Apr 27, 2025, 10_53_49 AM.png"
            alt="Logo image"
            className='max-w-full h-auto w-32 sm:w-28 md:w-32 lg:w-40'
          />
        </div>

        {/* Nav Items */}
        <div className={`
          transition-all duration-3000 ease-in-out 
          ${isMenuOpen ? 'block' : 'hidden'} 
          absolute top-20 left-0 w-full bg-secondary 
          p-6 lg:static lg:flex lg:bg-transparent lg:text-gray-600 lg:p-0 lg:w-auto lg:items-center
        `}>
          <ul className='flex flex-col lg:flex-row gap-5 font-semibold text-center text-[20px] text-black'>
            <li>Home</li>
            <li>Course</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Buttons Section */}
        <div className='hidden lg:flex items-center gap-6'>
          <button id='signup' className='px-4 py-2 w-28 text-black font-semibold focus:outline-none focus:ring-0'>
            Sign Up
          </button>
          <button id='register' className='px-4 w-36 h-9 bg-secondary rounded-full text-center text-white font-semibold'>
            Register
          </button>
        </div>

        {/* Hamburger Menu Icon */}
        <div className='lg:hidden py-6 px-6'>
          <FaBars 
            className='text-3xl cursor-pointer' 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          />
        </div>
      </nav>
    </main>
  );
}

export default Navbar;

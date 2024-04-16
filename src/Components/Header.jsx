import React from 'react'
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'

import { NavLink } from 'react-router-dom'
import { useState } from 'react'


const Header = () => {

      const [isNavbarVisible, setIsNavbarVisible] = useState(false);

        const handleNavbar = () => {
            setIsNavbarVisible(!isNavbarVisible);
        }



  return (
    <main className="header absolute z-50 h-28 w-full bg-transparent flex justify-between items-center">
     <div className="logo bg-white rounded-3xl  m-4 md:m-8">
        <img src={logo} alt="site logo" />
     </div>
     <div className="hidden lg:block streight-line w-[20rem] bg-gray-600 h-[0.1rem]"></div>

      <div className='sm:hidden'> 
        <button onClick={handleNavbar} className='absolute z-50 top-11 right-8'>
         {isNavbarVisible ? <img src={close}/> : <img src={hamburger}/> }
        </button>
      </div>

        <nav className=' w-[90vw] backdrop-blur-lg sm:w-[80vw] md:w-[70vw] min-h-fit hidden sm:flex sm:justify-center sm:items-center'>
            <NavLink className='navlink' to='/'> <span className='mx-2 font-bold'>00</span>Home</NavLink>
            <NavLink className='navlink' to='destination'> <span className='mx-2 font-bold'>01</span>Destination</NavLink>
            <NavLink className='navlink' to='crew'> <span className='mx-2 font-bold'>02</span>Crew</NavLink>
            <NavLink className='navlink' to='technology'> <span  className='mx-2 font-bold'>03</span>Technology</NavLink>
        </nav>

        {isNavbarVisible && 
        <nav className='w-[80vw] backdrop-blur-lg border-2 mt-auto min-h-screen border-solid border-white  
        tracking-wider font-semibold flex-col justify-center py-[10rem] items-center '>

            <NavLink className='navlink' to='/'> <span className='mx-2 font-bold'>00</span>Home</NavLink>
            <NavLink className='navlink' to='destination'> <span className='mx-2 font-bold'>01</span>Destination</NavLink>
            <NavLink className='navlink' to='crew'> <span className='mx-2 font-bold'>02</span>Crew</NavLink>
            <NavLink className='navlink' to='technology'> <span  className='mx-2 font-bold'>03</span>Technology</NavLink>
        </nav>
        }

    </main>
  )
}

export default Header

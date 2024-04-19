import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import close from '../assets/shared/icon-close.svg';

const Header = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const handleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const closeNavbar = () => {
    setIsNavbarVisible(false);
  };

  return (
    <main className="header absolute z-50 h-28 w-full bg-transparent flex justify-between items-center">
      <div className="logo bg-white rounded-3xl m-4 md:m-8">
        <img src={logo} alt="site logo" />
      </div>

      <div className="sm:hidden">
        <button onClick={handleNavbar} className="absolute z-50 top-11 right-8">
          {isNavbarVisible ? <img src={close} /> : <img src={hamburger} />}
        </button>
      </div>
      <div className="hidden lg:block streight-line lg:w-[50vw] bg-gray-600 h-[0.1rem]"></div>

      <nav
        className={`w-[90vw] backdrop-blur-lg sm:w-[75vw] md:w-[70vw] mb-4 mt-auto min-h-screen ${
          isNavbarVisible ? '' : 'hidden'
        } sm:flex sm:justify-center sm:min-h-fit sm:items-center`}
      >
        <NavLink className="navlink" to="/" onClick={closeNavbar}>
          <span className="mx-2 font-bold">00</span>Home
        </NavLink>
        <NavLink className="navlink" to="/destination" onClick={closeNavbar}>
          <span className="mx-2 font-bold">01</span>Destination
        </NavLink>
        <NavLink className="navlink" to="/crew" onClick={closeNavbar}>
          <span className="mx-2 font-bold">02</span>Crew
        </NavLink>
        <NavLink className="navlink" to="/technology" onClick={closeNavbar}>
          <span className="mx-2 font-bold">03</span>Technology
        </NavLink>
      </nav>
    </main>
  );
};

export default Header;

import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../App';
const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userLogin, setUserLogin] = useContext(userContext);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    let navigate = useNavigate();
    const logout = () => {
        setUserLogin(false);
        sessionStorage.clear();
        navigate("/login", { replace: true });
    }


    return (
        <nav className="bg-theam-color border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap  text-white">Safe Document</span>
                </a>
                <button
                    onClick={toggleMobileMenu}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div
                    className={`${isMobileMenuOpen ? 'block' : 'hidden'
                        } w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-theam-color  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/"> <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">
                                Home
                            </a></Link>
                        </li>
                        <li>
                            <Link to="/VeryfyCerticate">  <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Verify  Certificate
                            </a></Link>
                        </li>

                        {((sessionStorage.getItem("username")) || userLogin === true) ?
                            (<>         <li>
                                <Link to="/userProfile">
                                    <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark-text-white md:dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent">
                                        Profile
                                    </a>
                                </Link>
                            </li>
                                <Link to="/uploadFile">     <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark-text-white md:dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent">
                                        Upload File
                                    </a>
                                </li></Link>
                                <li>
                                    <a onClick={logout} href="#" className="block py-2 pl-3 pr-4 text-white rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark-text-white md:dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent">
                                        Log Out
                                    </a>
                                </li>
                            </>) :
                            <>
                                <li>
                                    <Link to="/Reg"> <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark-text-white md:dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent">
                                        Sign Up
                                    </a></Link>
                                </li>
                                <li>
                                    <Link to="/Login">       <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 dark-text-white md:dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md:dark-hover-bg-transparent">
                                        Sign In
                                    </a></Link>

                                </li></>}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

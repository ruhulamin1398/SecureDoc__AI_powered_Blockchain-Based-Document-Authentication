import axios from 'axios';
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';

const LoginPage = () => {
    const [userLogin, setUserLogin] = useContext(userContext);
    const [visible, setVisible] = useState(false);
    const [visibleR, setVisibleR] = useState(false);
    const [loginUser, setLoginUser] = useState(true);
    const [loginAdmin, setLoginAdmin] = useState(false);
    const [newUser, setNewUser] = useState({
        username: "",
        password_1: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNewUser({
            ...newUser,
            [name]: value,
        });
    }

    const userSubmit = (e) => {
        e.preventDefault();
        const { username, password_1 } = newUser;

        if (username && password_1) {
            axios.post('http://localhost:5000/Singup/login', newUser)
                .then(res => {
                    if (res.data.error) {
                        setVisibleR(true);
                    } else {
                        localStorage.setItem('username', username);
                        localStorage.setItem('StudentLogin', true);
                        localStorage.setItem('Token', res.data.access_token);
                        setVisible(true);
                        setUserLogin(true);
                    }
                });
        }
    }

    useEffect(() => {
        if (visible) {
            const timeout = setTimeout(() => {
                setVisible(false);
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [visible]);

    let navigate = useNavigate();

    useEffect(() => {
        if (userLogin) {
            setTimeout(() => {
                navigate("/userProfile", { replace: true });
            }, 1500);
        }
    }, [userLogin, navigate]);

    return (
        <div className="flex items-center min-h-screen p-4 bg-gray-100 justify-center">
            <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visible ? '' : 'hidden'}`}
            >
                <div className="max-w-xl w-full bg-green-400 text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center">
                    Login Successful
                </div>
            </div>
            <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visibleR ? '' : 'hidden'}`}
            >
                <div className="max-w-xl w-full bg-red-400 text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center">
                    Something Is Wrong. Please Try Again.
                </div>
            </div>
            <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                <div className="p-4 py-6 flex items-center justify-center text-white bg-theam-color md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-30 w-60" alt="" srcSet="" />
                </div>
                {loginUser && !loginAdmin && (
                    <div className="p-5 bg-white md:flex-1">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700">User Login</h3>
                        <form action="#" className="flex flex-col space-y-5">
                            <div className="flex flex-col space-y-1">
                                <label htmlFor="username" className="text-sm font-semibold text-gray-500">Your Name</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    autoFocus
                                    value={newUser.username}
                                    onChange={handleChange}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password_1" className="text-sm font-semibold text-gray-500">Password</label>
                                    <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                                </div>
                                <input
                                    type="password"
                                    id="password_1"
                                    name="password_1"
                                    value={newUser.password_1}
                                    onChange={handleChange}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                                />
                                <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-theam-color rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                    onClick={userSubmit}
                                >
                                    Log in
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                {!loginUser && loginAdmin && (
                    <div className="p-5 bg-white md:flex-1">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700">Admin Login</h3>
                        <form action="#" className="flex flex-col space-y-5">
                            {/* Admin login form inputs go here */}
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginPage;

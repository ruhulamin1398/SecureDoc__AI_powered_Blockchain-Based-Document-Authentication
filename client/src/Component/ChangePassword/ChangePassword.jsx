import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
const ChangePassword = () => {
    const [user, setUser] = useState([]);
    const [visible, setVisible] = useState(false);
    const [visibleR, setVisibleR] = useState(false);
    const [report, setReport] = useState([]);
    const [newUser, setNewUser] = useState({
        password_1: "",
        password_2: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNewUser({
            ...newUser,
            [name]: value,
        });
    }
    let navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/Singup/Profile?username=' + sessionStorage.getItem('username'), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${sessionStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())
            .then(res => setUser(res))
    }, []);
    const userSubmit = (e) => {
        e.preventDefault();
        const { password_1, password_2 } = newUser;
        console.log(password_1, password_2);
        if (password_1 && password_2 && (password_1 === password_2)) {
            axios.put('http://localhost:5000/Singup/ChangePassword?id=' + user[0]._id, newUser, {
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${sessionStorage.getItem("Token")}`
                }
            })
                .then(res => {
                    if (res.data.error) {
                        console.log(res);
                        setVisibleR(true);
                    } else {
                        console.log(res);
                        setVisible(true);
                    }
                });
        } else {
            setVisibleR(true);
        }
    }


    useEffect(() => {
        if (visible) {
            const timeout = setTimeout(() => {
                setVisible(false);

            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [visible]);

    useEffect(() => {
        if (visibleR) {
            const timeout = setTimeout(() => {
                setVisibleR(false);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [visibleR]);
    return (
        <div className="flex items-center min-h-screen p-4 bg-gray-100 justify-center">
            <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visible ? '' : 'hidden'
                    }`}
            >
                <div className="max-w-xl w-full bg-green-400 text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
                    Password Change Successfull
                </div>
            </div>
            <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visibleR ? '' : 'hidden'
                    }`}
            >
                <div className="max-w-xl w-full bg-red-400 text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
                    Someting Is Wrong Try Again
                </div>
            </div>
            <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                <div className="p-5 bg-white md:flex-1">
                    <form onSubmit={userSubmit} className="flex flex-col space-y-5">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700">Change Password</h3>
                        <input
                            type="password"
                            name="password_1"
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            value={newUser.password_1}
                            onChange={handleChange}
                            placeholder="password"
                            required
                        />
                        <input
                            type="password"
                            name="password_2"
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            value={newUser.password_2}
                            onChange={handleChange}
                            placeholder="Re-enter password"
                            required
                        />
                        <button type="submit" name="reg" className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-theam-color rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                            <b>Check Document</b>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
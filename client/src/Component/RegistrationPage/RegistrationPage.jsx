import axios from "axios";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const RegistrationPage = () => {
    const [Teachers, setTeachers] = useState(false);
    const [loginpage, setLoginpage] = useState(false);
    const [user, setUser] = useState(true);
    const [visible, setVisible] = useState(false);
    const [visibleR, setVisibleR] = useState(false);
    const [newUser, setNewUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",

        password_1: "",
        password_2: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value,
        });

    };
    const userSubmit = (e) => {
        e.preventDefault();
        const {
            name,
            username,
            email,
            phone,
            password_1,
            password_2,
        } = newUser;

        if (
            name &&
            username &&
            email &&
            phone &&

            password_1 &&

            password_2 &&
            password_1 === password_2 &&
            password_1 >= 6
        ) {
            axios
                .post(
                    "http://localhost:5000/Singup/user",
                    newUser,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            authorization: `Bearer ${sessionStorage.getItem("Token")}`,
                        },
                    }
                )
                .then((res) => {
                    if (res.data.message === "Signup was successful!") {

                        setVisible(true);
                    } else {

                        setVisibleR(true);
                    }
                });
        } else setVisibleR(true);

    };

    let navigate = useNavigate();
    useEffect(() => {
        loginpage && alert("Sing up Successful");
        loginpage && navigate("/login", { replace: true });
    }, [loginpage]);
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
        <div class="flex items-center min-h-screen p-4 bg-gray-100 justify-center">
            <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visible ? "" : "hidden"
                    }`}
            >
                <div className="max-w-xl w-full bg-green-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
                    Registration Successful
                </div>
            </div>
            <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visibleR ? "" : "hidden"
                    }`}
            >
                <div className="max-w-xl w-full bg-red-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
                    Someing Is Wrong Please Try Again
                </div>
            </div>
            <div class=" overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">

                <div class="p-5 bg-white md:flex-1">
                    <h3 class="my-4 text-2xl font-semibold text-gray-700">
                        Sign Up
                    </h3>
                    <form action="#" class="flex flex-col space-y-5" method="POST">
                        <div class="flex flex-col space-y-1">
                            <label
                                for="email"
                                class="text-sm font-semibold text-gray-500"
                            >
                                Institute  Name
                            </label>
                            <input
                                type="text"
                                id="Institute  Name"
                                name="name"
                                placeholder="Institute  Name"
                                value={newUser.name}
                                onChange={handleChange}
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <label
                                for="email"
                                class="text-sm font-semibold text-gray-500"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email "
                                value={newUser.email}
                                onChange={handleChange}
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>{" "}
                        <div class="flex flex-col space-y-1">
                            <label
                                for="email"
                                class="text-sm font-semibold text-gray-500"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                placeholder="username "
                                value={newUser.username}
                                onChange={handleChange}
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <label
                                for="email"
                                class="text-sm font-semibold text-gray-500"
                            >
                                Phone
                            </label>
                            <input
                                type="number"
                                name="phone"
                                placeholder="phone"
                                value={newUser.phone}
                                onChange={handleChange}
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>



                        <div class="flex flex-col space-y-1">
                            <label
                                for="email"
                                class="text-sm font-semibold text-gray-500"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password_1"
                                placeholder="Password must be greater than 6 digits"
                                value={newUser.password_1}
                                onChange={handleChange}
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <label
                                for="email"
                                class="text-sm font-semibold text-gray-500"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="password_2"
                                placeholder="Confirm Password"
                                value={newUser.password_2}
                                onChange={handleChange}
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-theam-color  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                onClick={userSubmit}
                            >
                                Sing Up
                            </button>
                        </div>

                    </form>
                </div>


            </div>
        </div>
    );
};

export default RegistrationPage;
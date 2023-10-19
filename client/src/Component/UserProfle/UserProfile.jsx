import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Make sure to import Link

const UserProfile = () => {
    const [user, setUser] = useState([]);
    const [report, setReport] = useState([]);
    const [search, setSearch] = useState("");
    const [testname, setTestName] = useState("");

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

    useEffect(() => {
        fetch('http://localhost:5000/Upload/UploadReportPost?username=' + sessionStorage.getItem('username'), {
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => setReport(res))
    }, []);

    return (
        <div className="container mt-20"> {/* Use className instead of class for React components */}
            <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                <div className="mt-3 text-black">
                                    <p className="text-secondary mb-1 font-bold text-black text-2xl">{user[0] && user[0].name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0">Name</h6>
                                <span className="text-secondary text-xl">{user[0] && user[0].name}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0">Email</h6>
                                <span className="text-secondary text-xl">{user[0] && user[0].email}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0">Phone</h6>
                                <span className="text-secondary text-xl">{user[0] && user[0].phone}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <div className="row">
                                    <div className="col-sm-12">
                                        {/* <NavLink to="/EdiProfile"><a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit Profile</a></NavLink> */}
                                        {/* The NavLink should be used with the Link component */}
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <form action="" encType="multipart/form-data">
                                            <input type="file" name="avatar" id="avatar" placeholder="Please Upload Your File" />
                                            <input type="submit" value="Submit" name="submit" placeholder="Submit" />
                                        </form>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Institude Name</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">View Certificate</th>
                                <th scope="col">Delete Certificate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {report.length > 0 && report.map(data => (
                                <tr key={data._id}>
                                    <th scope="row">{data.name}</th>
                                    <td>{data.username}</td>
                                    <td>{data.date}</td>
                                    <td>
                                        <Link to={`/viewReport/${data._id}`}>View Report</Link>
                                    </td>
                                    <td>
                                        <Link to={`/delete/${data._id}`}>   Delete</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;

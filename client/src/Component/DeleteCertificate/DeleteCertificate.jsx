import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const DeleteCertificate = () => {
    const { id } = useParams();
    const deleteItem = () => {
        console.log(id);
        fetch(`http://localhost:5000/Upload/delete/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((res) => {
                // Handle the response as needed
            });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <Modal.Dialog className="bg-white shadow-lg rounded-lg w-96 p-4">
                <Modal.Header className="text-center bg-blue-500 text-white py-2 rounded-t-lg">
                    <Modal.Title className="text-xl font-semibold">Delete Certificate</Modal.Title>
                </Modal.Header>

                <div className="p-4">
                    <p className="text-center text-gray-700">
                        Are you sure you want to delete this certificate?
                    </p>

                    <div className="flex justify-center mt-4">
                        <Link to="/userProfile">
                            <Button
                                className="bg-red-500 text-white hover:bg-red-600 hover:shadow-md py-2 px-6 rounded-full"
                                onClick={() => deleteItem()}
                            >
                                Delete
                            </Button>
                            <Button
                                className="bg-gray-400 text-white hover:bg-gray-500 hover:shadow-md py-2 px-6 rounded-full ml-2"
                            >
                                Cancel
                            </Button>
                        </Link>
                    </div>
                </div>
            </Modal.Dialog>
        </div>
    );
};

export default DeleteCertificate;

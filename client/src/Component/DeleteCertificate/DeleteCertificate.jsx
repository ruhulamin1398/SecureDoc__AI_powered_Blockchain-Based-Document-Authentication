import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './DeleteCertificate.css';

const DeleteCertificate = () => {
    const { id } = useParams();
    const deleteitem = () => {
        console.log(id)
        fetch(`http://localhost:5000/Upload/delete/${id}`, {
            method: 'Delete'
        })
            .then(res => res.json())
            .then(res => {

            }
            )
    }
    return (
        <div className="model">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Are Your Sure You Wan't To Delete Certificate?</Modal.Title>
                </Modal.Header>



                <div className='deleteFooter'>
                    <Link to="/userProfile">
                        <Button className='bg-green-400' onClick={() => deleteitem()}>Delete</Button>
                        <Button className="bg-red-400">Cencle</Button>
                    </Link>

                </div>
            </Modal.Dialog>
        </div>
    );
};

export default DeleteCertificate;
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Usercontext } from '../Usercontext/Usercontext';
import './Delete.css'


const Delete = () => {
    const [users, setUsers] = useContext(Usercontext);
    const { id } = useParams();
    // console.log(users[id]);

    const deleteUser = (id) => {
        const user = users.filter((user) => user.id !== id);
        setUsers([user]);
    };

    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Are You Sure?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Link to="/">
                        <Button className="delete__btn" variant="info">Cancel</Button>
                        <Button onClick={() => deleteUser(id)} variant="danger">
                            Delete
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default Delete;
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Usercontext } from '../Usercontext/Usercontext';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Read.css'
const Read = () => {
    const [users, setUser] = useContext(Usercontext);
    const { id } = useParams();

    const user = users.filter((user) => user.id !== id);
    // setUsers([user]);
    return (
        <div className='read'>
            <h1>ID: {user[0].id}</h1>
            <h1>Name: {user[0].name}</h1>
            <h1>Position: {user[0].position}</h1>
            <h1>Salary: {user[0].salary} /= </h1>
            <Link to="/">
                <Button variant="info">
                    Back to Home
                </Button>
            </Link>

        </div>
    );
};

export default Read;
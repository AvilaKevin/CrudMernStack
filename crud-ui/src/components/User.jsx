import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

function User() {
    return (
        <div className='Container'>
            <div>
                <h1>pepe</h1>
                <FiEdit />
                <FiTrash />
            </div>

            <div>
                <h2>Email</h2>
                <p>pepe@sadfa.com</p>

                <h2>Phone Number</h2>
                <p>123123123</p>
            </div>

        </div>
    )
};

export default User;
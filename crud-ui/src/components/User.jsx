import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import Styles from '../css/componentsCss/User.module.css';
import axios from 'axios';

function User({ customer, fetchCustomers }) {

    const handleDelete = async () => {
        await axios.delete(`deleteUser/${customer._id}`)
        fetchCustomers()
    }

    return (
        <div className={Styles.Container}>
            <div className={Styles.headUserContainer}>
                <h1 className={Styles.h1}>{customer.name}</h1>
                <div className={Styles.Icons} >
                    <i><FiEdit /></i>
                    <i><FiTrash onClick={handleDelete} /></i>
                </div>
            </div>

            <div>
                <div className={Styles.fields}>
                    <h2 className={Styles.h2}>Email</h2>
                    <p className={Styles.p}>{customer.email}</p>
                </div>

                <div className={Styles.fields}>
                    <h2 className={Styles.h2}>Phone Number</h2>
                    <p className={Styles.p}>{customer.number}</p>
                </div>
            </div>

        </div>
    )
};

export default User;
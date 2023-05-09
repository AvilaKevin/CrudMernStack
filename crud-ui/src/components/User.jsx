import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import Styles from '../css/componentsCss/User.module.css';

function User({ customer }) {
    return (
        <div className={Styles.Container}>
            <div className={Styles.headUserContainer}>
                <h1 className={Styles.h1}>{customer.name}</h1>
                <div className={Styles.Icons} >
                    <FiEdit />
                    <FiTrash />
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
import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import Styles from '../css/componentsCss/User.module.css';

function User() {
    return (
        <div className={Styles.Container}>
            <div className={Styles.headUserContainer}>
                <h1 className={Styles.h1}>Christian Espinoza</h1>
                <div className={Styles.Icons} >
                    <FiEdit />
                    <FiTrash />
                </div>
            </div>

            <div>
                <div className={Styles.fields}>
                    <h2 className={Styles.h2}>Email</h2>
                    <p>kevin@sadfa.com</p>
                </div>

                <div className={Styles.fields}>
                    <h2 className={Styles.h2}>Phone Number</h2>
                    <p>123123123</p>
                </div>
            </div>

        </div>
    )
};

export default User;
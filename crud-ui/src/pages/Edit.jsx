import React, { useEffect, useState } from 'react'
import Styles from '../css/pagesCss/Create.module.css';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Edit() {

    const [customer, setCustomer] = useState({});
    const [inputs, setInputs] = useState({});

    // Se usa split pa capturar solo el id
    const path = useLocation().pathname.split("/")[2];

    const navigate = useNavigate();

    // FETCH A USER
    useEffect(() => {
        const fetchCustomer = async () => {
            const res = await axios.get(`/getUser/${path}`)
            setCustomer(res.data)
        }

        fetchCustomer()
    }, []);

    // SAVE THE VALUE INPUTS
    const handleInputs = (e) => {
        setInputs((prev) => {
            // prev = a los inputs almacenados anteriormente
            // crea un objeto con los inputs previos y crea otro con el campo name y value
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    // UPDATE USER
    const handleData = async (e) => {

        e.preventDefault();

        const res = await axios.put(`/updateUser/${path}`, { ...inputs });

        if (res.status === 200) {
            navigate("/")
            alert("User updated!")
        } else {
            alert("Error trying to update user")
        };
    };



    return (
        <div className={Styles.Container}>

            <div className={Styles.FormContainer}>

                <h1 className={Styles.h1}>Edit Customer</h1>

                <form className={Styles.Form}>

                    <label htmlFor="name" className={Styles.Label}>Name</label>
                    <input type="text" id="name" name="name" defaultValue={customer.name} className={Styles.InputWhitoutIcon} onChange={handleInputs} />

                    <label htmlFor="email" className={Styles.Label}>E-mail</label>
                    <div>
                        <i className={Styles.icon}>
                            <HiOutlineMail />
                        </i>
                        <input type="email" id="email" name="email" defaultValue={customer.email} className={Styles.Input} onChange={handleInputs} />
                    </div>

                    <label htmlFor="phone" className={Styles.Label}>Phone Number</label>
                    <div>
                        <i className={Styles.icon}>
                            <BsPhone />
                        </i>
                        <input type="tel" id="phone" name="number" defaultValue={customer.number} className={Styles.Input} onChange={handleInputs} />
                    </div>

                    <button className={Styles.CreateButton} onClick={handleData}>
                        Save changes
                    </button>
                    <button className={Styles.DiscardButton} >
                        Discard
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Edit
import { useState } from 'react';
import Styles from '../css/pagesCss/Create.module.css';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    // SAVE THE VALUE INPUTS
    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    // CREATE A USER
    const handleUpload = async (e) => {
        e.preventDefault();

        const res = await axios.post('/userCreation', { ...inputs });
        res.status === 200 && navigate('/');

        alert('Customer created');
    };

    return (
        <div className={Styles.Container}>
            <div className={Styles.FormContainer}>
                <h1 className={Styles.h1}>Create Customer</h1>

                <form className={Styles.Form}>
                    <label htmlFor='name' className={Styles.Label}>
                        Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Kevin'
                        className={Styles.InputWhitoutIcon}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor='email' className={Styles.Label}>
                        E-mail
                    </label>
                    <div>
                        <i className={Styles.icon}>
                            <HiOutlineMail />
                        </i>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='example@gmail.com'
                            className={Styles.Input}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <label htmlFor='phone' className={Styles.Label}>
                        Phone Number
                    </label>
                    <div>
                        <i className={Styles.icon}>
                            <BsPhone />
                        </i>
                        <input
                            type='tel'
                            id='phone'
                            name='number'
                            placeholder='3632941994'
                            className={Styles.Input}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className={Styles.CreateButton} onClick={handleUpload}>
                        Create
                    </button>

                    <button className={Styles.DiscardButton} onClick={() => navigate('/')}>
                        Discard
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Create;

import React from 'react';
import Styles from '../css/pagesCss/Create.module.css';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';


function Create() {
    return (
        <div className={Styles.Container}>

            <div className={Styles.FormContainer}>

                <h1 className={Styles.h1}>Create Customer</h1>

                <form className={Styles.Form}>

                    <label htmlFor="name" className={Styles.Label}>Name</label>
                    <input type="text" id="name" name="name" placeholder='Kevin' className={Styles.InputWhitoutIcon} />

                    <label htmlFor="email" className={Styles.Label}>E-mail</label>
                    <div>
                        <i className={Styles.icon}>
                            <HiOutlineMail />
                        </i>
                        <input type="email" id="email" name="email" placeholder='example@gmail.com' className={Styles.Input} />
                    </div>

                    <label htmlFor="phone" className={Styles.Label}>Phone Number</label>
                    <div>
                        <i className={Styles.icon}>
                            <BsPhone />
                        </i>
                        <input type="tel" id="phone" name="phone" placeholder='3632941994' className={Styles.Input} />
                    </div>

                    <button className={Styles.CreateButton}>
                        Create
                    </button>
                    <button className={Styles.DiscardButton} >
                        Discard
                    </button>

                </form>

            </div>

        </div>
    )
};

export default Create;
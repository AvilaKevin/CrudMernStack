import React from 'react'
import Styles from '../css/pagesCss/Customers.module.css'
import { RiSearchLine } from 'react-icons/ri'
import User from '../components/User'

function Dashboard() {
    return (

        <div className={Styles.Container}>

            <h1 className={Styles.h1}>Customers</h1>

            <div className={Styles.SearchContainer}>

                <input className={Styles.Input} placeholder="Search..." />
                <i><RiSearchLine /></i>

            </div>
            <User />

        </div>

    )
}

export default Dashboard    
import React from 'react'
import Styles from '../css/pagesCss/Dasboard.module.css'
import { RiSearchLine } from 'react-icons/ri'
import User from '../components/User'

function Dashboard() {
    return (

        <div className={Styles.Container}>

            <h1 className={Styles.h1}>Customers</h1>

            <div className={Styles.SearchContainer}>
                <div className={Styles.Search}>
                    <input className={Styles.Input} placeholder="Search..." />
                    <RiSearchLine />
                </div>
            </div>
            <User />
            {/* <div className={Styles.UsersTable}>
                
            </div> */}

        </div>

    )
}

export default Dashboard    
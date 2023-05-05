import React from 'react'
import Styles from '../css/pagesCss/Dasboard.module.css'
import { RiSearchLine } from 'react-icons/ri'
import User from '../components/User'

function Dashboard() {
    return (

        <div className={Styles.Container}>

            <div>
                <h1>Dashboard</h1>
            </div>

            <div className={Styles.SearchContainer}>
                <div>
                    <input />
                    <RiSearchLine />
                </div>
            </div>

            <div className={Styles.UsersTable}>
                <User />
            </div>

        </div>

    )
}

export default Dashboard    
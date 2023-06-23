import { useEffect, useState } from 'react';
import Styles from '../css/pagesCss/Customers.module.css';
import { RiSearchLine } from 'react-icons/ri';
import User from '../components/User';
import axios from 'axios';
import { AiOutlineFileExcel } from 'react-icons/ai';

function Dashboard() {
    const [customers, setCustomers] = useState([]);
    const [input, setInput] = useState('');

    // FETCH ALL DATA FROM DB
    const fetchCustomers = async () => {
        const res = await axios.get('/getUsers');
        setCustomers(res.data);
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    // SEARCH INTO DB
    const handleSearch = async () => {
        const res = await axios.get(`/search?q=${input}`);
        setCustomers(res.data);
    };

    return (
        <div className={Styles.Container}>
            <h1 className={Styles.h1}>Customers</h1>

            <div className={Styles.SearchContainer}>
                <input className={Styles.Input} placeholder='Search...' onChange={(e) => setInput(e.target.value)} />
                <i onClick={handleSearch}>
                    <RiSearchLine />
                </i>
            </div>

            <div className={Styles.pruebas}>
                {customers.length === 0 ? (
                    <div className={Styles.ErrContainer}>
                        <h1 className={Styles.h1}>Ups, no data</h1>
                        <i className={Styles.ErrIcon}>
                            <AiOutlineFileExcel />
                        </i>
                    </div>
                ) : (
                    customers.map((customer) => (
                        <User key={customer._id} customer={customer} fetchCustomers={fetchCustomers} />
                    ))
                )}
            </div>
        </div>
    );
}

export default Dashboard;

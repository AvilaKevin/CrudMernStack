import React, { useEffect } from 'react'
import Styles from '../css/pagesCss/Customers.module.css'
import { RiSearchLine } from 'react-icons/ri'
import User from '../components/User'
import { useState } from 'react'
import axios from 'axios'
import { AiOutlineFileExcel } from 'react-icons/ai'

function Dashboard() {

    // Se crea un estado que almacena la informacion de la api
    const [customers, setCustomers] = useState([]);

    const [input, setInput] = useState("");


    // Se crea una funcion encargada de capturar los customers de nuestra api
    // Debe ser asyn ya que se esta puede tardar un tiempo
    const fetchCustomers = async () => {
        // se crea variable que almacena la res, se indica q lo siguiente puede tardar con await, se procede a hacer uso de axios y del metodo get para dirigirse al endpoint y capturar la informacion de la api
        const res = await axios.get("/getUsers");

        // se almacena la res en nuestro estado
        setCustomers(res.data);
    };

    // Se hace uso de useEffect para captuarar la informacion de la api antes de que se renderice el componente
    useEffect(() => {
        fetchCustomers();
    }, []);

    const handleSearch = async () => {
        const res = await axios.get(`/search?q=${input}`)
        setCustomers(res.data)
    }

    return (

        <div className={Styles.Container}>

            <h1 className={Styles.h1}>Customers</h1>

            <div className={Styles.SearchContainer}>

                <input className={Styles.Input} placeholder="Search..." onChange={(e) => setInput(e.target.value)} />
                <i onClick={handleSearch}><RiSearchLine /></i>

            </div>

            {/* se hace uso de map para renderizar cada uno de los elementos que se traen de la api, 
            es necesario agregar un identificador osea key para que react no genere error, este puede ser el id, se envia la informacio capturada de la api a nuestro componente User para mostrar correctamente la informacion */}
            {customers.length === 0 ? <div className={Styles.ErrContainer}>
                <h1 className={Styles.h1}>Ups, no data</h1>
                <i className={Styles.ErrIcon}><AiOutlineFileExcel /></i>
            </div> :
                customers.map((customer) => (
                    <User key={customer._id} customer={customer} fetchCustomers={fetchCustomers} />
                ))}

        </div>

    )
}

export default Dashboard    
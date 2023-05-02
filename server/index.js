import express from "express";
import mongoose from "mongoose";

// Importamos la libreria para poder hacer uso de nuestra clave q esta en .env
import dotenv from "dotenv";

// Creamos nuestra app con express
const app = express();

// Creamos la configuracion de dotenv de lo contrario no va a funcionar al momento de llamar nuestra secret key
dotenv.config();

// Creamos nuestra funcion de conexion a la base de datos que tenemos en mogodb usando mongoose:
// Dentro de los parentesis va nuestra secret key, en este caso llamamos la variable MONGO q creamos en .env
// Luego podemos agregar then y un catch pa validar si hay un error o si todo funciona bien con la bd
const connect = () => {
    mongoose
        .connect(process.env.MONGO)
        .then(() => {
            console.log("Connected to DB");
        })
        .catch((err) => {
            throw err;
        });
};

// Creamos una funcion que inicializa nuestro server en el puerto seleccionado:
// Tambien debemos agregar la funcion que se encarga de conectar a nuestra base de datos, en este caso es connect la cual conecta a mongoDB
app.listen(8800, () => {
    connect()
    console.log("Connected to server!")
});
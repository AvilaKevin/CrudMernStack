import express from "express";
import mongoose from "mongoose";

// llamamos la ruta de nuestra crud, y la nombramos como queremos usarla en este archivo.
import crudRoutes from "./routes/rCrud.js";

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

// MIDDLEWARE SECTION: {
// Cuando el usuario realiza alguna peticion se ejecutan las middleware en orden, en este caso ejecuta la de express.json, luego busca el middleware que contenga la ruta de la peticion, si dentro de la funcion del controlador esta next() esto ejecutara la siguiente middleware en este caso sera el manejo de errores y interrumpira la peticion, osea no se va a ejecutar el resto de la funcion del controlador.

// Esto agrega un middleware de express que nos permite utilizar los objetos que se capturen del cuerpo de nuestra pagina.
app.use(express.json());

// escribimos la siguiente linea la cual nos permite ejecutar las rutas que tenemos en crudRoutes al momento que ingresemos a "/api/crud", esto gracias a la funcion use de express que indica que se utilizaran las rutas del archivo creado. la ruta la podemos modificar a nuestro gusto
app.use("/api/crud", crudRoutes);

// De este modo podemos manejar los errores del servidor de express, en este middleware podemos enviarle a nuestro usuarios cualquier error en especifico
app.use((err, req, res, next) => {
    // Empezamos creando nuestras variables:

    // Esto almacena el status, si no se recibe uno, el valor sera 500
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";

    // Se envia al usuario
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

// }


// Creamos una funcion que inicializa nuestro server en el puerto seleccionado:
// Tambien debemos agregar la funcion que se encarga de conectar a nuestra base de datos, en este caso es connect la cual conecta a mongoDB
app.listen(8800, () => {
    connect();
    console.log("Connected to server!");
});
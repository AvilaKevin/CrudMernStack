// Se llama mongoose para poder comunicarnos con la base de datos
import mongoose from "mongoose";
// Se llama nuestro objeto para poder crear uno nuevo
import User from "../models/User.js"

import { createError } from "../error.js";

// En las funciones de los controladores tenemos los siguiente parametros:
// req: representa lo que estamos objetiendo del usuario.
// res: lo que estamos enviandole al usuario
// next: indica que debe ejecutar el siguiente middleware espicificado en el index
// export const test = (req, res) => {
//     res.json("Its successfull");
//     console.log("test is working");
// };


// CREATE A USER
// si se se usa mongoose se debe poner async la funcion ya que puede tomar un tiempo
export const createUser = async (req, res, next) => {
    try {
        // se crea un nuevo usuario apartir de los datos ingresados en el body de nuestra pg
        const newUser = new User(req.body);

        // Guardamos nuestro usuario en la base de datos con la siguiente linea de codigo:
        await newUser.save();
        res.status(200).send("User has been created!");
    } catch (err) {
        next(err);
    };
};


// DELETE USER
export const deleteUser = async (req, res, next) => {
    try {
        // Se indica que realice una query sobre el esquema User y ejecutamos una query usando mongoose el cual busca y elimina segun el id, el id se pasa pormedio de los parametros de nuestra url
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("User deleted");
    } catch (err) {
        next(err);
    };
};

// GET USERS
export const getUsers = async (req, res, next) => {
    try {
        // Se crea una variable que almacena los objetos de nuestra bd, se indica que debe buscar y traer todos los objetos de nuestra bd
        const dbUsers = await User.find({});
        res.status(200).json(dbUsers);
    } catch (err) {
        next(err);
    };
};

// UPDATE USER
export const updateUser = async (req, res, next) => {
    const userId = req.params.id;

    // se valida si el string que se paso cumple con las caracteristicas de un id de mongo db el cual debe ser de 12 bytes los cuales se dividen en segementos que tienen un significado
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return next(createError(400, "Invalid user id"));
    }

    try {
        // Se ejecuta la query de mongoose sobre User, la query recibe el id para buscar el objeto a actualizar, recibe la modificacion, la cual se puede pasar como variable, osea se almacena en una variable la modificacion y luego se pasa como parametro y por ultimo recibe la opcion new tru para aplicar la modificacion
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: req.body },
            { new: true }
        );

        // Si el id no fue encontrado se ejecuta el middleware encargado de crear un error en especifico
        if (!updatedUser) {
            return next(createError(404, "User not found"));
        }

        res.status(200).json(updatedUser);
    } catch (err) {
        next(err);
    }
};


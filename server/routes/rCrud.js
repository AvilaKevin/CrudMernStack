import express from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/cCrud.js";

// Se crea el enrutador para este archivo
const router = express.Router();

// // Creamos una ruta la cual esta compuesta por el metodo de html, el endpoint que va entre comillas y la funcion controladora
// router.get("/test", test);

// CREATE A USER
router.post("/userCreation", createUser);

// DELETE USERS
router.delete("/deleteUser/:id", deleteUser);

// GET ALL USERS
router.get("/getUsers", getUsers);

// UPDATE A USER
router.put("/updateUser/:id", updateUser)

export default router;